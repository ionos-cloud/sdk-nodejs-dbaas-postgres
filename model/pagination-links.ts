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



/**
 * URLs to navigate the different pages. As of now we always only return a single page. 
 * @export
 * @interface PaginationLinks
 */
export interface PaginationLinks {

    /**
     * URL (with offset and limit parameters) of the previous page; only present if offset is greater than 0. 
     * @type {string}
     * @memberof PaginationLinks
     */
    prev?: string;

    /**
     * URL (with offset and limit parameters) of the current page. 
     * @type {string}
     * @memberof PaginationLinks
     */
    self?: string;

    /**
     * URL (with offset and limit parameters) of the next page; only present if offset + limit is less than the total number of elements. 
     * @type {string}
     * @memberof PaginationLinks
     */
    next?: string;
}


