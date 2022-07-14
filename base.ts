/* tslint:disable */
/* eslint-disable */
/**
 * IONOS DBaaS REST API
 * An enterprise-grade Database is provided as a Service (DBaaS) solution that can be managed through a browser-based \"Data Center Designer\" (DCD) tool or via an easy to use API.  The API allows you to create additional database clusters or modify existing ones. It is designed to allow users to leverage the same power and flexibility found within the DCD visual tool. Both tools are consistent with their concepts and lend well to making the experience smooth and intuitive. 
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration, DEFAULT_MAX_RETRIES, DEFAULT_MAX_WAIT_TIME } from "./configuration";
// Some imports not used depending on template conditions
// @ts-ignore
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';

export const BASE_PATH = "https://api.ionos.com/databases/postgresql".replace(/\/+$/, "");

/**
 *
 * @export
 */
export const COLLECTION_FORMATS = {
    csv: ",",
    ssv: " ",
    tsv: "\t",
    pipes: "|",
};

/**
 *
 * @export
 * @interface RequestArgs
 */
export interface RequestArgs {
    url: string;
    options: any;
}

/**
 *
 * @export
 * @class BaseAPI
 */
export class BaseAPI {
    protected configuration: Configuration | undefined;

    constructor(configuration?: Configuration, protected basePath: string = BASE_PATH, protected axios: AxiosInstance = globalAxios) {
        if (configuration) {
            this.configuration = configuration;
            this.basePath = configuration.basePath || this.basePath;
        }
    }
};

/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export class RequiredError extends Error {
    name: "RequiredError" = "RequiredError";
    constructor(public field: string, msg?: string) {
        super(msg);
    }
}

const debug = (message: string, configuration?: Configuration) => {
    if (configuration && configuration.debug) {
        console.log(`[ ${configuration.getUserAgent()} ][debug] ${message}`);
    }
}

export const backOff = async (iteration: number, seconds?: number, configuration?: Configuration): Promise<any> => {
    let sleepTime = 0;
    if (seconds === undefined) {
        const maxWaitTime = (configuration !== undefined) ? configuration.getMaxWaitTime() : DEFAULT_MAX_WAIT_TIME;
        sleepTime = Math.min(Math.pow(2, iteration) * 1000, maxWaitTime);
    } else {
        sleepTime = seconds * 1000;
    }
	if (sleepTime > 0) {
		debug(`backing off ${sleepTime/1000}s before retrying`, configuration);
	}
    return await new Promise((res, rej) => setTimeout(res, sleepTime));
}

export const runRequest = (axiosArgs: RequestArgs, configuration?: Configuration) => async (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
    const axiosRequestArgs = {...axiosArgs.options, url: (configuration?.basePath || basePath) + axiosArgs.url};

    let retries = 0;
    let retryAfter = undefined;
    const maxRetries = (configuration !== undefined) ? configuration.getMaxRetries() : DEFAULT_MAX_RETRIES;

    do {
        try {
            await backOff(retries, retryAfter, configuration);
            retryAfter = undefined;
            retries ++;
            return await axios.request(axiosRequestArgs);
        } catch (error) {
            if (error.response === undefined) {
                throw error;
            }

			if (retries >= maxRetries) {
				debug(`maximum number of retries (${maxRetries} exhausted`);
				throw error;
			}

            switch (error.response.status) {
                case 502: /* bad gateway */
                case 503: /* service unavailable */
                case 504: /* gateway timeout */
                    /* backoff exponentially and retry */
					debug(`got ${error.response.status} from the API, retrying`, configuration);
                    break;
                case 429: /* too many requests */
                    /* use the value of the Retry-After header as backoff seconds */
					debug(`got ${error.response.status} from the API, retrying`, configuration);
                    if (error.response.headers !== undefined && error.response.headers['Retry-After'] !== undefined) {
                        retryAfter = Number(error.response.headers['Retry-After'])
                        if (isNaN(retryAfter)) {
                            retryAfter = undefined;
                        } else {
							debug(`Retry-After = ${retryAfter}`, configuration);
						}
                    }
                    break;
                default:
                    throw error;
            }

        }
    } while (retries < maxRetries);
};



