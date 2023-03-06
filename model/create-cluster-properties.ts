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
import { CreateRestoreRequest } from './create-restore-request';
import { DBUser } from './dbuser';
import { MaintenanceWindow } from './maintenance-window';
import { StorageType } from './storage-type';
import { SynchronizationMode } from './synchronization-mode';

/**
 * Properties with all data needed to create a new PostgreSQL cluster. 
 * @export
 * @interface CreateClusterProperties
 */
export interface CreateClusterProperties {

    /**
     * The PostgreSQL version of your cluster.
     * @type {string}
     * @memberof CreateClusterProperties
     */
    postgresVersion: string;

    /**
     * The total number of instances in the cluster (one master and n-1 standbys). 
     * @type {number}
     * @memberof CreateClusterProperties
     */
    instances: number;

    /**
     * The number of CPU cores per instance.
     * @type {number}
     * @memberof CreateClusterProperties
     */
    cores: number;

    /**
     * The amount of memory per instance in megabytes. Has to be a multiple of 1024.
     * @type {number}
     * @memberof CreateClusterProperties
     */
    ram: number;

    /**
     * The amount of storage per instance in megabytes.
     * @type {number}
     * @memberof CreateClusterProperties
     */
    storageSize: number;

    /**
     * 
     * @type {StorageType}
     * @memberof CreateClusterProperties
     */
    storageType: StorageType;

    /**
     * 
     * @type {Array<Connection>}
     * @memberof CreateClusterProperties
     */
    connections: Array<Connection>;

    /**
     * The physical location where the cluster will be created. This will be where all of your instances live. Property cannot be modified after datacenter creation. 
     * @type {string}
     * @memberof CreateClusterProperties
     */
    location: string;

    /**
     * The S3 location where the backups will be stored.
     * @type {string}
     * @memberof CreateClusterProperties
     */
    backupLocation?: string;

    /**
     * The friendly name of your cluster.
     * @type {string}
     * @memberof CreateClusterProperties
     */
    displayName: string;

    /**
     * 
     * @type {MaintenanceWindow}
     * @memberof CreateClusterProperties
     */
    maintenanceWindow?: MaintenanceWindow;

    /**
     * 
     * @type {DBUser}
     * @memberof CreateClusterProperties
     */
    credentials: DBUser;

    /**
     * 
     * @type {SynchronizationMode}
     * @memberof CreateClusterProperties
     */
    synchronizationMode: SynchronizationMode;

    /**
     * 
     * @type {CreateRestoreRequest}
     * @memberof CreateClusterProperties
     */
    fromBackup?: CreateRestoreRequest;
}


