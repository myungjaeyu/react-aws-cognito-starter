import { ActionTypes } from '../constants';
import { loginSuccess, registSuccess, registConfirmSuccess } from '../actions';

import { ofType } from 'redux-observable';
import { map, tap } from 'rxjs/operators';

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
        map(_ => registSuccess({ data : ''}))
    );

export const RegistConfirm = (action$, store$) => 
    action$.pipe(
        ofType(ActionTypes.AUTH_REGIST_CONFIRM),
        tap(_ => {
            let { regist_confirm_email, regist_confirm_code } = store$.value.form;

            console.log('regist_confirm epic:', regist_confirm_email, regist_confirm_code)

        }),
        map(_ => registConfirmSuccess({ data : ''}))
    );