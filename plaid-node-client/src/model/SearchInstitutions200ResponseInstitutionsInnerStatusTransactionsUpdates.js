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

import ApiClient from '../ApiClient';
import SearchInstitutions200ResponseInstitutionsInnerStatusTransactionsUpdatesBreakdown from './SearchInstitutions200ResponseInstitutionsInnerStatusTransactionsUpdatesBreakdown';

/**
 * The SearchInstitutions200ResponseInstitutionsInnerStatusTransactionsUpdates model module.
 * @module model/SearchInstitutions200ResponseInstitutionsInnerStatusTransactionsUpdates
 * @version 1.0.0
 */
class SearchInstitutions200ResponseInstitutionsInnerStatusTransactionsUpdates {
    /**
     * Constructs a new <code>SearchInstitutions200ResponseInstitutionsInnerStatusTransactionsUpdates</code>.
     * @alias module:model/SearchInstitutions200ResponseInstitutionsInnerStatusTransactionsUpdates
     */
    constructor() { 
        
        SearchInstitutions200ResponseInstitutionsInnerStatusTransactionsUpdates.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SearchInstitutions200ResponseInstitutionsInnerStatusTransactionsUpdates</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SearchInstitutions200ResponseInstitutionsInnerStatusTransactionsUpdates} obj Optional instance to populate.
     * @return {module:model/SearchInstitutions200ResponseInstitutionsInnerStatusTransactionsUpdates} The populated <code>SearchInstitutions200ResponseInstitutionsInnerStatusTransactionsUpdates</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SearchInstitutions200ResponseInstitutionsInnerStatusTransactionsUpdates();

            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('last_status_change')) {
                obj['last_status_change'] = ApiClient.convertToType(data['last_status_change'], 'Date');
            }
            if (data.hasOwnProperty('breakdown')) {
                obj['breakdown'] = SearchInstitutions200ResponseInstitutionsInnerStatusTransactionsUpdatesBreakdown.constructFromObject(data['breakdown']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SearchInstitutions200ResponseInstitutionsInnerStatusTransactionsUpdates</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SearchInstitutions200ResponseInstitutionsInnerStatusTransactionsUpdates</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }
        // validate the optional field `breakdown`
        if (data['breakdown']) { // data not null
          SearchInstitutions200ResponseInstitutionsInnerStatusTransactionsUpdatesBreakdown.validateJSON(data['breakdown']);
        }

        return true;
    }


}



/**
 * @member {String} status
 */
SearchInstitutions200ResponseInstitutionsInnerStatusTransactionsUpdates.prototype['status'] = undefined;

/**
 * @member {Date} last_status_change
 */
SearchInstitutions200ResponseInstitutionsInnerStatusTransactionsUpdates.prototype['last_status_change'] = undefined;

/**
 * @member {module:model/SearchInstitutions200ResponseInstitutionsInnerStatusTransactionsUpdatesBreakdown} breakdown
 */
SearchInstitutions200ResponseInstitutionsInnerStatusTransactionsUpdates.prototype['breakdown'] = undefined;






export default SearchInstitutions200ResponseInstitutionsInnerStatusTransactionsUpdates;

