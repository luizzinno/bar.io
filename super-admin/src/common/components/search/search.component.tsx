import React from 'react';

//Componentes material UI
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

//CSS
import * as classesPropias from './search.styles';
import { makeStyles } from '@material-ui/core/styles';

//Sobreescribir CSS de los componentes
const useStyles = makeStyles({
  title: {
    color: '#3f51b5',
    textAlign: 'center',
    paddingBottom: '2em',
  },
  input: {
    width: '70%',
    '@media screen and (max-width: 890px)': {
      width: '100%',
      marginBottom: '1em',
    },
  },
});

interface Props {
  filter: string;
  onSearch: (filter: string) => void;
}

export const SearchComponent: React.FC<Props> = (props) => {
  //Props
  const { filter, onSearch } = props;

  const [filterValue, setFilterValue] = React.useState(filter);

  //CSS para sobreescribir en los componentes
  const classes = useStyles();

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSearch(filterValue);
        }}>
        <div className={classesPropias.container}>
          <TextField
            id='company'
            label='Buscar por nombre...'
            className={classes.input}
            value={filterValue}
            onChange={(e) => {
              setFilterValue(e.target.value);
            }}
          />
          <Button type='submit' variant='contained' color='primary'>
            Buscar
          </Button>
        </div>
      </form>
    </>
  );
};
