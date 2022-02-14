# CreateRestoreRequest

The restore request.
## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **backupId** | **string** | The unique ID of the backup you want to restore. | [default to undefined] |
| **recoveryTargetTime** | **string** | If this value is supplied as ISO 8601 timestamp, the backup will be replayed up until the given timestamp. If empty, the backup will be applied completely.  | [optional] [default to undefined] |


