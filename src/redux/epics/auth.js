import { ActionTypes } from '../constants';
import { loginSuccess, registSuccess, registConfirmSuccess } from '../actions';

import { ofType } from 'redux-observable';
import { map } from 'rxjs/operators';

export const Login = (action$) => 
    action$.pipe(
        ofType(ActionTypes.AUTH_LOGIN),
        map(_ => loginSuccess({ data : ''}))
    );

export const Regist = (action$) => 
    action$.pipe(
        ofType(ActionTypes.AUTH_REGIST),
        map(_ => registSuccess({ data : ''}))
    );

export const RegistConfirm = (action$) => 
    action$.pipe(
        ofType(ActionTypes.AUTH_REGIST_CONFIRM),
        map(_ => registConfirmSuccess({ data : ''}))
    );