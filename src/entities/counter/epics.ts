import { ofType } from 'redux-observable';
import { map, mergeMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { counterActions } from './actions';

import type { Observable } from 'rxjs/dist/types';
import type { Action } from 'redux';
import type { StateObservable } from 'redux-observable';

const counterEpic = (action$: Observable<Action>, state$: StateObservable<any>) => action$.pipe(
    ofType(counterActions.request().type),
    mergeMap(() => ajax.getJSON('https://jsonplaceholder.typicode.com/posts/1').pipe(
        map((response) => counterActions.populate(response))
    ))
);

export {
    counterEpic
};
