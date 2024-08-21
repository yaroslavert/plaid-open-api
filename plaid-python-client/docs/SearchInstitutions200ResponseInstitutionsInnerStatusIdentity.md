# SearchInstitutions200ResponseInstitutionsInnerStatusIdentity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** |  | [optional] 
**last_status_change** | **datetime** |  | [optional] 
**breakdown** | [**SearchInstitutions200ResponseInstitutionsInnerStatusIdentityBreakdown**](SearchInstitutions200ResponseInstitutionsInnerStatusIdentityBreakdown.md) |  | [optional] 

## Example

```python
from openapi_client.models.search_institutions200_response_institutions_inner_status_identity import SearchInstitutions200ResponseInstitutionsInnerStatusIdentity

# TODO update the JSON string below
json = "{}"
# create an instance of SearchInstitutions200ResponseInstitutionsInnerStatusIdentity from a JSON string
search_institutions200_response_institutions_inner_status_identity_instance = SearchInstitutions200ResponseInstitutionsInnerStatusIdentity.from_json(json)
# print the JSON string representation of the object
print(SearchInstitutions200ResponseInstitutionsInnerStatusIdentity.to_json())

# convert the object into a dict
search_institutions200_response_institutions_inner_status_identity_dict = search_institutions200_response_institutions_inner_status_identity_instance.to_dict()
# create an instance of SearchInstitutions200ResponseInstitutionsInnerStatusIdentity from a dict
search_institutions200_response_institutions_inner_status_identity_from_dict = SearchInstitutions200ResponseInstitutionsInnerStatusIdentity.from_dict(search_institutions200_response_institutions_inner_status_identity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


