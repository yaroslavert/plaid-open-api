# SearchInstitutionsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **str** |  | [optional] 
**secret** | **str** |  | [optional] 
**query** | **str** |  | [optional] 
**products** | **List[str]** |  | [optional] 

## Example

```python
from openapi_client.models.search_institutions_request import SearchInstitutionsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SearchInstitutionsRequest from a JSON string
search_institutions_request_instance = SearchInstitutionsRequest.from_json(json)
# print the JSON string representation of the object
print(SearchInstitutionsRequest.to_json())

# convert the object into a dict
search_institutions_request_dict = search_institutions_request_instance.to_dict()
# create an instance of SearchInstitutionsRequest from a dict
search_institutions_request_from_dict = SearchInstitutionsRequest.from_dict(search_institutions_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


