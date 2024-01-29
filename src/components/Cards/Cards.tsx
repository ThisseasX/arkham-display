import React, { useEffect } from 'react';
import { ConnectedProps, connect } from 'react-redux';
import Box from '@mui/material/Box';
import { Card } from 'components';
import { cards, fetchCards } from 'models/cards';
import { RootState } from 'state';
import { useRouteMatch } from 'react-router-dom';
import styles from './styles';

type MatchParams = {
  code: string;
};

type Props = ConnectedProps<typeof connector>;

const Cards = ({ cards, fetchCards }: Props) => {
  const { params: { code = '' } = {} } =
    useRouteMatch<MatchParams>('/:code') || {};

  useEffect(() => {
    fetchCards({ code });
  }, [fetchCards, code]);

  return (
    <Box sx={styles.root}>
      {cards?.map((card) => (
        <Card key={card?.code} card={card} />
      ))}
    </Box>
  );
};

const connector = connect(
  (state: RootState) => ({
    cards: cards(state),
  }),
  {
    fetchCards,
  },
);

export default connector(Cards);
