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


import { Connection } from './connection';
import { MaintenanceWindow } from './maintenance-window';

/**
 * Properties of the payload to change a cluster
 * @export
 * @interface PatchClusterProperties
 */
export interface PatchClusterProperties {
    /**
     * The number of CPU cores per instance.
     * @type {number}
     * @memberof PatchClusterProperties
     */
    cores?: number;
    /**
     * The amount of memory per instance in megabytes. Has to be a multiple of 1024.
     * @type {number}
     * @memberof PatchClusterProperties
     */
    ram?: number;
    /**
     * The amount of storage per instance in megabytes.
     * @type {number}
     * @memberof PatchClusterProperties
     */
    storageSize?: number;
    /**
     * 
     * @type {Array<Connection>}
     * @memberof PatchClusterProperties
     */
    connections?: Array<Connection>;
    /**
     * The friendly name of your cluster.
     * @type {string}
     * @memberof PatchClusterProperties
     */
    displayName?: string;
    /**
     * 
     * @type {MaintenanceWindow}
     * @memberof PatchClusterProperties
     */
    maintenanceWindow?: MaintenanceWindow;
    /**
     * The PostgreSQL version of your cluster.
     * @type {string}
     * @memberof PatchClusterProperties
     */
    postgresVersion?: string;
    /**
     * The total number of instances in the cluster (one master and n-1 standbys). 
     * @type {number}
     * @memberof PatchClusterProperties
     */
    instances?: number;
}


