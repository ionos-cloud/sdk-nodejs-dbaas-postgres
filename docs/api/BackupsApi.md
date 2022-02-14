# BackupsApi

All URIs are relative to *https://api.ionos.com/databases/postgresql*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**clusterBackupsGet**](BackupsApi.md#clusterbackupsget) | **GET** /clusters/{clusterId}/backups | List backups of cluster |
| [**clustersBackupsFindById**](BackupsApi.md#clustersbackupsfindbyid) | **GET** /clusters/backups/{backupId} | Fetch a cluster backup |
| [**clustersBackupsGet**](BackupsApi.md#clustersbackupsget) | **GET** /clusters/backups | List cluster backups |


## clusterBackupsGet

> <ClusterBackupList> clusterBackupsGet(clusterId)

List backups of cluster

Retrieves a list of all backups of the given PostgreSQL cluster.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs-dbaas-postgres');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.BackupsApi(config);
// List backups of cluster
api_instance
  .clusterBackupsGet({
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

[**ClusterBackupList**](../models/ClusterBackupList.md)

### Authorization

basicAuth, tokenAuth

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## clustersBackupsFindById

> <BackupResponse> clustersBackupsFindById(backupId)

Fetch a cluster backup

Retrieve a PostgreSQL cluster backup by using its ID. This value can be found when you GET a list of PostgreSQL cluster backups. 

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs-dbaas-postgres');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.BackupsApi(config);
// Fetch a cluster backup
api_instance
  .clustersBackupsFindById({
    backupId: backupId_example
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **backupId** | **string** | The unique ID of the backup. | [default to undefined] |

### Return type

[**BackupResponse**](../models/BackupResponse.md)

### Authorization

basicAuth, tokenAuth

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## clustersBackupsGet

> <ClusterBackupList> clustersBackupsGet

List cluster backups

Retrieves a list of all PostgreSQL cluster backups.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs-dbaas-postgres');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.BackupsApi(config);
// List cluster backups
api_instance
  .clustersBackupsGet()
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ClusterBackupList**](../models/ClusterBackupList.md)

### Authorization

basicAuth, tokenAuth

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

