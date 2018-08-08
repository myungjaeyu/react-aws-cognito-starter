import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';

import { login, regist, registConfirm } from './redux/actions';


const Login = ({ handleChange, handleSubmit }) => (
    <form  name='login' onSubmit={ handleSubmit }>

        <h3>Login</h3>

        <label>
            Email
            <input type="text" name='login_email' onChange={ handleChange } />
        </label>

        <br />

        <label>
            Password
            <input type="password" name='login_password' onChange={ handleChange } />
        </label>

        <br />

        <input type="submit" value="Submit" />
    </form>
);



const Regist = ({ handleChange, handleSubmit }) => (
    <form name='regist' onSubmit={ handleSubmit }>

        <h3>Regist</h3>

        <label>
            Email
            <input type="text" name='regist_email' onChange={ handleChange } />
        </label>

        <br />

        <label>
            Password
            <input type="password" name='regist_password' onChange={ handleChange } />
        </label>

        <br />

        <input type="submit" value="Submit" />
    </form>
);



const RegistConfirm = ({ handleChange, handleSubmit }) => (
    <form name='regist_confirm' onSubmit={ handleSubmit }>

        <h3>RegistConfirm</h3>

        <label>
            Confirm Email
            <input type="text" name='regist_confirm_email' onChange={ handleChange } />
        </label>

        <br />

        <label>
            Confirm Code
            <input type="text" name='regist_confirm_code' onChange={ handleChange } />
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
            <Regist handleChange={ handleChange } handleSubmit={ handleSubmit } />
            <RegistConfirm handleChange={ handleChange } handleSubmit={ handleSubmit } />
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

        switch(e.target.name) {
            case 'login' :
                console.log('login');

                dispatch(login());

                break;
            case 'regist' :
                console.log('regist submit');

                dispatch(regist());

                break;
            case 'regist_confirm' :
                console.log('regist_confirm submit');

                dispatch(registConfirm());

                break;
            default : break;
        }
    }
});

export default connect(mapState, mapDispatch)(App);