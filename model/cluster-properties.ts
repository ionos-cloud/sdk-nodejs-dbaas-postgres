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


import { Connection } from './connection';
import { MaintenanceWindow } from './maintenance-window';
import { StorageType } from './storage-type';
import { SynchronizationMode } from './synchronization-mode';

/**
 * Properties of a database cluster.
 * @export
 * @interface ClusterProperties
 */
export interface ClusterProperties {

    /**
     * The friendly name of your cluster.
     * @type {string}
     * @memberof ClusterProperties
     */
    displayName?: string;

    /**
     * The PostgreSQL version of your cluster.
     * @type {string}
     * @memberof ClusterProperties
     */
    postgresVersion?: string;

    /**
     * The physical location where the cluster will be created. This will be where all of your instances live. Property cannot be modified after datacenter creation. 
     * @type {string}
     * @memberof ClusterProperties
     */
    location?: string;

    /**
     * The DNS name pointing to your cluster.
     * @type {string}
     * @memberof ClusterProperties
     */
    dnsName?: string;

    /**
     * The S3 location where the backups will be stored.
     * @type {string}
     * @memberof ClusterProperties
     */
    backupLocation?: string;

    /**
     * The total number of instances in the cluster (one master and n-1 standbys). 
     * @type {number}
     * @memberof ClusterProperties
     */
    instances?: number;

    /**
     * The amount of memory per instance in megabytes. Has to be a multiple of 1024.
     * @type {number}
     * @memberof ClusterProperties
     */
    ram?: number;

    /**
     * The number of CPU cores per instance.
     * @type {number}
     * @memberof ClusterProperties
     */
    cores?: number;

    /**
     * The amount of storage per instance in megabytes.
     * @type {number}
     * @memberof ClusterProperties
     */
    storageSize?: number;

    /**
     * 
     * @type {StorageType}
     * @memberof ClusterProperties
     */
    storageType?: StorageType;

    /**
     * 
     * @type {Array<Connection>}
     * @memberof ClusterProperties
     */
    connections?: Array<Connection>;

    /**
     * 
     * @type {MaintenanceWindow}
     * @memberof ClusterProperties
     */
    maintenanceWindow?: MaintenanceWindow;

    /**
     * 
     * @type {SynchronizationMode}
     * @memberof ClusterProperties
     */
    synchronizationMode?: SynchronizationMode;
}

















