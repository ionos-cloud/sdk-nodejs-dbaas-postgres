# UsersApi

All URIs are relative to *https://api.ionos.com/databases/postgresql*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**usersDelete**](UsersApi.md#usersdelete) | **DELETE** /clusters/{clusterId}/users/{username} | Delete user |
| [**usersGet**](UsersApi.md#usersget) | **GET** /clusters/{clusterId}/users/{username} | Get user |
| [**usersList**](UsersApi.md#userslist) | **GET** /clusters/{clusterId}/users | List users |
| [**usersPatch**](UsersApi.md#userspatch) | **PATCH** /clusters/{clusterId}/users/{username} | Patch user |
| [**usersPost**](UsersApi.md#userspost) | **POST** /clusters/{clusterId}/users | Create a user |


## usersDelete

> usersDelete(clusterId, username)

Delete user

Deletes a single user

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs-dbaas-postgres');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.UsersApi(config);
// Delete user
api_instance
  .usersDelete({
    clusterId: 498ae72f-411f-11eb-9d07-046c59cc737e,
    username: benjamin
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **clusterId** | **string** | The unique ID of the cluster. | [default to undefined] |
| **username** | **string** | The authentication username. | [default to undefined] |

### Return type

nil (empty response body)

### Authorization

basicAuth, tokenAuth

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## usersGet

> <UserResource> usersGet(clusterId, username)

Get user

Retrieves a single user

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs-dbaas-postgres');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.UsersApi(config);
// Get user
api_instance
  .usersGet({
    clusterId: 498ae72f-411f-11eb-9d07-046c59cc737e,
    username: benjamin
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **clusterId** | **string** | The unique ID of the cluster. | [default to undefined] |
| **username** | **string** | The authentication username. | [default to undefined] |

### Return type

[**UserResource**](../models/UserResource.md)

### Authorization

basicAuth, tokenAuth

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## usersList

> <UserList> usersList(clusterId, opts)

List users

Retrieves a list of users

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs-dbaas-postgres');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.UsersApi(config);
// List users
api_instance
  .usersList({
    clusterId: 498ae72f-411f-11eb-9d07-046c59cc737e,
    limit: 100,
    offset: 200,
    system: true, 
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
| **system** | **boolean** | If set to \&#39;true\&#39; all users, including system users are returned. System users cannot be deleted or updated. | [optional][default to undefined] |

### Return type

[**UserList**](../models/UserList.md)

### Authorization

basicAuth, tokenAuth

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## usersPatch

> <UserResource> usersPatch(clusterId, username, usersPatchRequest)

Patch user

Patches a single user. Only changing the password is supported. System users cannot be patched.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs-dbaas-postgres');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.UsersApi(config);
// Patch user
api_instance
  .usersPatch({
    clusterId: 498ae72f-411f-11eb-9d07-046c59cc737e,
    username: benjamin,
    usersPatchRequest: usersPatchRequest_example
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **clusterId** | **string** | The unique ID of the cluster. | [default to undefined] |
| **username** | **string** | The authentication username. | [default to undefined] |
| **usersPatchRequest** | [**UsersPatchRequest**](../models/UsersPatchRequest.md) | Patch containing all properties that should be updated |  |

### Return type

[**UserResource**](../models/UserResource.md)

### Authorization

basicAuth, tokenAuth

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## usersPost

> <UserResource> usersPost(clusterId, user)

Create a user

Create a new Postgres User

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs-dbaas-postgres');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.UsersApi(config);
// Create a user
api_instance
  .usersPost({
    clusterId: 498ae72f-411f-11eb-9d07-046c59cc737e,
    user: user_example
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **clusterId** | **string** | The unique ID of the cluster. | [default to undefined] |
| **user** | [**User**](../models/User.md) |  |  |

### Return type

[**UserResource**](../models/UserResource.md)

### Authorization

basicAuth, tokenAuth

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

