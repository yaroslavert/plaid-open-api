# SearchInstitutions200ResponseInstitutionsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**institution_id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**country_codes** | **List[str]** |  | [optional] 
**products** | **List[str]** |  | [optional] 
**routing_numbers** | **List[str]** |  | [optional] 
**dtc_numbers** | **List[str]** |  | [optional] 
**oauth** | **bool** |  | [optional] 
**status** | [**SearchInstitutions200ResponseInstitutionsInnerStatus**](SearchInstitutions200ResponseInstitutionsInnerStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.search_institutions200_response_institutions_inner import SearchInstitutions200ResponseInstitutionsInner

# TODO update the JSON string below
json = "{}"
# create an instance of SearchInstitutions200ResponseInstitutionsInner from a JSON string
search_institutions200_response_institutions_inner_instance = SearchInstitutions200ResponseInstitutionsInner.from_json(json)
# print the JSON string representation of the object
print(SearchInstitutions200ResponseInstitutionsInner.to_json())

# convert the object into a dict
search_institutions200_response_institutions_inner_dict = search_institutions200_response_institutions_inner_instance.to_dict()
# create an instance of SearchInstitutions200ResponseInstitutionsInner from a dict
search_institutions200_response_institutions_inner_from_dict = SearchInstitutions200ResponseInstitutionsInner.from_dict(search_institutions200_response_institutions_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


