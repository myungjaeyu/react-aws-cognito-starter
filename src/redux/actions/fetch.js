import { ActionTypes } from '../constants';

export const fetch = () => {
	return {
		type: ActionTypes.FETCH
	}
};

export const fetchSuccess = (data) => {
	return {
		type : ActionTypes.FETCH_SUCCESS,
		data : data
	}
};