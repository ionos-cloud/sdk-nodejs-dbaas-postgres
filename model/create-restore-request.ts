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



/**
 * The restore request.
 * @export
 * @interface CreateRestoreRequest
 */
export interface CreateRestoreRequest {

    /**
     * The unique ID of the backup you want to restore.
     * @type {string}
     * @memberof CreateRestoreRequest
     */
    backupId: string;

    /**
     * If this value is supplied as ISO 8601 timestamp, the backup will be replayed up until the given timestamp. If empty, the backup will be applied completely. 
     * @type {string}
     * @memberof CreateRestoreRequest
     */
    recoveryTargetTime?: string;
}


