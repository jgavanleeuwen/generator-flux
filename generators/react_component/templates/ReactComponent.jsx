/** @jsx React.DOM */
var React = require('react/addons');

// Stores
var FluxStore = require('../stores/FluxStore');

//Actions
var FluxActionCreator = require('../actions/FluxActionCreator');

function getStateFromStore() {
    return FluxStore.getAll();
}

var <%= reactComponentName %> = React.createClass({

    getInitialState: function() {
        return getStateFromStore();
    },

    componentWillMount: function() {
        FluxStore.addEventListener(this._onChange);
    },

    componentWillUnmount: function() {
        FluxStore.removeEventListener(this._onChange);
    },

    render: function() {
        return (
            <div></div>
        );
    },

    _onChange: function() {
        this.setState(getStateFromStore());
    }

});

module.exports = <%= reactComponentName %>;