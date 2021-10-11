import React from 'react';
import * as viewModel from './administrator-list.vm';

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
import * as headerClass from './administrator-list.styles';

//Router
import { switchRoutes, linkRoutes } from 'core/router';
import { useHistory } from 'react-router-dom';

interface Props {
  administratorList: viewModel.AdministratorEntityVm[];
  headers: string[];
  onCreateAdministrator: () => void;
  onEdit: (event: any) => void;
  onDelete: (event: any) => void;
}

export const AdministratorListComponent: React.FunctionComponent<Props> = (props) => {
  const { headers, administratorList, onCreateAdministrator, onEdit, onDelete } = props;
  const { container, icon } = classes;
  const history = useHistory();

  const [filter, setFilter] = React.useState('');

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const [list, setList] = React.useState([...administratorList]);

  React.useEffect(() => {
    setList([...administratorList]);
  }, [administratorList]);

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearch = (searchValue: string) => {
    const removeAccents = (str) => {
      return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    };

    if (searchValue !== '') {
      const newList = administratorList.filter((administratorList) => {
        if (
          removeAccents(administratorList.name.toLowerCase()).includes(
            removeAccents(searchValue.toLowerCase()),
          )
        )
          return administratorList.name;
      });
      setList([...newList]);
    } else {
      setList([...administratorList]);
    }
  };

  const handleBackPage = () => history.push(switchRoutes.selectionModule);

  return (
    <Card className={container}>
      <div className={headerClass.containerAdministratorList}>
        <div className={headerClass.administrator}>
          <CardHeader component='h1' title='Lista de Administradores' />
          <IconButton
            color='primary'
            aria-label='back home'
            className={icon}
            onClick={handleBackPage}>
            <CloseIcon fontSize='large' />
          </IconButton>
        </div>
        <Button type='button' variant='contained' color='primary' onClick={onCreateAdministrator}>
          Nuevo Administrador
        </Button>
      </div>

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
      </CardContent>
    </Card>
  );
};
