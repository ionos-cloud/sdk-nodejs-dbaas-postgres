# ClusterList

List of clusters.
## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **type** | [**ResourceType**](ResourceType.md) |  | [optional] [default to undefined] |
| **id** | **string** | The unique ID of the resource. | [optional] [default to undefined] |
| **items** | [**Array&lt;ClusterResponse&gt;**](ClusterResponse.md) |  | [optional] [default to undefined] |
| **offset** | **number** | The offset specified in the request (if none was specified, the default offset is 0) (not implemented yet).  | [optional] [readonly] [default to undefined] |
| **limit** | **number** | The limit specified in the request (if none was specified, use the endpoint\'s default pagination limit) (not implemented yet, always return number of items).  | [optional] [readonly] [default to undefined] |
| **_links** | [**PaginationLinks**](PaginationLinks.md) |  | [optional] [default to undefined] |


