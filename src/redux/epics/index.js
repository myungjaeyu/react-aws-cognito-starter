import { combineEpics } from 'redux-observable';
import { Fetch } from './fetch';
import { Login, Regist, RegistConfirm } from './auth';

export default combineEpics(
    Fetch,
    Login,
    Regist,
    RegistConfirm
);