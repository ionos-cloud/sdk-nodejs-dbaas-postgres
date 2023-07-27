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
    clusterId: 498ae72f-411f-11eb-9d07-046c59cc737e,
    start: 2013-10-20T19:20:30+01:00,
    end: 2013-10-20T19:20:30+01:00,
    direction: direction_example,
    limit: 56, 
    options: {}
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **clusterId** | **string** | The unique ID of the cluster. | [default to undefined] |
| **start** | **string** | The start time for the query in RFC3339 format. Must not be more than 30 days ago but before the end parameter. The default is 30 days ago. | [optional][default to undefined] |
| **end** | **string** | The end time for the query in RFC3339 format. Must not be greater than now. The default is the current timestamp. | [optional][default to undefined] |
| **direction** | **&#39;BACKWARD&#39; | &#39;FORWARD&#39;** | The direction in which to scan through the logs. The logs are returned in order of the direction. | [optional][default to &#39;BACKWARD&#39;] |
| **limit** | **number** | The maximal number of log lines to return.  If the limit is reached then log lines will be cut at the end (respecting the scan direction). | [optional][default to 100] |

### Return type

[**ClusterLogs**](../models/ClusterLogs.md)

### Authorization

basicAuth, tokenAuth

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

