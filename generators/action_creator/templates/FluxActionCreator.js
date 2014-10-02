var Dispatcher = require('../dispatcher/Dispatcher');

var <%= actionCreatorName %>ActionCreator = {

    sampleServerAction: function(var) {

        /* WebAPIUtils

        WebAPIUtils
            .method(var)
            .next(
                function() {  */
                    Dispatcher.handleServerAction({
                        type: 'SAMPLE_SERVER_ACTION',
                        data: {}
                    });
        /*      },
                function() {
    
                }
            );
        */

    },

    sampleViewAction: function(var) {

        Dispatcher.handleViewAction({
            type: 'SAMPLE_VIEW_ACTION',
            data: {}
        });

    }
};

module.exports = <%= actionCreatorName %>ActionCreator;