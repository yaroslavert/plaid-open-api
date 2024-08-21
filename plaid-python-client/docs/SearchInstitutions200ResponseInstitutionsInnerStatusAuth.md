# SearchInstitutions200ResponseInstitutionsInnerStatusAuth


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** |  | [optional] 
**last_status_change** | **datetime** |  | [optional] 
**breakdown** | [**SearchInstitutions200ResponseInstitutionsInnerStatusAuthBreakdown**](SearchInstitutions200ResponseInstitutionsInnerStatusAuthBreakdown.md) |  | [optional] 

## Example

```python
from openapi_client.models.search_institutions200_response_institutions_inner_status_auth import SearchInstitutions200ResponseInstitutionsInnerStatusAuth

# TODO update the JSON string below
json = "{}"
# create an instance of SearchInstitutions200ResponseInstitutionsInnerStatusAuth from a JSON string
search_institutions200_response_institutions_inner_status_auth_instance = SearchInstitutions200ResponseInstitutionsInnerStatusAuth.from_json(json)
# print the JSON string representation of the object
print(SearchInstitutions200ResponseInstitutionsInnerStatusAuth.to_json())

# convert the object into a dict
search_institutions200_response_institutions_inner_status_auth_dict = search_institutions200_response_institutions_inner_status_auth_instance.to_dict()
# create an instance of SearchInstitutions200ResponseInstitutionsInnerStatusAuth from a dict
search_institutions200_response_institutions_inner_status_auth_from_dict = SearchInstitutions200ResponseInstitutionsInnerStatusAuth.from_dict(search_institutions200_response_institutions_inner_status_auth_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


