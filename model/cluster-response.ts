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


import { ClusterMetadata } from './cluster-metadata';
import { ClusterProperties } from './cluster-properties';
import { ResourceType } from './resource-type';

/**
 * A database cluster.
 * @export
 * @interface ClusterResponse
 */
export interface ClusterResponse {

    /**
     * 
     * @type {ResourceType}
     * @memberof ClusterResponse
     */
    type?: ResourceType;

    /**
     * The unique ID of the resource.
     * @type {string}
     * @memberof ClusterResponse
     */
    id?: string;

    /**
     * 
     * @type {ClusterMetadata}
     * @memberof ClusterResponse
     */
    metadata?: ClusterMetadata;

    /**
     * 
     * @type {ClusterProperties}
     * @memberof ClusterResponse
     */
    properties?: ClusterProperties;
}








