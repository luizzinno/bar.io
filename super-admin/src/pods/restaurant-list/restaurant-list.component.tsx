import React from 'react';

//Material UI
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';

//Common
import { SearchContainer } from 'common/components/search';
import { TableContainer } from 'common/components/table';
//CSS
import * as classes from 'common/styles/modules.styles';
import * as classesPropias from './restaurant-list.styles';

//Router
import { switchRoutes } from 'core/router';
import { useHistory } from 'react-router-dom';

//Model
import { Restaurant } from './restaurant.vm';

interface Props {
  headers: string[];
  restaurants: Restaurant[];
  onCreate: () => void;
  onEdit: (event: any) => void;
  onDelete: (event: any) => void;
}

export const RestaurantListComponent: React.FunctionComponent<Props> = (props) => {
  const { headers, restaurants, onCreate, onEdit, onDelete } = props;
  const { container, icon } = classes;
  const history = useHistory();
  //Search
  const [filter, setFilter] = React.useState('');

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  React.useEffect(() => {
    setList([...restaurants]);
  }, [restaurants]);

  const [list, setList] = React.useState([...restaurants]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearch = (searchValue: string) => {
    if (searchValue !== '') {
      const newList = restaurants.filter((restaurant) => {
        return restaurant['name'] === searchValue;
      });
      setList([...newList]);
    } else {
      setList([...restaurants]);
    }
  };

  return (
    <Card className={container}>
      <CardHeader
        component='h1'
        title='Restaurantes'
        action={
          <IconButton
            color='primary'
            aria-label='back home'
            className={icon}
            onClick={() => history.push(switchRoutes.selectionModule)}>
            <CloseIcon fontSize='large' />
          </IconButton>
        }
      />
      <CardContent>
        <SearchContainer onSearch={handleSearch} filter={filter} />
        <TableContainer
          headers={headers}
          list={list}
          rowsPerPage={rowsPerPage}
          page={page}
          onchangePage={handleChangePage}
          onchangeRowsPerPage={handleChangeRowsPerPage}
          onEdit={onEdit}
          onDelete={onDelete}
        />
        <div className={classesPropias.container}>
          <Button type='button' variant='contained' color='primary' onClick={() => onCreate()}>
            Nuevo
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
