# coding: utf-8

"""
    Plaid API

    API for accessing financial institution data via Plaid.

    The version of the OpenAPI document: 1.0.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


from __future__ import annotations
import pprint
import re  # noqa: F401
import json

from pydantic import BaseModel, ConfigDict
from typing import Any, ClassVar, Dict, List, Optional
from openapi_client.models.search_institutions200_response_institutions_inner_status_auth import SearchInstitutions200ResponseInstitutionsInnerStatusAuth
from openapi_client.models.search_institutions200_response_institutions_inner_status_identity import SearchInstitutions200ResponseInstitutionsInnerStatusIdentity
from openapi_client.models.search_institutions200_response_institutions_inner_status_investments import SearchInstitutions200ResponseInstitutionsInnerStatusInvestments
from openapi_client.models.search_institutions200_response_institutions_inner_status_item_logins import SearchInstitutions200ResponseInstitutionsInnerStatusItemLogins
from openapi_client.models.search_institutions200_response_institutions_inner_status_transactions_updates import SearchInstitutions200ResponseInstitutionsInnerStatusTransactionsUpdates
from typing import Optional, Set
from typing_extensions import Self

class SearchInstitutions200ResponseInstitutionsInnerStatus(BaseModel):
    """
    SearchInstitutions200ResponseInstitutionsInnerStatus
    """ # noqa: E501
    item_logins: Optional[SearchInstitutions200ResponseInstitutionsInnerStatusItemLogins] = None
    transactions_updates: Optional[SearchInstitutions200ResponseInstitutionsInnerStatusTransactionsUpdates] = None
    auth: Optional[SearchInstitutions200ResponseInstitutionsInnerStatusAuth] = None
    identity: Optional[SearchInstitutions200ResponseInstitutionsInnerStatusIdentity] = None
    investments: Optional[SearchInstitutions200ResponseInstitutionsInnerStatusInvestments] = None
    investments_updates: Optional[SearchInstitutions200ResponseInstitutionsInnerStatusTransactionsUpdates] = None
    liabilities_updates: Optional[SearchInstitutions200ResponseInstitutionsInnerStatusTransactionsUpdates] = None
    __properties: ClassVar[List[str]] = ["item_logins", "transactions_updates", "auth", "identity", "investments", "investments_updates", "liabilities_updates"]

    model_config = ConfigDict(
        populate_by_name=True,
        validate_assignment=True,
        protected_namespaces=(),
    )


    def to_str(self) -> str:
        """Returns the string representation of the model using alias"""
        return pprint.pformat(self.model_dump(by_alias=True))

    def to_json(self) -> str:
        """Returns the JSON representation of the model using alias"""
        # TODO: pydantic v2: use .model_dump_json(by_alias=True, exclude_unset=True) instead
        return json.dumps(self.to_dict())

    @classmethod
    def from_json(cls, json_str: str) -> Optional[Self]:
        """Create an instance of SearchInstitutions200ResponseInstitutionsInnerStatus from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self) -> Dict[str, Any]:
        """Return the dictionary representation of the model using alias.

        This has the following differences from calling pydantic's
        `self.model_dump(by_alias=True)`:

        * `None` is only added to the output dict for nullable fields that
          were set at model initialization. Other fields with value `None`
          are ignored.
        """
        excluded_fields: Set[str] = set([
        ])

        _dict = self.model_dump(
            by_alias=True,
            exclude=excluded_fields,
            exclude_none=True,
        )
        # override the default output from pydantic by calling `to_dict()` of item_logins
        if self.item_logins:
            _dict['item_logins'] = self.item_logins.to_dict()
        # override the default output from pydantic by calling `to_dict()` of transactions_updates
        if self.transactions_updates:
            _dict['transactions_updates'] = self.transactions_updates.to_dict()
        # override the default output from pydantic by calling `to_dict()` of auth
        if self.auth:
            _dict['auth'] = self.auth.to_dict()
        # override the default output from pydantic by calling `to_dict()` of identity
        if self.identity:
            _dict['identity'] = self.identity.to_dict()
        # override the default output from pydantic by calling `to_dict()` of investments
        if self.investments:
            _dict['investments'] = self.investments.to_dict()
        # override the default output from pydantic by calling `to_dict()` of investments_updates
        if self.investments_updates:
            _dict['investments_updates'] = self.investments_updates.to_dict()
        # override the default output from pydantic by calling `to_dict()` of liabilities_updates
        if self.liabilities_updates:
            _dict['liabilities_updates'] = self.liabilities_updates.to_dict()
        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of SearchInstitutions200ResponseInstitutionsInnerStatus from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "item_logins": SearchInstitutions200ResponseInstitutionsInnerStatusItemLogins.from_dict(obj["item_logins"]) if obj.get("item_logins") is not None else None,
            "transactions_updates": SearchInstitutions200ResponseInstitutionsInnerStatusTransactionsUpdates.from_dict(obj["transactions_updates"]) if obj.get("transactions_updates") is not None else None,
            "auth": SearchInstitutions200ResponseInstitutionsInnerStatusAuth.from_dict(obj["auth"]) if obj.get("auth") is not None else None,
            "identity": SearchInstitutions200ResponseInstitutionsInnerStatusIdentity.from_dict(obj["identity"]) if obj.get("identity") is not None else None,
            "investments": SearchInstitutions200ResponseInstitutionsInnerStatusInvestments.from_dict(obj["investments"]) if obj.get("investments") is not None else None,
            "investments_updates": SearchInstitutions200ResponseInstitutionsInnerStatusTransactionsUpdates.from_dict(obj["investments_updates"]) if obj.get("investments_updates") is not None else None,
            "liabilities_updates": SearchInstitutions200ResponseInstitutionsInnerStatusTransactionsUpdates.from_dict(obj["liabilities_updates"]) if obj.get("liabilities_updates") is not None else None
        })
        return _obj


