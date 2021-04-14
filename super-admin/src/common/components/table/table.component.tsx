import React, { memo } from 'react';

//Componentes material UI
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';

//Componente
import { TableHeaderContainer } from './components/header';
import { TableBodyContainer } from './components/body';
import { TableFooterContainer } from './components/footer';

//CSS
import { makeStyles } from '@material-ui/core/styles';
import { List } from '@material-ui/core';

//Sobreescribir CSS de los componentes
const useStyles = makeStyles({
  table: {
    tableLayout: 'fixed',
  },
});

interface Props {
  headers: string[];
  list: object[];
  rowsPerPage: number;
  page: number;
  onchangePage: (event: any, page: number) => void;
  onchangeRowsPerPage: (event: any) => void;
  onEdit: (event: any) => void;
  onDelete: (event: any) => void;
}

export const TableComponent: React.FC<Props> = (props) => {
  //Props
  const {
    headers,
    list,
    rowsPerPage,
    page,
    onchangePage,
    onchangeRowsPerPage,
    onEdit,
    onDelete,
  } = props;

  //CSS para sobreescribir en los componentes
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table aria-label='Member list' className={classes.table}>
        <TableHeaderContainer headerList={headers} />

        <TableBodyContainer
          list={list}
          rowsPerPage={rowsPerPage}
          page={page}
          onEdit={onEdit}
          onDelete={onDelete}
        />

        <TableFooterContainer
          list={list}
          rowsPerPage={rowsPerPage}
          page={page > 0 && list.length === rowsPerPage ? 0 : page}
          onchangePage={onchangePage}
          onchangeRowsPerPage={onchangeRowsPerPage}
        />
      </Table>
    </TableContainer>
  );
};
