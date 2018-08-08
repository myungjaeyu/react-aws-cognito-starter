import { combineEpics } from 'redux-observable';
import { Fetch } from './fetch';

export default combineEpics(
    Fetch
);