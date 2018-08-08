import immutable from 'immutability-helper';
import createReducer from '../createReducer';

import { ActionTypes } from '../constants';

const formState = {
    login_email : '',
    login_password : '',
    regist_email : '',
    regist_password : '',
    regist_confirm_email : '',
    regist_confirm_code : ''
};

export default {
    form : createReducer(formState, {
        [ActionTypes.FORM_CHANGE_INPUT_VALUE](state, { name, value }) {
            return immutable(state, {
                [name] : {
                    $set : value
                }
            });
        }
    })
};