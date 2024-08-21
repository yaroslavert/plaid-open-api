/**
 * Plaid API
 * API for accessing financial institution data via Plaid.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import SearchInstitutions200Response from './model/SearchInstitutions200Response';
import SearchInstitutions200ResponseInstitutionsInner from './model/SearchInstitutions200ResponseInstitutionsInner';
import SearchInstitutions200ResponseInstitutionsInnerStatus from './model/SearchInstitutions200ResponseInstitutionsInnerStatus';
import SearchInstitutions200ResponseInstitutionsInnerStatusAuth from './model/SearchInstitutions200ResponseInstitutionsInnerStatusAuth';
import SearchInstitutions200ResponseInstitutionsInnerStatusAuthBreakdown from './model/SearchInstitutions200ResponseInstitutionsInnerStatusAuthBreakdown';
import SearchInstitutions200ResponseInstitutionsInnerStatusIdentity from './model/SearchInstitutions200ResponseInstitutionsInnerStatusIdentity';
import SearchInstitutions200ResponseInstitutionsInnerStatusIdentityBreakdown from './model/SearchInstitutions200ResponseInstitutionsInnerStatusIdentityBreakdown';
import SearchInstitutions200ResponseInstitutionsInnerStatusInvestments from './model/SearchInstitutions200ResponseInstitutionsInnerStatusInvestments';
import SearchInstitutions200ResponseInstitutionsInnerStatusInvestmentsBreakdown from './model/SearchInstitutions200ResponseInstitutionsInnerStatusInvestmentsBreakdown';
import SearchInstitutions200ResponseInstitutionsInnerStatusItemLogins from './model/SearchInstitutions200ResponseInstitutionsInnerStatusItemLogins';
import SearchInstitutions200ResponseInstitutionsInnerStatusItemLoginsBreakdown from './model/SearchInstitutions200ResponseInstitutionsInnerStatusItemLoginsBreakdown';
import SearchInstitutions200ResponseInstitutionsInnerStatusTransactionsUpdates from './model/SearchInstitutions200ResponseInstitutionsInnerStatusTransactionsUpdates';
import SearchInstitutions200ResponseInstitutionsInnerStatusTransactionsUpdatesBreakdown from './model/SearchInstitutions200ResponseInstitutionsInnerStatusTransactionsUpdatesBreakdown';
import SearchInstitutionsRequest from './model/SearchInstitutionsRequest';
import DefaultApi from './api/DefaultApi';


/**
* API for accessing financial institution data via Plaid..<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var PlaidApi = require('index'); // See note below*.
* var xxxSvc = new PlaidApi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new PlaidApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new PlaidApi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new PlaidApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The SearchInstitutions200Response model constructor.
     * @property {module:model/SearchInstitutions200Response}
     */
    SearchInstitutions200Response,

    /**
     * The SearchInstitutions200ResponseInstitutionsInner model constructor.
     * @property {module:model/SearchInstitutions200ResponseInstitutionsInner}
     */
    SearchInstitutions200ResponseInstitutionsInner,

    /**
     * The SearchInstitutions200ResponseInstitutionsInnerStatus model constructor.
     * @property {module:model/SearchInstitutions200ResponseInstitutionsInnerStatus}
     */
    SearchInstitutions200ResponseInstitutionsInnerStatus,

    /**
     * The SearchInstitutions200ResponseInstitutionsInnerStatusAuth model constructor.
     * @property {module:model/SearchInstitutions200ResponseInstitutionsInnerStatusAuth}
     */
    SearchInstitutions200ResponseInstitutionsInnerStatusAuth,

    /**
     * The SearchInstitutions200ResponseInstitutionsInnerStatusAuthBreakdown model constructor.
     * @property {module:model/SearchInstitutions200ResponseInstitutionsInnerStatusAuthBreakdown}
     */
    SearchInstitutions200ResponseInstitutionsInnerStatusAuthBreakdown,

    /**
     * The SearchInstitutions200ResponseInstitutionsInnerStatusIdentity model constructor.
     * @property {module:model/SearchInstitutions200ResponseInstitutionsInnerStatusIdentity}
     */
    SearchInstitutions200ResponseInstitutionsInnerStatusIdentity,

    /**
     * The SearchInstitutions200ResponseInstitutionsInnerStatusIdentityBreakdown model constructor.
     * @property {module:model/SearchInstitutions200ResponseInstitutionsInnerStatusIdentityBreakdown}
     */
    SearchInstitutions200ResponseInstitutionsInnerStatusIdentityBreakdown,

    /**
     * The SearchInstitutions200ResponseInstitutionsInnerStatusInvestments model constructor.
     * @property {module:model/SearchInstitutions200ResponseInstitutionsInnerStatusInvestments}
     */
    SearchInstitutions200ResponseInstitutionsInnerStatusInvestments,

    /**
     * The SearchInstitutions200ResponseInstitutionsInnerStatusInvestmentsBreakdown model constructor.
     * @property {module:model/SearchInstitutions200ResponseInstitutionsInnerStatusInvestmentsBreakdown}
     */
    SearchInstitutions200ResponseInstitutionsInnerStatusInvestmentsBreakdown,

    /**
     * The SearchInstitutions200ResponseInstitutionsInnerStatusItemLogins model constructor.
     * @property {module:model/SearchInstitutions200ResponseInstitutionsInnerStatusItemLogins}
     */
    SearchInstitutions200ResponseInstitutionsInnerStatusItemLogins,

    /**
     * The SearchInstitutions200ResponseInstitutionsInnerStatusItemLoginsBreakdown model constructor.
     * @property {module:model/SearchInstitutions200ResponseInstitutionsInnerStatusItemLoginsBreakdown}
     */
    SearchInstitutions200ResponseInstitutionsInnerStatusItemLoginsBreakdown,

    /**
     * The SearchInstitutions200ResponseInstitutionsInnerStatusTransactionsUpdates model constructor.
     * @property {module:model/SearchInstitutions200ResponseInstitutionsInnerStatusTransactionsUpdates}
     */
    SearchInstitutions200ResponseInstitutionsInnerStatusTransactionsUpdates,

    /**
     * The SearchInstitutions200ResponseInstitutionsInnerStatusTransactionsUpdatesBreakdown model constructor.
     * @property {module:model/SearchInstitutions200ResponseInstitutionsInnerStatusTransactionsUpdatesBreakdown}
     */
    SearchInstitutions200ResponseInstitutionsInnerStatusTransactionsUpdatesBreakdown,

    /**
     * The SearchInstitutionsRequest model constructor.
     * @property {module:model/SearchInstitutionsRequest}
     */
    SearchInstitutionsRequest,

    /**
    * The DefaultApi service constructor.
    * @property {module:api/DefaultApi}
    */
    DefaultApi
};
