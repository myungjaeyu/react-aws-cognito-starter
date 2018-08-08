import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';

class App extends Component {
    render() {

        const { fetch } = this.props;
        console.log(fetch);

        return (
        <div className="App">

        </div>
        );
    }
}

const mapState = (state, ownProps) => ({
    fetch : state.fetch
});

const mapDispatch = (dispatch, ownProps) => ({

});

export default connect(mapState, mapDispatch)(App);