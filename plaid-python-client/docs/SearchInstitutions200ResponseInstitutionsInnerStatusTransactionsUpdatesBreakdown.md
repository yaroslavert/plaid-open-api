# SearchInstitutions200ResponseInstitutionsInnerStatusTransactionsUpdatesBreakdown


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **float** |  | [optional] 
**error_plaid** | **float** |  | [optional] 
**error_institution** | **float** |  | [optional] 
**refresh_interval** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.search_institutions200_response_institutions_inner_status_transactions_updates_breakdown import SearchInstitutions200ResponseInstitutionsInnerStatusTransactionsUpdatesBreakdown

# TODO update the JSON string below
json = "{}"
# create an instance of SearchInstitutions200ResponseInstitutionsInnerStatusTransactionsUpdatesBreakdown from a JSON string
search_institutions200_response_institutions_inner_status_transactions_updates_breakdown_instance = SearchInstitutions200ResponseInstitutionsInnerStatusTransactionsUpdatesBreakdown.from_json(json)
# print the JSON string representation of the object
print(SearchInstitutions200ResponseInstitutionsInnerStatusTransactionsUpdatesBreakdown.to_json())

# convert the object into a dict
search_institutions200_response_institutions_inner_status_transactions_updates_breakdown_dict = search_institutions200_response_institutions_inner_status_transactions_updates_breakdown_instance.to_dict()
# create an instance of SearchInstitutions200ResponseInstitutionsInnerStatusTransactionsUpdatesBreakdown from a dict
search_institutions200_response_institutions_inner_status_transactions_updates_breakdown_from_dict = SearchInstitutions200ResponseInstitutionsInnerStatusTransactionsUpdatesBreakdown.from_dict(search_institutions200_response_institutions_inner_status_transactions_updates_breakdown_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


