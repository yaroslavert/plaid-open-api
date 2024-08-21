# SearchInstitutions200ResponseInstitutionsInnerStatusItemLogins


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** |  | [optional] 
**last_status_change** | **datetime** |  | [optional] 
**breakdown** | [**SearchInstitutions200ResponseInstitutionsInnerStatusItemLoginsBreakdown**](SearchInstitutions200ResponseInstitutionsInnerStatusItemLoginsBreakdown.md) |  | [optional] 

## Example

```python
from openapi_client.models.search_institutions200_response_institutions_inner_status_item_logins import SearchInstitutions200ResponseInstitutionsInnerStatusItemLogins

# TODO update the JSON string below
json = "{}"
# create an instance of SearchInstitutions200ResponseInstitutionsInnerStatusItemLogins from a JSON string
search_institutions200_response_institutions_inner_status_item_logins_instance = SearchInstitutions200ResponseInstitutionsInnerStatusItemLogins.from_json(json)
# print the JSON string representation of the object
print(SearchInstitutions200ResponseInstitutionsInnerStatusItemLogins.to_json())

# convert the object into a dict
search_institutions200_response_institutions_inner_status_item_logins_dict = search_institutions200_response_institutions_inner_status_item_logins_instance.to_dict()
# create an instance of SearchInstitutions200ResponseInstitutionsInnerStatusItemLogins from a dict
search_institutions200_response_institutions_inner_status_item_logins_from_dict = SearchInstitutions200ResponseInstitutionsInnerStatusItemLogins.from_dict(search_institutions200_response_institutions_inner_status_item_logins_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


