import { combineEpics } from 'redux-observable';
import { Fetch } from './fetch';
import { GetSession, Login, Logout, Regist, RegistConfirm } from './auth';

export default combineEpics(
    Fetch,
    GetSession,
    Login,
    Logout,
    Regist,
    RegistConfirm
);