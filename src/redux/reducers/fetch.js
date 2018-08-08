import immutable from 'immutability-helper';
import createReducer from '../createReducer';

import { ActionTypes } from '../constants';

const fetchState = {
    pending: false,
    data : {}
};

export default {
    fetch : createReducer(fetchState, {
        [ActionTypes.FETCH](state) {
            return immutable(state, {
                pending: { 
                    $set : true
                }
            });
        },
        [ActionTypes.FETCH_SUCCESS](state, { data }) {
            return immutable(state, {
                pending: { 
                    $set : false
                },
                data : {
                    $set : data
                }
            });
        },
    })
};