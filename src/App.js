import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';



const Login = ({ handleChange, handleSubmit }) => (
    <form  name='login' onSubmit={ handleSubmit }>

        <h3>Login</h3>

        <label>
            Email
            <input type="text" name='email' onChange={ handleChange } />
        </label>

        <br />

        <label>
            Password
            <input type="password" name='password' onChange={ handleChange } />
        </label>

        <br />

        <input type="submit" value="Submit" />
    </form>
);



class App extends Component {
    render() {

        const { fetch, handleChange, handleSubmit } = this.props;

        console.log(fetch);

        return (
        <div className="App">
            <Login handleChange={ handleChange } handleSubmit={ handleSubmit } />
        </div>
        );
    }
}



const mapState = (state, ownProps) => ({
    fetch : state.fetch
});

const mapDispatch = (dispatch, ownProps) => ({
    handleChange : e => {
        let { name, value } = e.target;

        console.log(name, value);
    },
    handleSubmit : e => {
        e.preventDefault();

        console.log(e.target.name);
    }
});

export default connect(mapState, mapDispatch)(App);