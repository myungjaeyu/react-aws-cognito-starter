import { ActionTypes } from '../constants';
import { fetchSuccess } from '../actions';

import { ofType } from 'redux-observable';
import { map } from 'rxjs/operators';

export const Fetch = (action$) => action$.pipe(
                                            ofType(ActionTypes.FETCH),
                                            map(_ => fetchSuccess({
                                                data : 'afaf'
                                            }))
                                        );