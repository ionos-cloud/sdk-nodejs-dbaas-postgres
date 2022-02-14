/* tslint:disable */
/* eslint-disable */
/**
 * IONOS DBaaS REST API
 * An enterprise-grade Database is provided as a Service (DBaaS) solution that can be managed through a browser-based \"Data Center Designer\" (DCD) tool or via an easy to use API.  The API allows you to create additional database clusters or modify existing ones. It is designed to allow users to leverage the same power and flexibility found within the DCD visual tool. Both tools are consistent with their concepts and lend well to making the experience smooth and intuitive. 
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { BackupMetadata } from './backup-metadata';
import { ClusterBackup } from './cluster-backup';
import { ResourceType } from './resource-type';

/**
 * A database backup
 * @export
 * @interface BackupResponse
 */
export interface BackupResponse {
    /**
     * 
     * @type {ResourceType}
     * @memberof BackupResponse
     */
    type?: ResourceType;
    /**
     * The unique ID of the resource.
     * @type {string}
     * @memberof BackupResponse
     */
    id?: string;
    /**
     * 
     * @type {BackupMetadata}
     * @memberof BackupResponse
     */
    metadata?: BackupMetadata;
    /**
     * 
     * @type {ClusterBackup}
     * @memberof BackupResponse
     */
    properties?: ClusterBackup;
}


