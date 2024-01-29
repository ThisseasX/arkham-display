import { Epic, combineEpics, ofType } from 'redux-observable';
import { map, mergeMap } from 'rxjs';
import { fetchCards, setCards } from '../actions';

const fetchCardsEpic: Epic = (action$) =>
  action$.pipe(
    ofType(fetchCards),
    mergeMap(({ payload: { code } }) =>
      fetch(`https://arkhamdb.com/api/public/cards/${code}`).then((res) =>
        res.json(),
      ),
    ),
    map(setCards),
  );

export default combineEpics(fetchCardsEpic);
