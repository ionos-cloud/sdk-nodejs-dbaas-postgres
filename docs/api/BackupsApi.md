# BackupsApi

All URIs are relative to *https://api.ionos.com/databases/postgresql*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**clusterBackupsGet**](BackupsApi.md#clusterbackupsget) | **GET** /clusters/{clusterId}/backups | List backups of cluster |
| [**clustersBackupsFindById**](BackupsApi.md#clustersbackupsfindbyid) | **GET** /clusters/backups/{backupId} | Fetch a cluster backup |
| [**clustersBackupsGet**](BackupsApi.md#clustersbackupsget) | **GET** /clusters/backups | List cluster backups |


## clusterBackupsGet

> <ClusterBackupList> clusterBackupsGet(clusterId, opts)

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
    backupId: 498ae72f-411f-11eb-9d07-046c59cc737e-4oymiqu-12
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

> <ClusterBackupList> clustersBackupsGet(opts)

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
  .clustersBackupsGet({
    limit: 100,
    offset: 200
    options: {}
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **limit** | **number** | The maximum number of elements to return. Use together with \&#39;offset\&#39; for pagination. | [optional][default to 100] |
| **offset** | **number** | The first element to return. Use together with \&#39;limit\&#39; for pagination. | [optional][default to 0] |

### Return type

[**ClusterBackupList**](../models/ClusterBackupList.md)

### Authorization

basicAuth, tokenAuth

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

