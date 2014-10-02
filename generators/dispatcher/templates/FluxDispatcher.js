var Dispatcher = require('flux').Dispatcher;
var copyProperties = require('react/lib/copyProperties');

var <%= dispatcherName %>Dispatcher = copyProperties(new Dispatcher(), {

    handleServerAction: function(action) {
        var payload = {
            source: 'SERVER_ACTION',
            action: action
        };
        
        this.dispatch(payload);
    },

    handleViewAction: function(action) {
        var payload = {
            source: 'VIEW_ACTION',
            action: action
        };
        
        this.dispatch(payload);
    }

});

module.exports = <%= dispatcherName %>Dispatcher;