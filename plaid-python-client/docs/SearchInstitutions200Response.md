# SearchInstitutions200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**institutions** | [**List[SearchInstitutions200ResponseInstitutionsInner]**](SearchInstitutions200ResponseInstitutionsInner.md) |  | [optional] 
**request_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.search_institutions200_response import SearchInstitutions200Response

# TODO update the JSON string below
json = "{}"
# create an instance of SearchInstitutions200Response from a JSON string
search_institutions200_response_instance = SearchInstitutions200Response.from_json(json)
# print the JSON string representation of the object
print(SearchInstitutions200Response.to_json())

# convert the object into a dict
search_institutions200_response_dict = search_institutions200_response_instance.to_dict()
# create an instance of SearchInstitutions200Response from a dict
search_institutions200_response_from_dict = SearchInstitutions200Response.from_dict(search_institutions200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


