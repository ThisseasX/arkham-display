import React from 'react';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { type Pack as PackType } from '@types';
import styles from './styles';

type Props = {
  pack: PackType;
};

const Pack = ({ pack: { name, code } }: Props) => (
  <Box sx={styles.root} component={Link} to={code}>
    {name}
  </Box>
);

export default Pack;
