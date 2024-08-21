# SearchInstitutions200ResponseInstitutionsInnerStatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**item_logins** | [**SearchInstitutions200ResponseInstitutionsInnerStatusItemLogins**](SearchInstitutions200ResponseInstitutionsInnerStatusItemLogins.md) |  | [optional] 
**transactions_updates** | [**SearchInstitutions200ResponseInstitutionsInnerStatusTransactionsUpdates**](SearchInstitutions200ResponseInstitutionsInnerStatusTransactionsUpdates.md) |  | [optional] 
**auth** | [**SearchInstitutions200ResponseInstitutionsInnerStatusAuth**](SearchInstitutions200ResponseInstitutionsInnerStatusAuth.md) |  | [optional] 
**identity** | [**SearchInstitutions200ResponseInstitutionsInnerStatusIdentity**](SearchInstitutions200ResponseInstitutionsInnerStatusIdentity.md) |  | [optional] 
**investments** | [**SearchInstitutions200ResponseInstitutionsInnerStatusInvestments**](SearchInstitutions200ResponseInstitutionsInnerStatusInvestments.md) |  | [optional] 
**investments_updates** | [**SearchInstitutions200ResponseInstitutionsInnerStatusTransactionsUpdates**](SearchInstitutions200ResponseInstitutionsInnerStatusTransactionsUpdates.md) |  | [optional] 
**liabilities_updates** | [**SearchInstitutions200ResponseInstitutionsInnerStatusTransactionsUpdates**](SearchInstitutions200ResponseInstitutionsInnerStatusTransactionsUpdates.md) |  | [optional] 

## Example

```python
from openapi_client.models.search_institutions200_response_institutions_inner_status import SearchInstitutions200ResponseInstitutionsInnerStatus

# TODO update the JSON string below
json = "{}"
# create an instance of SearchInstitutions200ResponseInstitutionsInnerStatus from a JSON string
search_institutions200_response_institutions_inner_status_instance = SearchInstitutions200ResponseInstitutionsInnerStatus.from_json(json)
# print the JSON string representation of the object
print(SearchInstitutions200ResponseInstitutionsInnerStatus.to_json())

# convert the object into a dict
search_institutions200_response_institutions_inner_status_dict = search_institutions200_response_institutions_inner_status_instance.to_dict()
# create an instance of SearchInstitutions200ResponseInstitutionsInnerStatus from a dict
search_institutions200_response_institutions_inner_status_from_dict = SearchInstitutions200ResponseInstitutionsInnerStatus.from_dict(search_institutions200_response_institutions_inner_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


