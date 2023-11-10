/* tslint:disable */
/* eslint-disable */
/**
 * IONOS DBaaS PostgreSQL REST API
 * An enterprise-grade Database is provided as a Service (DBaaS) solution that can be managed through a browser-based \"Data Center Designer\" (DCD) tool or via an easy to use API.  The API allows you to create additional PostgreSQL database clusters or modify existing ones. It is designed to allow users to leverage the same power and flexibility found within the DCD visual tool. Both tools are consistent with their concepts and lend well to making the experience smooth and intuitive. 
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration, DEFAULT_MAX_RETRIES, DEFAULT_MAX_WAIT_TIME } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError, backOff, runRequest } from '../base';
// @ts-ignore
import { ErrorResponse } from '../model';
// @ts-ignore
import { User } from '../model';
// @ts-ignore
import { UserList } from '../model';
// @ts-ignore
import { UserResource } from '../model';
// @ts-ignore
import { UsersPatchRequest } from '../model';
/**
 * UsersApi - axios parameter creator
 * @export
 */
export const UsersApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Deletes a single user
         * @summary Delete user
         * @param {string} clusterId The unique ID of the cluster.
         * @param {string} username The authentication username.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        usersDelete: async (clusterId: string, username: string, options: any = {}): Promise<RequestArgs> => {
            if (clusterId === null || clusterId === undefined) {
                throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling usersDelete.');
            }
            if (username === null || username === undefined) {
                throw new RequiredError('username','Required parameter username was null or undefined when calling usersDelete.');
            }
            const localVarPath = `/clusters/{clusterId}/users/{username}`
                .replace(`{${"clusterId"}}`, encodeURIComponent(String(clusterId)))
                .replace(`{${"username"}}`, encodeURIComponent(String(username)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            if (configuration && (configuration.username || configuration.password)) {
                localVarRequestOptions["auth"] = { username: configuration.username, password: configuration.password };
            }

            // authentication tokenAuth required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarApiKeyValue;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';
            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieves a single user
         * @summary Get user
         * @param {string} clusterId The unique ID of the cluster.
         * @param {string} username The authentication username.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        usersGet: async (clusterId: string, username: string, options: any = {}): Promise<RequestArgs> => {
            if (clusterId === null || clusterId === undefined) {
                throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling usersGet.');
            }
            if (username === null || username === undefined) {
                throw new RequiredError('username','Required parameter username was null or undefined when calling usersGet.');
            }
            const localVarPath = `/clusters/{clusterId}/users/{username}`
                .replace(`{${"clusterId"}}`, encodeURIComponent(String(clusterId)))
                .replace(`{${"username"}}`, encodeURIComponent(String(username)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            if (configuration && (configuration.username || configuration.password)) {
                localVarRequestOptions["auth"] = { username: configuration.username, password: configuration.password };
            }

            // authentication tokenAuth required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarApiKeyValue;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';
            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieves a list of users
         * @summary List users
         * @param {string} clusterId The unique ID of the cluster.
         * @param {number} [limit] The maximum number of elements to return. Use together with \&#39;offset\&#39; for pagination.
         * @param {number} [offset] The first element to return. Use together with \&#39;limit\&#39; for pagination.
         * @param {boolean} [system] If set to \&#39;true\&#39; all users, including system users are returned. System users cannot be deleted or updated.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        usersList: async (clusterId: string, limit?: number, offset?: number, system?: boolean, options: any = {}): Promise<RequestArgs> => {
            if (clusterId === null || clusterId === undefined) {
                throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling usersList.');
            }
            const localVarPath = `/clusters/{clusterId}/users`
                .replace(`{${"clusterId"}}`, encodeURIComponent(String(clusterId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            if (configuration && (configuration.username || configuration.password)) {
                localVarRequestOptions["auth"] = { username: configuration.username, password: configuration.password };
            }

            // authentication tokenAuth required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarApiKeyValue;
            }

            if ((limit === undefined) && (configuration !== undefined)) {
                limit = configuration.getDefaultParamValue('limit');
            }
            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if ((offset === undefined) && (configuration !== undefined)) {
                offset = configuration.getDefaultParamValue('offset');
            }
            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            if ((system === undefined) && (configuration !== undefined)) {
                system = configuration.getDefaultParamValue('system');
            }
            if (system !== undefined) {
                localVarQueryParameter['system'] = system;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';
            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Patches a single user. Only changing the password is supported. System users cannot be patched.
         * @summary Patch user
         * @param {string} clusterId The unique ID of the cluster.
         * @param {string} username The authentication username.
         * @param {UsersPatchRequest} usersPatchRequest Patch containing all properties that should be updated
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        usersPatch: async (clusterId: string, username: string, usersPatchRequest: UsersPatchRequest, options: any = {}): Promise<RequestArgs> => {
            if (clusterId === null || clusterId === undefined) {
                throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling usersPatch.');
            }
            if (username === null || username === undefined) {
                throw new RequiredError('username','Required parameter username was null or undefined when calling usersPatch.');
            }
            if (usersPatchRequest === null || usersPatchRequest === undefined) {
                throw new RequiredError('usersPatchRequest','Required parameter usersPatchRequest was null or undefined when calling usersPatch.');
            }
            const localVarPath = `/clusters/{clusterId}/users/{username}`
                .replace(`{${"clusterId"}}`, encodeURIComponent(String(clusterId)))
                .replace(`{${"username"}}`, encodeURIComponent(String(username)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            if (configuration && (configuration.username || configuration.password)) {
                localVarRequestOptions["auth"] = { username: configuration.username, password: configuration.password };
            }

            // authentication tokenAuth required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarApiKeyValue;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';
            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const nonString = typeof usersPatchRequest !== 'string';
            const needsSerialization = nonString && configuration && configuration.isJsonMime
                ? configuration.isJsonMime(localVarRequestOptions.headers['Content-Type'])
                : nonString;
            localVarRequestOptions.data =  needsSerialization
                ? JSON.stringify(usersPatchRequest !== undefined ? usersPatchRequest : {})
                : (usersPatchRequest || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Create a new Postgres User
         * @summary Create a user
         * @param {string} clusterId The unique ID of the cluster.
         * @param {User} user 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        usersPost: async (clusterId: string, user: User, options: any = {}): Promise<RequestArgs> => {
            if (clusterId === null || clusterId === undefined) {
                throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling usersPost.');
            }
            if (user === null || user === undefined) {
                throw new RequiredError('user','Required parameter user was null or undefined when calling usersPost.');
            }
            const localVarPath = `/clusters/{clusterId}/users`
                .replace(`{${"clusterId"}}`, encodeURIComponent(String(clusterId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            if (configuration && (configuration.username || configuration.password)) {
                localVarRequestOptions["auth"] = { username: configuration.username, password: configuration.password };
            }

            // authentication tokenAuth required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarApiKeyValue;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';
            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const nonString = typeof user !== 'string';
            const needsSerialization = nonString && configuration && configuration.isJsonMime
                ? configuration.isJsonMime(localVarRequestOptions.headers['Content-Type'])
                : nonString;
            localVarRequestOptions.data =  needsSerialization
                ? JSON.stringify(user !== undefined ? user : {})
                : (user || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UsersApi - functional programming interface
 * @export
 */
export const UsersApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Deletes a single user
         * @summary Delete user
         * @param {string} clusterId The unique ID of the cluster.
         * @param {string} username The authentication username.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async usersDelete(clusterId: string, username: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const axiosArgs = await UsersApiAxiosParamCreator(configuration).usersDelete(clusterId, username, options);
            return runRequest(axiosArgs, configuration);
        },
        /**
         * Retrieves a single user
         * @summary Get user
         * @param {string} clusterId The unique ID of the cluster.
         * @param {string} username The authentication username.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async usersGet(clusterId: string, username: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserResource>> {
            const axiosArgs = await UsersApiAxiosParamCreator(configuration).usersGet(clusterId, username, options);
            return runRequest(axiosArgs, configuration);
        },
        /**
         * Retrieves a list of users
         * @summary List users
         * @param {string} clusterId The unique ID of the cluster.
         * @param {number} [limit] The maximum number of elements to return. Use together with \&#39;offset\&#39; for pagination.
         * @param {number} [offset] The first element to return. Use together with \&#39;limit\&#39; for pagination.
         * @param {boolean} [system] If set to \&#39;true\&#39; all users, including system users are returned. System users cannot be deleted or updated.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async usersList(clusterId: string, limit?: number, offset?: number, system?: boolean, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserList>> {
            const axiosArgs = await UsersApiAxiosParamCreator(configuration).usersList(clusterId, limit, offset, system, options);
            return runRequest(axiosArgs, configuration);
        },
        /**
         * Patches a single user. Only changing the password is supported. System users cannot be patched.
         * @summary Patch user
         * @param {string} clusterId The unique ID of the cluster.
         * @param {string} username The authentication username.
         * @param {UsersPatchRequest} usersPatchRequest Patch containing all properties that should be updated
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async usersPatch(clusterId: string, username: string, usersPatchRequest: UsersPatchRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserResource>> {
            const axiosArgs = await UsersApiAxiosParamCreator(configuration).usersPatch(clusterId, username, usersPatchRequest, options);
            return runRequest(axiosArgs, configuration);
        },
        /**
         * Create a new Postgres User
         * @summary Create a user
         * @param {string} clusterId The unique ID of the cluster.
         * @param {User} user 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async usersPost(clusterId: string, user: User, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserResource>> {
            const axiosArgs = await UsersApiAxiosParamCreator(configuration).usersPost(clusterId, user, options);
            return runRequest(axiosArgs, configuration);
        },
    }
};

/**
 * UsersApi - factory interface
 * @export
 */
export const UsersApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Deletes a single user
         * @summary Delete user
         * @param {string} clusterId The unique ID of the cluster.
         * @param {string} username The authentication username.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        usersDelete(clusterId: string, username: string, options?: any): AxiosPromise<void> {
            return UsersApiFp(configuration).usersDelete(clusterId, username, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves a single user
         * @summary Get user
         * @param {string} clusterId The unique ID of the cluster.
         * @param {string} username The authentication username.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        usersGet(clusterId: string, username: string, options?: any): AxiosPromise<UserResource> {
            return UsersApiFp(configuration).usersGet(clusterId, username, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves a list of users
         * @summary List users
         * @param {string} clusterId The unique ID of the cluster.
         * @param {number} [limit] The maximum number of elements to return. Use together with \&#39;offset\&#39; for pagination.
         * @param {number} [offset] The first element to return. Use together with \&#39;limit\&#39; for pagination.
         * @param {boolean} [system] If set to \&#39;true\&#39; all users, including system users are returned. System users cannot be deleted or updated.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        usersList(clusterId: string, limit?: number, offset?: number, system?: boolean, options?: any): AxiosPromise<UserList> {
            return UsersApiFp(configuration).usersList(clusterId, limit, offset, system, options).then((request) => request(axios, basePath));
        },
        /**
         * Patches a single user. Only changing the password is supported. System users cannot be patched.
         * @summary Patch user
         * @param {string} clusterId The unique ID of the cluster.
         * @param {string} username The authentication username.
         * @param {UsersPatchRequest} usersPatchRequest Patch containing all properties that should be updated
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        usersPatch(clusterId: string, username: string, usersPatchRequest: UsersPatchRequest, options?: any): AxiosPromise<UserResource> {
            return UsersApiFp(configuration).usersPatch(clusterId, username, usersPatchRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Create a new Postgres User
         * @summary Create a user
         * @param {string} clusterId The unique ID of the cluster.
         * @param {User} user 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        usersPost(clusterId: string, user: User, options?: any): AxiosPromise<UserResource> {
            return UsersApiFp(configuration).usersPost(clusterId, user, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for usersDelete operation in UsersApi.
 * @export
 * @interface UsersApiUsersDeleteRequest
 */
export interface UsersApiUsersDeleteRequest {
    /**
     * The unique ID of the cluster.
     * @type {string}
     * @memberof UsersApiUsersDelete
     */
    readonly clusterId: string

    /**
     * The authentication username.
     * @type {string}
     * @memberof UsersApiUsersDelete
     */
    readonly username: string
}

/**
 * Request parameters for usersGet operation in UsersApi.
 * @export
 * @interface UsersApiUsersGetRequest
 */
export interface UsersApiUsersGetRequest {
    /**
     * The unique ID of the cluster.
     * @type {string}
     * @memberof UsersApiUsersGet
     */
    readonly clusterId: string

    /**
     * The authentication username.
     * @type {string}
     * @memberof UsersApiUsersGet
     */
    readonly username: string
}

/**
 * Request parameters for usersList operation in UsersApi.
 * @export
 * @interface UsersApiUsersListRequest
 */
export interface UsersApiUsersListRequest {
    /**
     * The unique ID of the cluster.
     * @type {string}
     * @memberof UsersApiUsersList
     */
    readonly clusterId: string

    /**
     * The maximum number of elements to return. Use together with \&#39;offset\&#39; for pagination.
     * @type {number}
     * @memberof UsersApiUsersList
     */
    readonly limit?: number

    /**
     * The first element to return. Use together with \&#39;limit\&#39; for pagination.
     * @type {number}
     * @memberof UsersApiUsersList
     */
    readonly offset?: number

    /**
     * If set to \&#39;true\&#39; all users, including system users are returned. System users cannot be deleted or updated.
     * @type {boolean}
     * @memberof UsersApiUsersList
     */
    readonly system?: boolean
}

/**
 * Request parameters for usersPatch operation in UsersApi.
 * @export
 * @interface UsersApiUsersPatchRequest
 */
export interface UsersApiUsersPatchRequest {
    /**
     * The unique ID of the cluster.
     * @type {string}
     * @memberof UsersApiUsersPatch
     */
    readonly clusterId: string

    /**
     * The authentication username.
     * @type {string}
     * @memberof UsersApiUsersPatch
     */
    readonly username: string

    /**
     * Patch containing all properties that should be updated
     * @type {UsersPatchRequest}
     * @memberof UsersApiUsersPatch
     */
    readonly usersPatchRequest: UsersPatchRequest
}

/**
 * Request parameters for usersPost operation in UsersApi.
 * @export
 * @interface UsersApiUsersPostRequest
 */
export interface UsersApiUsersPostRequest {
    /**
     * The unique ID of the cluster.
     * @type {string}
     * @memberof UsersApiUsersPost
     */
    readonly clusterId: string

    /**
     * 
     * @type {User}
     * @memberof UsersApiUsersPost
     */
    readonly user: User
}

/**
 * UsersApi - object-oriented interface
 * @export
 * @class UsersApi
 * @extends {BaseAPI}
 */
export class UsersApi extends BaseAPI {
    /**
     * Deletes a single user
     * @summary Delete user
     * @param {UsersApiUsersDeleteRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public usersDelete(requestParameters: UsersApiUsersDeleteRequest, options?: any) {
        return UsersApiFp(this.configuration).usersDelete(requestParameters.clusterId, requestParameters.username, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves a single user
     * @summary Get user
     * @param {UsersApiUsersGetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public usersGet(requestParameters: UsersApiUsersGetRequest, options?: any) {
        return UsersApiFp(this.configuration).usersGet(requestParameters.clusterId, requestParameters.username, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves a list of users
     * @summary List users
     * @param {UsersApiUsersListRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public usersList(requestParameters: UsersApiUsersListRequest, options?: any) {
        return UsersApiFp(this.configuration).usersList(requestParameters.clusterId, requestParameters.limit, requestParameters.offset, requestParameters.system, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Patches a single user. Only changing the password is supported. System users cannot be patched.
     * @summary Patch user
     * @param {UsersApiUsersPatchRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public usersPatch(requestParameters: UsersApiUsersPatchRequest, options?: any) {
        return UsersApiFp(this.configuration).usersPatch(requestParameters.clusterId, requestParameters.username, requestParameters.usersPatchRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Create a new Postgres User
     * @summary Create a user
     * @param {UsersApiUsersPostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public usersPost(requestParameters: UsersApiUsersPostRequest, options?: any) {
        return UsersApiFp(this.configuration).usersPost(requestParameters.clusterId, requestParameters.user, options).then((request) => request(this.axios, this.basePath));
    }
}