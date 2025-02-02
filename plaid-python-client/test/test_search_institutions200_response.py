# coding: utf-8

"""
    Plaid API

    API for accessing financial institution data via Plaid.

    The version of the OpenAPI document: 1.0.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from openapi_client.models.search_institutions200_response import SearchInstitutions200Response

class TestSearchInstitutions200Response(unittest.TestCase):
    """SearchInstitutions200Response unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> SearchInstitutions200Response:
        """Test SearchInstitutions200Response
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `SearchInstitutions200Response`
        """
        model = SearchInstitutions200Response()
        if include_optional:
            return SearchInstitutions200Response(
                institutions = [
                    openapi_client.models.search_institutions_200_response_institutions_inner.searchInstitutions_200_response_institutions_inner(
                        institution_id = 'ins_118923', 
                        name = 'Red Platypus Bank - Red Platypus Bank', 
                        country_codes = [
                            'US'
                            ], 
                        products = [
                            'assets'
                            ], 
                        routing_numbers = [
                            '011000138'
                            ], 
                        dtc_numbers = [
                            '2236'
                            ], 
                        oauth = False, 
                        status = openapi_client.models.search_institutions_200_response_institutions_inner_status.searchInstitutions_200_response_institutions_inner_status(
                            item_logins = openapi_client.models.search_institutions_200_response_institutions_inner_status_item_logins.searchInstitutions_200_response_institutions_inner_status_item_logins(
                                last_status_change = '2019-02-15T15:53Z', 
                                breakdown = openapi_client.models.search_institutions_200_response_institutions_inner_status_item_logins_breakdown.searchInstitutions_200_response_institutions_inner_status_item_logins_breakdown(
                                    success = 0.9, 
                                    error_plaid = 0.01, 
                                    error_institution = 0.09, ), ), 
                            transactions_updates = openapi_client.models.search_institutions_200_response_institutions_inner_status_transactions_updates.searchInstitutions_200_response_institutions_inner_status_transactions_updates(
                                last_status_change = '2019-02-12T08:22Z', ), 
                            auth = openapi_client.models.search_institutions_200_response_institutions_inner_status_auth.searchInstitutions_200_response_institutions_inner_status_auth(
                                last_status_change = '2019-02-15T15:53Z', ), 
                            identity = openapi_client.models.search_institutions_200_response_institutions_inner_status_identity.searchInstitutions_200_response_institutions_inner_status_identity(
                                last_status_change = '2019-02-15T15:50Z', ), 
                            investments = openapi_client.models.search_institutions_200_response_institutions_inner_status_investments.searchInstitutions_200_response_institutions_inner_status_investments(
                                last_status_change = '2019-02-15T15:53Z', ), 
                            investments_updates = openapi_client.models.search_institutions_200_response_institutions_inner_status_transactions_updates.searchInstitutions_200_response_institutions_inner_status_transactions_updates(
                                last_status_change = '2019-02-12T08:22Z', ), 
                            liabilities_updates = , ), )
                    ],
                request_id = 'Ggmk0enW4smO2Tp'
            )
        else:
            return SearchInstitutions200Response(
        )
        """

    def testSearchInstitutions200Response(self):
        """Test SearchInstitutions200Response"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
