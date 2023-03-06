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
 * A backup object.
 * @export
 * @interface ClusterBackup
 */
export interface ClusterBackup {

    /**
     * The unique ID of the resource.
     * @type {string}
     * @memberof ClusterBackup
     */
    id?: string;

    /**
     * The unique ID of the cluster.
     * @type {string}
     * @memberof ClusterBackup
     */
    clusterId?: string;

    /**
     * The PostgreSQL version this backup was created from.
     * @type {string}
     * @memberof ClusterBackup
     */
    version?: string;

    /**
     * Whether a cluster currently backs up data to this backup.
     * @type {boolean}
     * @memberof ClusterBackup
     */
    isActive?: boolean;

    /**
     * The oldest available timestamp to which you can restore.
     * @type {string}
     * @memberof ClusterBackup
     */
    earliestRecoveryTargetTime?: string;

    /**
     * Size of all base backups including the wal size in MB.
     * @type {number}
     * @memberof ClusterBackup
     */
    size?: number;

    /**
     * The S3 location where the backups will be stored.
     * @type {string}
     * @memberof ClusterBackup
     */
    location?: string;
}


