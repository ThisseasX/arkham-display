import React from 'react';
import Box from '@mui/material/Box';
import styles from './styles';

type Props = {
  children: React.ReactNode;
};

const AppLayout = ({ children }: Props) => (
  <Box sx={styles.root}>{children}</Box>
);

export default AppLayout;
