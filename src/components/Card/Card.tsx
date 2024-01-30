/* eslint-disable react/no-danger */
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { type Card as CardType } from '@types';
import { transformText } from './utils';
import styles from './styles';

type Props = {
  card: CardType;
};

const Card = ({ card: { name, traits, text, imagesrc } }: Props) => (
  <Box sx={styles.root}>
    <Typography sx={[styles.textCenter, styles.name]} variant="h3">
      {name}
    </Typography>

    <Typography
      sx={[styles.text, styles.textCenter, styles.textItalic, styles.traits]}
    >
      {traits}
    </Typography>

    <Typography
      sx={[styles.text, styles.description]}
      dangerouslySetInnerHTML={{ __html: transformText(text) }}
    />

    {imagesrc ? (
      <Box
        component="img"
        alt={name}
        src={`https://arkhamdb.com/${imagesrc}`}
      />
    ) : (
      <p>No image</p>
    )}
  </Box>
);

export default Card;
