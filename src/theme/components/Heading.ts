export const Heading = {
  color: '$text900',
  letterSpacing: '$sm',
  fontWeight: '$bold',
  fontFamily: '$heading',
  marginVertical: 0,

  variants: {
    isTruncated: {
      true: {
        props: {
          numberOfLines: 1,
          ellipsizeMode: 'tail',
        },
      },
    },
    bold: {
      true: {
        fontWeight: '$bold',
      },
    },
    underline: {
      true: {
        textDecorationLine: 'underline',
      },
    },
    strikeThrough: {
      true: {
        textDecorationLine: 'line-through',
      },
    },
    size: {
      '5xl': {
        fontSize: '$6xl',
      },
      '4xl': {
        fontSize: '$5xl',
      },
      '3xl': {
        fontSize: '$4xl',
      },
      '2xl': {
        fontSize: '$3xl',
      },
      'xl': {
        fontSize: '$2xl',
      },
      'lg': {
        fontSize: '$xl',
      },
      'md': {
        fontSize: '$lg',
      },
      'sm': {
        fontSize: '$md',
      },
      'xs': {
        fontSize: '$sm',
      },
    },
    sub: {
      true: {
        fontSize: '$xs',
      },
    },
    italic: {
      true: {
        fontStyle: 'italic',
      },
    },
    highlight: {
      true: {
        bg: '$yellow500',
      },
    },
  },

  defaultProps: {
    size: 'lg',
  },
};
