# ClusterBackup

a backup object
## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **id** | **string** | The unique ID of the resource. | [optional] [default to undefined] |
| **clusterId** | **string** | The unique ID of the cluster. | [optional] [default to undefined] |
| **version** | **string** | The PostgreSQL version this backup was created from. | [optional] [default to undefined] |
| **isActive** | **boolean** | Whether a cluster currently backs up data to this backup. | [optional] [default to undefined] |
| **earliestRecoveryTargetTime** | **string** | The oldest available timestamp to which you can restore. | [optional] [default to undefined] |


