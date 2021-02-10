import { Theme } from './theme.vm';
import { createMuiTheme } from '@material-ui/core/styles';
import { deepOrange, brown, indigo, blue, cyan } from '@material-ui/core/colors';
import createSpacing from '@material-ui/core/styles/createSpacing';

export const meat: Theme = createMuiTheme({
  palette: {
    primary: {
      main: deepOrange[500],
    },
    secondary: {
      main: brown[500],
    },
    contrastThreshold: 3.5,
    tonalOffset: 0.3,
    text: {
      primary: 'rgba(0, 0, 0, 0.64)',
    },
    background: {
      default: brown[50],
    },
  },
  typography: {
    fontFamily: "'Montserrat', 'Helvetica', 'Aria', sans-serif",
    fontWeightLight: 400,
    fontWeightRegular: 400,
    fontWeightMedium: 700,
    h1: {
      fontFamily: "'Lobster Two', 'Helvetica', 'Arial', sans-serif",
      fontWeight: 400,
      fontSize: '4rem',
      fontStyle: 'italic',
      lineHeight: 1,
      marginBottom: '1rem',
    },
    h2: {
      fontFamily: "'Lobster Two', 'Helvetica', 'Arial', sans-serif",
      fontWeight: 700,
      fontSize: '2.125rem',
    },
    h3: {
      width: '100%',
      fontFamily: "'Lobster Two', 'Helvetica', 'Arial', sans-serif",
      fontWeight: 700,
      fontSize: '1.75rem',
    },
    body2: {
      fontFamily: "'Montserrat', 'Helvetica', 'Arial', sans-serif",
      fontSize: '1rem',
    },
  },
  props: {
    MuiAccordion: {
      defaultExpanded: false,
      expanded: true,
      square: false,
    },
    MuiAccordionActions: {
      disableSpacing: true,
    },
    MuiList: {
      disablePadding: true,
    },
    MuiListItem: {
      disableGutters: true,
      divider: true,
    },
    MuiTextField: {
      size: 'small',
      variant: 'outlined',
      color: 'primary',
    },
  },
  overrides: {
    MuiAccordion: {
      root: {
        borderBottom: `1px solid ${brown[100]}`,
        '&$expanded': {
          margin: 'auto',
        },
        '&:last-of-type': {
          borderBottom: '0',
        },
        '&::before': {
          content: 'none',
        },
      },
    },
    MuiAccordionDetails: {
      root: {
        padding: '0 1rem 1rem',
      },
    },
    MuiAccordionSummary: {
      root: {
        minHeight: '64px',
      },
      content: {
        '&$expanded': {
          margin: 'inherit',
          color: deepOrange[500],
        },
      },
    },
    MuiList: {
      root: {
        width: '100%',
        padding: '0',
      },
    },
    MuiListItem: {
      root: {
        display: 'block',
        paddingTop: '0',
        paddingBottom: '0',
        marginBottom: '1rem',
        '&:last-of-type': {
          marginBottom: '0',
          borderBottom: 'none',
        },
      },
      divider: {
        borderBottom: `1px solid ${brown[50]}`,
      },
    },
    MuiFormControl: {
      root: {
        minWidth: '120px',
        marginBottom: '10%',
        '@media (min-width: 576px)': {
          marginBottom: '2rem',
        },
      },
    },
    MuiMenuItem: {
      root: {
        minHeight: '0',
        marginBottom: '0',
        paddingTop: '0.5rem',
        paddingBottom: '0.5rem',
      },
    },
  },
});

export const fish: Theme = createMuiTheme({
  palette: {
    primary: {
      main: indigo[500],
    },
    secondary: {
      main: blue[500],
    },
    contrastThreshold: 4,
    tonalOffset: 0.5,
    text: {
      primary: 'rgba(0, 0, 0, 0.84)',
    },
    background: {
      default: indigo[50],
    },
  },
  typography: {
    fontFamily: "'Raleway', 'Helvetica', 'Aria', sans-serif",
    fontWeightLight: 400,
    fontWeightRegular: 400,
    fontWeightMedium: 700,
    h1: {
      fontFamily: "'Dancing Script', 'Helvetica', 'Arial', sans-serif",
      fontWeight: 500,
      fontSize: '4rem',
      fontStyle: 'italic',
      lineHeight: 1,
      marginBottom: '1rem',
    },
    h2: {
      fontFamily: "'Dancing Script', 'Helvetica', 'Arial', sans-serif",
      fontWeight: 700,
      fontSize: '2.125rem',
    },
    h3: {
      width: '100%',
      fontFamily: "'Dancing Script', 'Helvetica', 'Arial', sans-serif",
      fontWeight: 700,
      fontSize: '1.75rem',
    },
    body2: {
      fontFamily: "'Raleway', 'Helvetica', 'Arial', sans-serif",
      fontSize: '1rem',
    },
  },
  props: {
    MuiAccordion: {
      defaultExpanded: false,
      expanded: true,
      square: false,
    },
    MuiAccordionActions: {
      disableSpacing: true,
    },
    MuiList: {
      disablePadding: true,
    },
    MuiListItem: {
      disableGutters: true,
      divider: true,
    },
    MuiTextField: {
      size: 'small',
      variant: 'outlined',
      color: 'secondary',
    },
  },
  overrides: {
    MuiAccordion: {
      root: {
        borderBottom: `1px solid ${indigo[100]}`,
        '&$expanded': {
          // margin: 'auto',
        },
        '&:last-of-type': {
          borderBottom: '0',
        },
        '&::before': {
          content: 'none',
        },
      },
    },
    MuiAccordionDetails: {
      root: {
        padding: '0 1rem 1rem',
      },
    },
    MuiAccordionSummary: {
      root: {
        minHeight: '64px',
      },
      content: {
        '&$expanded': {
          // margin: 'inherit',
          color: blue[500],
        },
      },
    },
    MuiList: {
      root: {
        width: '100%',
        padding: '0',
      },
    },
    MuiListItem: {
      root: {
        display: 'block',
        paddingTop: '0',
        paddingBottom: '0',
        marginBottom: '1rem',
        '&:last-of-type': {
          marginBottom: '0',
          borderBottom: 'none',
        },
      },
      divider: {
        borderBottom: `1px dashed ${indigo[100]}`,
      },
    },
    MuiFormControl: {
      root: {
        minWidth: '120px',
        marginBottom: '10%',
        '@media (min-width: 576px)': {
          marginBottom: '2rem',
        },
      },
    },
    MuiMenuItem: {
      root: {
        minHeight: '0',
        marginBottom: '0',
        paddingTop: '0.5rem',
        paddingBottom: '0.5rem',
      },
    },
  },
});
