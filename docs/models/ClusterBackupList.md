# ClusterBackupList

List of backups.
## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **type** | [**ResourceType**](ResourceType.md) |  | [optional] [default to undefined] |
| **id** | **string** | The unique ID of the resource. | [optional] [default to undefined] |
| **items** | [**Array&lt;BackupResponse&gt;**](BackupResponse.md) |  | [optional] [default to undefined] |
| **offset** | **number** | The offset specified in the request (if none was specified, the default offset is 0).  | [optional] [default to 0] |
| **limit** | **number** | The limit specified in the request (if none was specified, the default limit is 100).  | [optional] [default to 100] |
| **links** | [**PaginationLinks**](PaginationLinks.md) |  | [optional] [default to undefined] |


