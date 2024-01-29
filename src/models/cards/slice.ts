import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Pack, Card } from '@types';

type InitialState = {
  packs?: Pack[];
  cards?: Card[];
};

const initialState: InitialState = {
  packs: [],
  cards: [],
};

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setPacks: (state, action: PayloadAction<Pack[]>) => {
      state.packs = action.payload;
    },
    setCards: (state, action: PayloadAction<Card[]>) => {
      state.cards = action.payload;
    },
  },
});

export const { reducer: cardsReducer } = cardsSlice;
