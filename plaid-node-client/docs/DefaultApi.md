# PlaidApi.DefaultApi

All URIs are relative to *https://sandbox.plaid.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**searchInstitutions**](DefaultApi.md#searchInstitutions) | **POST** /institutions/search | Search for financial institutions



## searchInstitutions

> SearchInstitutions200Response searchInstitutions(searchInstitutionsRequest)

Search for financial institutions

### Example

```javascript
import PlaidApi from 'plaid_api';

let apiInstance = new PlaidApi.DefaultApi();
let searchInstitutionsRequest = new PlaidApi.SearchInstitutionsRequest(); // SearchInstitutionsRequest | 
apiInstance.searchInstitutions(searchInstitutionsRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchInstitutionsRequest** | [**SearchInstitutionsRequest**](SearchInstitutionsRequest.md)|  | 

### Return type

[**SearchInstitutions200Response**](SearchInstitutions200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

