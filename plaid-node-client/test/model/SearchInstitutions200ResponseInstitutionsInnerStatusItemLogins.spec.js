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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.PlaidApi);
  }
}(this, function(expect, PlaidApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new PlaidApi.SearchInstitutions200ResponseInstitutionsInnerStatusItemLogins();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('SearchInstitutions200ResponseInstitutionsInnerStatusItemLogins', function() {
    it('should create an instance of SearchInstitutions200ResponseInstitutionsInnerStatusItemLogins', function() {
      // uncomment below and update the code to test SearchInstitutions200ResponseInstitutionsInnerStatusItemLogins
      //var instance = new PlaidApi.SearchInstitutions200ResponseInstitutionsInnerStatusItemLogins();
      //expect(instance).to.be.a(PlaidApi.SearchInstitutions200ResponseInstitutionsInnerStatusItemLogins);
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new PlaidApi.SearchInstitutions200ResponseInstitutionsInnerStatusItemLogins();
      //expect(instance).to.be();
    });

    it('should have the property lastStatusChange (base name: "last_status_change")', function() {
      // uncomment below and update the code to test the property lastStatusChange
      //var instance = new PlaidApi.SearchInstitutions200ResponseInstitutionsInnerStatusItemLogins();
      //expect(instance).to.be();
    });

    it('should have the property breakdown (base name: "breakdown")', function() {
      // uncomment below and update the code to test the property breakdown
      //var instance = new PlaidApi.SearchInstitutions200ResponseInstitutionsInnerStatusItemLogins();
      //expect(instance).to.be();
    });

  });

}));
