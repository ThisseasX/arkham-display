export default {
  root: ({ breakpoints }: any) => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(419px, 1fr))',
    justifyItems: 'center',
    gap: '16px',
    padding: '16px',
    [breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
    },
  }),
};
