# CreateClusterProperties

Properties with all data needed to create a new PostgreSQL cluster. 
## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **postgresVersion** | **string** | The PostgreSQL version of your cluster. | [default to undefined] |
| **instances** | **number** | The total number of instances in the cluster (one master and n-1 standbys).  | [default to undefined] |
| **cores** | **number** | The number of CPU cores per instance. | [default to undefined] |
| **ram** | **number** | The amount of memory per instance in megabytes. Has to be a multiple of 1024. | [default to undefined] |
| **storageSize** | **number** | The amount of storage per instance in megabytes. | [default to undefined] |
| **storageType** | [**StorageType**](StorageType.md) |  | [default to undefined] |
| **connections** | [**Array&lt;Connection&gt;**](Connection.md) |  | [default to undefined] |
| **location** | **string** | The physical location where the cluster will be created. This will be where all of your instances live. Property cannot be modified after datacenter creation.  | [default to undefined] |
| **backupLocation** | **string** | The S3 location where the backups will be stored. | [optional] [default to undefined] |
| **displayName** | **string** | The friendly name of your cluster. | [default to undefined] |
| **maintenanceWindow** | [**MaintenanceWindow**](MaintenanceWindow.md) |  | [optional] [default to undefined] |
| **credentials** | [**DBUser**](DBUser.md) |  | [default to undefined] |
| **synchronizationMode** | [**SynchronizationMode**](SynchronizationMode.md) |  | [default to undefined] |
| **fromBackup** | [**CreateRestoreRequest**](CreateRestoreRequest.md) |  | [optional] [default to undefined] |


