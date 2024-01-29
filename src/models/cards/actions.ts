import { createActionWithPrefix } from 'utils/createActionWithPrefix';
import { cardsSlice } from './slice';

const createAction = createActionWithPrefix(cardsSlice.name);

export const fetchPacks = createAction('fetchPacks');
export const fetchCards = createAction<{ code: string }>('fetchCards');

export const { setPacks, setCards } = cardsSlice.actions;
