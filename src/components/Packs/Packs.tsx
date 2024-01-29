import React, { useEffect } from 'react';
import { ConnectedProps, connect } from 'react-redux';
import Box from '@mui/material/Box';
import { Pack } from 'components';
import { packs, fetchPacks } from 'models/cards';
import { RootState } from 'state';
import styles from './styles';

type Props = ConnectedProps<typeof connector>;

const Packs = ({ packs, fetchPacks }: Props) => {
  useEffect(() => {
    fetchPacks();
  }, [fetchPacks]);

  return (
    <Box sx={styles.root}>
      {packs?.map((pack) => (
        <Pack key={pack?.id} pack={pack} />
      ))}
    </Box>
  );
};

const connector = connect(
  (state: RootState) => ({
    packs: packs(state),
  }),
  {
    fetchPacks,
  },
);

export default connector(Packs);
