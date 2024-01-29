import { combineEpics } from 'redux-observable';
import packs from './packs';
import cards from './cards';

export const cardsEpic = combineEpics(packs, cards);
