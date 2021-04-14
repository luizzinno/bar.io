import React from 'react';

//Material UI
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

//Common
import { SearchContainer } from 'common/components/search';
import { TableContainer } from 'common/components/table';
//CSS
import * as classes from 'common/styles/modules.styles';

//Router
import { Link } from 'react-router-dom';
import { switchRoutes, linkRoutes } from 'core/router';
import { useHistory } from 'react-router-dom';

//Model
import { Restaurant } from './restaurant.vm';

interface Props {
  headers: string[];
}

export const RestaurantListComponent: React.FunctionComponent<Props> = (props) => {
  const { headers } = props;
  const { container, icon } = classes;
  const history = useHistory();
  //Search
  const [name, setName] = React.useState('');

  //Table
  const [restaurants, setRestaurants] = React.useState<Restaurant[]>([]);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  //Controlar la lista de miembros devuelta de la busqueda
  const handleSearch = (restaurantsFilter: Restaurant[], nameFilter: string) => {
    setPage(0);
    setRestaurants(restaurantsFilter);
    console.log(restaurantsFilter);
    console.log(restaurantsFilter.length);
    if (restaurantsFilter.length > 0) {
      setName(nameFilter);
    } else {
      alert('no hay restaurantes');
    }
  };

  const handleEdit = () => {
    alert('Editar');
  };

  const handleDelete = () => {
    alert('Borrar');
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
        <SearchContainer onSearch={handleSearch} name={name} />
        <TableContainer
          headers={headers}
          list={restaurants}
          rowsPerPage={rowsPerPage}
          page={page}
          onchangePage={handleChangePage}
          onchangeRowsPerPage={handleChangeRowsPerPage}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </CardContent>
    </Card>
  );
};
