# openapi_client.DefaultApi

All URIs are relative to *https://sandbox.plaid.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**search_institutions**](DefaultApi.md#search_institutions) | **POST** /institutions/search | Search for financial institutions


# **search_institutions**
> SearchInstitutions200Response search_institutions(search_institutions_request)

Search for financial institutions

### Example


```python
import openapi_client
from openapi_client.models.search_institutions200_response import SearchInstitutions200Response
from openapi_client.models.search_institutions_request import SearchInstitutionsRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://sandbox.plaid.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://sandbox.plaid.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    search_institutions_request = openapi_client.SearchInstitutionsRequest() # SearchInstitutionsRequest | 

    try:
        # Search for financial institutions
        api_response = api_instance.search_institutions(search_institutions_request)
        print("The response of DefaultApi->search_institutions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->search_institutions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search_institutions_request** | [**SearchInstitutionsRequest**](SearchInstitutionsRequest.md)|  | 

### Return type

[**SearchInstitutions200Response**](SearchInstitutions200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of financial institutions |  -  |
**400** | Bad Request |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

