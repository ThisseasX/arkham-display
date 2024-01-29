/* eslint-disable react/no-danger */
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { type Card as CardType } from '@types';
import styles from './styles';

type Props = {
  card: CardType;
};

const Card = ({ card: { name, traits, text, imagesrc } }: Props) => (
  <Box sx={styles.root}>
    <Typography variant="h3" gutterBottom>
      {name}
    </Typography>

    <Typography gutterBottom>{traits}</Typography>

    <Typography sx={styles.text} dangerouslySetInnerHTML={{ __html: text }} />

    {imagesrc ? (
      <Box
        component="img"
        width={419}
        alt={name}
        src={`https://arkhamdb.com/${imagesrc}`}
      />
    ) : (
      <p>No image</p>
    )}
  </Box>
);

export default Card;
