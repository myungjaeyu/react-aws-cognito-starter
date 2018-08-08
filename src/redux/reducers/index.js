import fetch from './fetch';
import auth from './auth';
import form from './form';

export default {
    ...fetch,
    ...auth,
    ...form
};