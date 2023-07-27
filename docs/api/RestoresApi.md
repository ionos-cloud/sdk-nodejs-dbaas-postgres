# RestoresApi

All URIs are relative to *https://api.ionos.com/databases/postgresql*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**clusterRestorePost**](RestoresApi.md#clusterrestorepost) | **POST** /clusters/{clusterId}/restore | In-place restore of a cluster |


## clusterRestorePost

> clusterRestorePost(clusterId, createRestoreRequest)

In-place restore of a cluster

Triggers an in-place restore of the given PostgreSQL.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs-dbaas-postgres');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.RestoresApi(config);
// In-place restore of a cluster
api_instance
  .clusterRestorePost({
    clusterId: 498ae72f-411f-11eb-9d07-046c59cc737e,
    createRestoreRequest: createRestoreRequest_example
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **clusterId** | **string** | The unique ID of the cluster. | [default to undefined] |
| **createRestoreRequest** | [**CreateRestoreRequest**](../models/CreateRestoreRequest.md) | The restore request to create. |  |

### Return type

nil (empty response body)

### Authorization

basicAuth, tokenAuth

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

