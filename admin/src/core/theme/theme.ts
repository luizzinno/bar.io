import { Theme } from './theme.vm';
import { createMuiTheme } from '@material-ui/core/styles';
import createPalette from '@material-ui/core/styles/createPalette';
import createTypography from '@material-ui/core/styles/createTypography';
import merge from 'lodash.merge';
import { deepOrange, brown, teal, amber } from '@material-ui/core/colors';

export const theme: Theme = createMuiTheme({
  palette: {
    primary: {
      main: teal[500],
      contrastText: '#fff',
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
      paper: '#fff',
    },
  },
  typography: {
    fontFamily: "'Montserrat', 'Helvetica', 'Aria', sans-serif",
    fontWeightLight: 400,
    fontWeightRegular: 400,
    fontWeightMedium: 700,
    body2: {
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
          color: teal[500],
        },
      },
    },
    MuiList: {
      root: {
        width: '100%',
        padding: '0',
        margin: '0',
      },
    },
    MuiListItem: {
      root: {
        display: 'block',
        paddingTop: '0',
        paddingBottom: '0',
        margin: '0',
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
