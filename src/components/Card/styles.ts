export default {
  root: ({ breakpoints }: any) => ({
    width: '419px',
    [breakpoints.down('sm')]: {
      width: '100%',
    },
  }),
  textItalic: {
    fontStyle: 'italic',
  },
  textCenter: {
    textAlign: 'center',
  },
  text: {
    fontFamily: 'Amiri, serif',
    fontSize: 24,
    lineHeight: '32px',
    color: 'black',
    whiteSpace: 'preserve balance',
  },
  name: {
    mb: 2,
  },
  traits: {
    mb: 3,
  },
  description: {
    mb: 3,
  },
};
