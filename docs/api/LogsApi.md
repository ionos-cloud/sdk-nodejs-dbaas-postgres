# LogsApi

All URIs are relative to *https://api.ionos.com/databases/postgresql*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**clusterLogsGet**](LogsApi.md#clusterlogsget) | **GET** /clusters/{clusterId}/logs | Get logs of your cluster |


## clusterLogsGet

> <ClusterLogs> clusterLogsGet(clusterId, opts)

Get logs of your cluster

Retrieves PostgreSQL logs based on the given parameters.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs-dbaas-postgres');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.LogsApi(config);
// Get logs of your cluster
api_instance
  .clusterLogsGet({
    clusterId: clusterId_example,
    limit: 56,
    start: 2013-10-20T19:20:30+01:00,
    end: 2013-10-20T19:20:30+01:00, 
    options: {}
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **clusterId** | **string** | The unique ID of the cluster. | [default to undefined] |
| **limit** | **number** | The maximal number of log lines to return. | [optional][default to undefined] |
| **start** | **string** | The start time for the query in RFC3339 format. | [optional][default to undefined] |
| **end** | **string** | The end time for the query in RFC3339 format. | [optional][default to undefined] |

### Return type

[**ClusterLogs**](../models/ClusterLogs.md)

### Authorization

basicAuth, tokenAuth

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

