# SearchInstitutions200ResponseInstitutionsInnerStatusInvestments


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** |  | [optional] 
**last_status_change** | **datetime** |  | [optional] 
**breakdown** | [**SearchInstitutions200ResponseInstitutionsInnerStatusInvestmentsBreakdown**](SearchInstitutions200ResponseInstitutionsInnerStatusInvestmentsBreakdown.md) |  | [optional] 

## Example

```python
from openapi_client.models.search_institutions200_response_institutions_inner_status_investments import SearchInstitutions200ResponseInstitutionsInnerStatusInvestments

# TODO update the JSON string below
json = "{}"
# create an instance of SearchInstitutions200ResponseInstitutionsInnerStatusInvestments from a JSON string
search_institutions200_response_institutions_inner_status_investments_instance = SearchInstitutions200ResponseInstitutionsInnerStatusInvestments.from_json(json)
# print the JSON string representation of the object
print(SearchInstitutions200ResponseInstitutionsInnerStatusInvestments.to_json())

# convert the object into a dict
search_institutions200_response_institutions_inner_status_investments_dict = search_institutions200_response_institutions_inner_status_investments_instance.to_dict()
# create an instance of SearchInstitutions200ResponseInstitutionsInnerStatusInvestments from a dict
search_institutions200_response_institutions_inner_status_investments_from_dict = SearchInstitutions200ResponseInstitutionsInnerStatusInvestments.from_dict(search_institutions200_response_institutions_inner_status_investments_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


