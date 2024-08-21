# SearchInstitutions200ResponseInstitutionsInnerStatusTransactionsUpdates


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** |  | [optional] 
**last_status_change** | **datetime** |  | [optional] 
**breakdown** | [**SearchInstitutions200ResponseInstitutionsInnerStatusTransactionsUpdatesBreakdown**](SearchInstitutions200ResponseInstitutionsInnerStatusTransactionsUpdatesBreakdown.md) |  | [optional] 

## Example

```python
from openapi_client.models.search_institutions200_response_institutions_inner_status_transactions_updates import SearchInstitutions200ResponseInstitutionsInnerStatusTransactionsUpdates

# TODO update the JSON string below
json = "{}"
# create an instance of SearchInstitutions200ResponseInstitutionsInnerStatusTransactionsUpdates from a JSON string
search_institutions200_response_institutions_inner_status_transactions_updates_instance = SearchInstitutions200ResponseInstitutionsInnerStatusTransactionsUpdates.from_json(json)
# print the JSON string representation of the object
print(SearchInstitutions200ResponseInstitutionsInnerStatusTransactionsUpdates.to_json())

# convert the object into a dict
search_institutions200_response_institutions_inner_status_transactions_updates_dict = search_institutions200_response_institutions_inner_status_transactions_updates_instance.to_dict()
# create an instance of SearchInstitutions200ResponseInstitutionsInnerStatusTransactionsUpdates from a dict
search_institutions200_response_institutions_inner_status_transactions_updates_from_dict = SearchInstitutions200ResponseInstitutionsInnerStatusTransactionsUpdates.from_dict(search_institutions200_response_institutions_inner_status_transactions_updates_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


