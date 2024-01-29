import type { RootState } from 'state';

export const packs = (state: RootState) => state.cards.packs;
export const cards = (state: RootState) => state.cards.cards;
