import { createAction } from '@reduxjs/toolkit';

export const createActionWithPrefix =
  (prefix: string) =>
  <P = void>(action: string) =>
    createAction<P>(`${prefix}/${action}`);
