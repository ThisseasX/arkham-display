import { __, eq, every, flow, map, negate, spread } from 'lodash/fp';
import { cards } from 'models/cards';
import { filter } from 'rxjs';

const allModelSelectors = [cards];

export const filterModelChanges = () =>
  filter(([prev, curr]) =>
    every(
      flow(
        map(__, [prev, curr]), //
        spread(negate(eq)),
      ),
    )(allModelSelectors),
  );
