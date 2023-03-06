# ClustersApi

All URIs are relative to *https://api.ionos.com/databases/postgresql*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**clusterPostgresVersionsGet**](ClustersApi.md#clusterpostgresversionsget) | **GET** /clusters/{clusterId}/postgresversions | List PostgreSQL versions |
| [**clustersDelete**](ClustersApi.md#clustersdelete) | **DELETE** /clusters/{clusterId} | Delete a cluster |
| [**clustersFindById**](ClustersApi.md#clustersfindbyid) | **GET** /clusters/{clusterId} | Fetch a cluster |
| [**clustersGet**](ClustersApi.md#clustersget) | **GET** /clusters | List clusters |
| [**clustersPatch**](ClustersApi.md#clusterspatch) | **PATCH** /clusters/{clusterId} | Patch a cluster |
| [**clustersPost**](ClustersApi.md#clusterspost) | **POST** /clusters | Create a cluster |
| [**postgresVersionsGet**](ClustersApi.md#postgresversionsget) | **GET** /clusters/postgresversions | List PostgreSQL versions |


## clusterPostgresVersionsGet

> <PostgresVersionList> clusterPostgresVersionsGet(clusterId)

List PostgreSQL versions

Retrieves a list of all PostgreSQL versions available for this cluster including the current version. 

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs-dbaas-postgres');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.ClustersApi(config);
// List PostgreSQL versions
api_instance
  .clusterPostgresVersionsGet({
    clusterId: clusterId_example
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **clusterId** | **string** | The unique ID of the cluster. | [default to undefined] |

### Return type

[**PostgresVersionList**](../models/PostgresVersionList.md)

### Authorization

basicAuth, tokenAuth

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## clustersDelete

> <ClusterResponse> clustersDelete(clusterId)

Delete a cluster

Delete a PostgreSQL cluster.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs-dbaas-postgres');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.ClustersApi(config);
// Delete a cluster
api_instance
  .clustersDelete({
    clusterId: clusterId_example
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **clusterId** | **string** | The unique ID of the cluster. | [default to undefined] |

### Return type

[**ClusterResponse**](../models/ClusterResponse.md)

### Authorization

basicAuth, tokenAuth

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## clustersFindById

> <ClusterResponse> clustersFindById(clusterId)

Fetch a cluster

You can retrieve a PostgreSQL cluster by using its ID. This value can be found in the response body when a PostgreSQL cluster is created or when you GET a list of PostgreSQL clusters. 

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs-dbaas-postgres');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.ClustersApi(config);
// Fetch a cluster
api_instance
  .clustersFindById({
    clusterId: clusterId_example
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **clusterId** | **string** | The unique ID of the cluster. | [default to undefined] |

### Return type

[**ClusterResponse**](../models/ClusterResponse.md)

### Authorization

basicAuth, tokenAuth

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## clustersGet

> <ClusterList> clustersGet(opts)

List clusters

Retrieves a list of PostgreSQL clusters.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs-dbaas-postgres');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.ClustersApi(config);
// List clusters
api_instance
  .clustersGet({
    filterName: filterName_example
    options: {}
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **filterName** | **string** | Response filter to list only the PostgreSQL clusters that contain the specified name. The value is case insensitive and matched on the \&#39;displayName\&#39; field.  | [optional][default to undefined] |

### Return type

[**ClusterList**](../models/ClusterList.md)

### Authorization

basicAuth, tokenAuth

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## clustersPatch

> <ClusterResponse> clustersPatch(clusterId, patchClusterRequest)

Patch a cluster

Patch attributes of a PostgreSQL cluster.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs-dbaas-postgres');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.ClustersApi(config);
// Patch a cluster
api_instance
  .clustersPatch({
    clusterId: clusterId_example,
    patchClusterRequest: patchClusterRequest_example
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **clusterId** | **string** | The unique ID of the cluster. | [default to undefined] |
| **patchClusterRequest** | [**PatchClusterRequest**](../models/PatchClusterRequest.md) | Part of the cluster which should be modified. |  |

### Return type

[**ClusterResponse**](../models/ClusterResponse.md)

### Authorization

basicAuth, tokenAuth

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## clustersPost

> <ClusterResponse> clustersPost(createClusterRequest)

Create a cluster

Creates a new PostgreSQL cluster. If the `fromBackup` field is populated, the new cluster will be created based on the given backup. 

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs-dbaas-postgres');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.ClustersApi(config);
// Create a cluster
api_instance
  .clustersPost({
    createClusterRequest: createClusterRequest_example
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **createClusterRequest** | [**CreateClusterRequest**](../models/CreateClusterRequest.md) | The cluster to be created. |  |

### Return type

[**ClusterResponse**](../models/ClusterResponse.md)

### Authorization

basicAuth, tokenAuth

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postgresVersionsGet

> <PostgresVersionList> postgresVersionsGet

List PostgreSQL versions

Retrieves a list of all available PostgreSQL versions.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs-dbaas-postgres');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.ClustersApi(config);
// List PostgreSQL versions
api_instance
  .postgresVersionsGet()
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**PostgresVersionList**](../models/PostgresVersionList.md)

### Authorization

basicAuth, tokenAuth

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

