import { ActionTypes } from '../constants';

export const changeInputValue = (name, value) => {
	return {
        type: ActionTypes.FORM_CHANGE_INPUT_VALUE,
        name: name,
        value: value
	}
};