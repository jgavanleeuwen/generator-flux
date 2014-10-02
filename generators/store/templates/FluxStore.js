var EventEmitter = require('events').EventEmitter;
var merge = require('react/lib/merge');

var Dispatcher = require('../dispatcher/Dispatcher');

var CHANGE_EVENT = 'change';

var _data = {};

var <%= storeName %>Store = merge(EventEmitter.prototype, {

    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    get: function(id) {
        return _data[id];
    },

    getAll: function() {
        return _data;
    },

    dispatcherIndex: Dispatcher.register(function(payload) {
        
        var action = payload.action;

        switch(action.type) {

            case 'SAMPLE_ACTION':
                _data = action.data;
                <%= storeName %>Store.emit(CHANGE_EVENT);
                break;

            default:
                // do nothing
        
        }

        return true;
    })

});

module.exports = <%= storeName %>Store;