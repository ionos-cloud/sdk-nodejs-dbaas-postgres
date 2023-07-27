# DatabasesApi

All URIs are relative to *https://api.ionos.com/databases/postgresql*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**databasesDelete**](DatabasesApi.md#databasesdelete) | **DELETE** /clusters/{clusterId}/databases/{databasename} | Delete database |
| [**databasesGet**](DatabasesApi.md#databasesget) | **GET** /clusters/{clusterId}/databases/{databasename} | Get database |
| [**databasesList**](DatabasesApi.md#databaseslist) | **GET** /clusters/{clusterId}/databases | List databases |
| [**databasesPost**](DatabasesApi.md#databasespost) | **POST** /clusters/{clusterId}/databases | Create a database |


## databasesDelete

> databasesDelete(clusterId, databasename)

Delete database

Deletes a single database

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs-dbaas-postgres');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.DatabasesApi(config);
// Delete database
api_instance
  .databasesDelete({
    clusterId: 498ae72f-411f-11eb-9d07-046c59cc737e,
    databasename: benjamindb
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **clusterId** | **string** | The unique ID of the cluster. | [default to undefined] |
| **databasename** | **string** | The database name. | [default to undefined] |

### Return type

nil (empty response body)

### Authorization

basicAuth, tokenAuth

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## databasesGet

> <DatabaseResource> databasesGet(clusterId, databasename)

Get database

Retrieves a single database

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs-dbaas-postgres');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.DatabasesApi(config);
// Get database
api_instance
  .databasesGet({
    clusterId: 498ae72f-411f-11eb-9d07-046c59cc737e,
    databasename: benjamindb
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **clusterId** | **string** | The unique ID of the cluster. | [default to undefined] |
| **databasename** | **string** | The database name. | [default to undefined] |

### Return type

[**DatabaseResource**](../models/DatabaseResource.md)

### Authorization

basicAuth, tokenAuth

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## databasesList

> <DatabaseList> databasesList(clusterId, opts)

List databases

Retrieves a list of databases

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs-dbaas-postgres');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.DatabasesApi(config);
// List databases
api_instance
  .databasesList({
    clusterId: 498ae72f-411f-11eb-9d07-046c59cc737e,
    limit: 100,
    offset: 200, 
    options: {}
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **clusterId** | **string** | The unique ID of the cluster. | [default to undefined] |
| **limit** | **number** | The maximum number of elements to return. Use together with \&#39;offset\&#39; for pagination. | [optional][default to 100] |
| **offset** | **number** | The first element to return. Use together with \&#39;limit\&#39; for pagination. | [optional][default to 0] |

### Return type

[**DatabaseList**](../models/DatabaseList.md)

### Authorization

basicAuth, tokenAuth

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## databasesPost

> <DatabaseResource> databasesPost(clusterId, database)

Create a database

Create a new database

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs-dbaas-postgres');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.DatabasesApi(config);
// Create a database
api_instance
  .databasesPost({
    clusterId: 498ae72f-411f-11eb-9d07-046c59cc737e,
    database: database_example
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **clusterId** | **string** | The unique ID of the cluster. | [default to undefined] |
| **database** | [**Database**](../models/Database.md) | a database to create |  |

### Return type

[**DatabaseResource**](../models/DatabaseResource.md)

### Authorization

basicAuth, tokenAuth

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

