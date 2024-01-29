import { combineEpics } from 'redux-observable';
import { cardsEpic } from 'models/cards';

export default combineEpics(cardsEpic);
