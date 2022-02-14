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


import { PaginationLinks } from './pagination-links';

/**
 * 
 * @export
 * @interface Pagination
 */
export interface Pagination {
    /**
     * The offset specified in the request (if none was specified, the default offset is 0) (not implemented yet). 
     * @type {number}
     * @memberof Pagination
     */
    offset?: number;
    /**
     * The limit specified in the request (if none was specified, use the endpoint\'s default pagination limit) (not implemented yet, always return number of items). 
     * @type {number}
     * @memberof Pagination
     */
    limit?: number;
    /**
     * 
     * @type {PaginationLinks}
     * @memberof Pagination
     */
    _links?: PaginationLinks;
}


