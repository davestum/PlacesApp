/*
 * File: app/store/PlacesStore.js
 *
 * This file was generated by Sencha Architect version 2.2.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.1.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('PlacesApp.store.PlacesStore', {
    extend: 'Ext.data.Store',

    requires: [
        'PlacesApp.model.PlacesModel'
    ],

    config: {
        autoLoad: true,
        autoSync: true,
        model: 'PlacesApp.model.PlacesModel',
        storeId: 'PlacesStore',
        proxy: {
            type: 'ajax',
            url: 'getJson.php',
            reader: {
                type: 'json',
                idProperty: 'id',
                rootProperty: 'results'
            }
        }
    }
});