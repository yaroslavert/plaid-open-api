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
import SearchInstitutions200ResponseInstitutionsInnerStatusInvestmentsBreakdown from './SearchInstitutions200ResponseInstitutionsInnerStatusInvestmentsBreakdown';

/**
 * The SearchInstitutions200ResponseInstitutionsInnerStatusInvestments model module.
 * @module model/SearchInstitutions200ResponseInstitutionsInnerStatusInvestments
 * @version 1.0.0
 */
class SearchInstitutions200ResponseInstitutionsInnerStatusInvestments {
    /**
     * Constructs a new <code>SearchInstitutions200ResponseInstitutionsInnerStatusInvestments</code>.
     * @alias module:model/SearchInstitutions200ResponseInstitutionsInnerStatusInvestments
     */
    constructor() { 
        
        SearchInstitutions200ResponseInstitutionsInnerStatusInvestments.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SearchInstitutions200ResponseInstitutionsInnerStatusInvestments</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SearchInstitutions200ResponseInstitutionsInnerStatusInvestments} obj Optional instance to populate.
     * @return {module:model/SearchInstitutions200ResponseInstitutionsInnerStatusInvestments} The populated <code>SearchInstitutions200ResponseInstitutionsInnerStatusInvestments</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SearchInstitutions200ResponseInstitutionsInnerStatusInvestments();

            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('last_status_change')) {
                obj['last_status_change'] = ApiClient.convertToType(data['last_status_change'], 'Date');
            }
            if (data.hasOwnProperty('breakdown')) {
                obj['breakdown'] = SearchInstitutions200ResponseInstitutionsInnerStatusInvestmentsBreakdown.constructFromObject(data['breakdown']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SearchInstitutions200ResponseInstitutionsInnerStatusInvestments</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SearchInstitutions200ResponseInstitutionsInnerStatusInvestments</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }
        // validate the optional field `breakdown`
        if (data['breakdown']) { // data not null
          SearchInstitutions200ResponseInstitutionsInnerStatusInvestmentsBreakdown.validateJSON(data['breakdown']);
        }

        return true;
    }


}



/**
 * @member {String} status
 */
SearchInstitutions200ResponseInstitutionsInnerStatusInvestments.prototype['status'] = undefined;

/**
 * @member {Date} last_status_change
 */
SearchInstitutions200ResponseInstitutionsInnerStatusInvestments.prototype['last_status_change'] = undefined;

/**
 * @member {module:model/SearchInstitutions200ResponseInstitutionsInnerStatusInvestmentsBreakdown} breakdown
 */
SearchInstitutions200ResponseInstitutionsInnerStatusInvestments.prototype['breakdown'] = undefined;






export default SearchInstitutions200ResponseInstitutionsInnerStatusInvestments;

