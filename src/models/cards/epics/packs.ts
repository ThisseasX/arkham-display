import { Epic, combineEpics, ofType } from 'redux-observable';
import { map, mergeMap } from 'rxjs';
import { fetchPacks, setPacks } from '../actions';

const fetchPacksEpic: Epic = (action$) =>
  action$.pipe(
    ofType(fetchPacks),
    mergeMap(() =>
      fetch(`https://arkhamdb.com/api/public/packs/`).then((res) => res.json()),
    ),
    map(setPacks),
  );

export default combineEpics(fetchPacksEpic);
