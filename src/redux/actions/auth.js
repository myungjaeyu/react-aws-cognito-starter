import { ActionTypes } from '../constants';

export const getSession = () => {
    return {
        type: ActionTypes.AUTH_GET_SESSION
    }
}

export const getSessionSuccess = (data) => {
    return {
        type: ActionTypes.AUTH_GET_SESSION_SUCCESS,
        data: data
    }
}

export const login = () => {
	return {
		type: ActionTypes.AUTH_LOGIN
	}
};

export const loginSuccess = (data) => {
	return {
		type : ActionTypes.AUTH_LOGIN_SUCCESS,
		data : data
	}
};

export const regist = () => {
    return {
        type: ActionTypes.AUTH_REGIST
    }
};

export const registSuccess = (data) => {
    return {
        type: ActionTypes.AUTH_REGIST_SUCCESS,
        data : data
    }
};

export const registConfirm = () => {
    return {
        type: ActionTypes.AUTH_REGIST_CONFIRM
    }
};

export const registConfirmSuccess = (data) => {
    return {
        type: ActionTypes.AUTH_REGIST_CONFIRM_SUCCESS,
        data : data
    }
};
