# PatchClusterProperties

Properties of the payload to change a cluster.
## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **cores** | **number** | The number of CPU cores per instance. | [optional] [default to undefined] |
| **ram** | **number** | The amount of memory per instance in megabytes. Has to be a multiple of 1024. | [optional] [default to undefined] |
| **storageSize** | **number** | The amount of storage per instance in megabytes. | [optional] [default to undefined] |
| **connections** | [**Array&lt;Connection&gt;**](Connection.md) |  | [optional] [default to undefined] |
| **displayName** | **string** | The friendly name of your cluster. | [optional] [default to undefined] |
| **maintenanceWindow** | [**MaintenanceWindow**](MaintenanceWindow.md) |  | [optional] [default to undefined] |
| **postgresVersion** | **string** | The PostgreSQL version of your cluster. | [optional] [default to undefined] |
| **instances** | **number** | The total number of instances in the cluster (one master and n-1 standbys).  | [optional] [default to undefined] |


