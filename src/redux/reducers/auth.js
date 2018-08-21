import immutable from 'immutability-helper';
import createReducer from '../createReducer';

import { ActionTypes } from '../constants';

const authState = {
    pending: false,
    data : {}
};

export default {
    auth : createReducer(authState, {
        [ActionTypes.AUTH_GET_SESSION](state) {
            return immutable(state, {
            })
        },
        [ActionTypes.AUTH_GET_SESSION_SUCCESS](state, { data }) {

            console.log('get session', data)

            return immutable(state, {
                data : {
                    $set : data
                }
            })
        },
        [ActionTypes.AUTH_LOGIN](state) {
            return immutable(state, {
                pending: {
                    $set : true
                }
            });
        },
        [ActionTypes.AUTH_LOGIN_SUCCESS](state, { data }) {
            console.log('signed in callback:', data)

            return immutable(state, {
                pending: { 
                    $set : false
                },
                data : {
                    $set : data
                }
            });
        },
        [ActionTypes.AUTH_REGIST](state) {
            return immutable(state, {
                pending: { 
                    $set : true
                }
            });
        },
        [ActionTypes.AUTH_REGIST_SUCCESS](state, { data }) {
            console.log('signed up callback:', data)

            return immutable(state, {
                pending: { 
                    $set : false
                },
                data : {
                    $set : data
                }
            });
        },
        [ActionTypes.AUTH_REGIST_CONFIRM](state) {
            return immutable(state, {
                pending: { 
                    $set : true
                }
            });
        },
        [ActionTypes.AUTH_REGIST_CONFIRM_SUCCESS](state, { data }) {
            console.log('confirmed callback:', data)

            return immutable(state, {
                pending: { 
                    $set : false
                },
                data : {
                    $set : data
                }
            });
        }
    })
};