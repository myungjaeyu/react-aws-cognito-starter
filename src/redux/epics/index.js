import { combineEpics } from 'redux-observable';
import { Fetch } from './fetch';
import { GetSession, Login, Regist, RegistConfirm } from './auth';

export default combineEpics(
    Fetch,
    GetSession,
    Login,
    Regist,
    RegistConfirm
);