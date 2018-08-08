import { ActionTypes } from '../constants';
import { loginSuccess, registSuccess, registConfirmSuccess } from '../actions';

import { ofType } from 'redux-observable';
import { map, tap, mergeMap } from 'rxjs/operators';
import { from } from 'rxjs';

import * as AWSCognito from 'amazon-cognito-identity-js';


const poolData = {
    UserPoolId: '',
    ClientId: ''
};

const userPool = new AWSCognito.CognitoUserPool(poolData);

export const Login = (action$, store$) => 
    action$.pipe(
        ofType(ActionTypes.AUTH_LOGIN),
        tap(_ => {
            let { login_email, login_password } = store$.value.form;

            console.log('login epic:', login_email, login_password)

        }),
        map(_ => loginSuccess({ data : ''}))
    );

export const Regist = (action$, store$) => 
    action$.pipe(
        ofType(ActionTypes.AUTH_REGIST),
        tap(_ => {
            let { regist_email, regist_password } = store$.value.form;

            console.log('regist epic:', regist_email, regist_password)

        }),
        mergeMap(_ => {
            
            let { regist_email, regist_password } = store$.value.form;

            return from(new Promise(resolve =>
                userPool.signUp(
                    regist_email,
                    regist_password,
                    [
                        { Name: 'email', Value: regist_email }
                    ],
                    null,
                    (err, data) => 
                        resolve(err ? {} : { email : data.user.getUsername() })
                )
            ))

        }),
        map(e => registSuccess(e))
    );

export const RegistConfirm = (action$, store$) => 
    action$.pipe(
        ofType(ActionTypes.AUTH_REGIST_CONFIRM),
        tap(_ => {
            let { regist_confirm_email, regist_confirm_code } = store$.value.form;

            console.log('regist_confirm epic:', regist_confirm_email, regist_confirm_code)
            
        }),
        mergeMap(_ => {

            let { regist_confirm_email, regist_confirm_code } = store$.value.form,
                user = new AWSCognito.CognitoUser({ Pool : userPool, Username : regist_confirm_email })

            return from(new Promise(resolve =>
                user.confirmRegistration(
                    regist_confirm_code,
                    true,
                    (err, data) => 
                        resolve(err ? {} : { state : data })
                )
            ))

        }),
        map(e => registConfirmSuccess(e))
    );