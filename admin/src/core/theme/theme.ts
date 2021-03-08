import { Theme } from './theme.vm';
import { createMuiTheme } from '@material-ui/core/styles';
import { deepOrange, brown, teal, amber } from '@material-ui/core/colors';
import { Palette } from '@material-ui/icons';

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
    h5: {
      textTransform: 'uppercase',
    },
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
      size: 'medium',
      variant: 'outlined',
      color: 'primary',
    },
  },
  overrides: {
    MuiGrid: {
      'spacing-xs-3': {
        margin: '0 -0.75rem',

        '&:last-of-type': {
          margin: '0 -0.75rem -0.75rem'
        }
      }
    },
    MuiCardHeader: {
      root: {
        color: `${teal[500]}`,
        margin: '0',
        padding: '1.5rem',
      },
      action : {
        marginTop: '0',
      },
    },
    MuiCardContent: {
      root: {
        padding: '0 1.5rem 1.5rem',
        '&:last-child': {
          paddingBottom: '1.5rem',
        }
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
        borderBottom: '0',
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
