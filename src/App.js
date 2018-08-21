import React, { Component } from 'react';

import { connect } from 'react-redux';

import { getSession, login, regist, registConfirm, changeInputValue } from './redux/actions';


const Login = ({ handleChange, handleSubmit, email = '', password = '' }) => (
    <form  name='login' onSubmit={ handleSubmit }>

        <h3>Login</h3>

        <label>
            Email
            <input type="text" name='login_email' value={ email } onChange={ handleChange } />
        </label>

        <br />

        <label>
            Password
            <input type="password" name='login_password' value={ password } onChange={ handleChange } />
        </label>

        <br />

        <input type="submit" value="Submit" />
    </form>
);



const Regist = ({ handleChange, handleSubmit, email, password }) => (
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



const RegistConfirm = ({ handleChange, handleSubmit, email, code }) => (
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

    componentDidMount() {

        const { handleGetSession } = this.props;

        handleGetSession();

    }

    render() {

        const { 
            handleChange, handleSubmit,
            login_email, login_password,
            regist_email, regist_password,
            regist_confirm_email, regist_confirm_code
        } = this.props;

        return (
        <div className="App">

            <Login 
                handleChange={ handleChange } handleSubmit={ handleSubmit }
                email={ login_email } password={ login_password }/>

            <Regist handleChange={ handleChange } handleSubmit={ handleSubmit } 
                email={ regist_email } password={ regist_password }/>

            <RegistConfirm handleChange={ handleChange } handleSubmit={ handleSubmit }
                email={ regist_confirm_email } password={ regist_confirm_code }/>

        </div>
        );
    }
}



const mapState = (state, ownProps) => ({
    fetch : state.fetch,
    ...state.form
});

const mapDispatch = (dispatch, ownProps) => ({
    handleGetSession : _ => {
        dispatch(getSession())
    },
    handleChange : e => {
        let { name, value } = e.target;

        console.log(name, value);

        dispatch(changeInputValue(name, value))

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