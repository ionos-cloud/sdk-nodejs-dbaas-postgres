# MetadataApi

All URIs are relative to *https://api.ionos.com/databases/postgresql*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**infosVersionGet**](MetadataApi.md#infosversionget) | **GET** /infos/version | Get the current API version |
| [**infosVersionsGet**](MetadataApi.md#infosversionsget) | **GET** /infos/versions | Fetch all API versions |


## infosVersionGet

> <APIVersion> infosVersionGet

Get the current API version

Retrieves the current version of the responding API.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs-dbaas-postgres');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.MetadataApi(config);
// Get the current API version
api_instance
  .infosVersionGet()
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**APIVersion**](../models/APIVersion.md)

### Authorization

basicAuth, tokenAuth

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## infosVersionsGet

> <Array<APIVersion>> infosVersionsGet

Fetch all API versions

Retrieves all available versions of the responding API.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs-dbaas-postgres');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.MetadataApi(config);
// Fetch all API versions
api_instance
  .infosVersionsGet()
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;APIVersion&gt;**](../models/APIVersion.md)

### Authorization

basicAuth, tokenAuth

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

