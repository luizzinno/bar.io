import React from 'react';

//Componente
import { TableComponent } from './table.component';
interface Props {
  list: object[];
  headers: string[];
  rowsPerPage: number;
  page: number;
  onchangePage: (event: any, page: number) => void;
  onchangeRowsPerPage: (event: any) => void;
  onEdit: (event: any) => void;
  onDelete: (event: any) => void;
}

export const TableContainer: React.FC<Props> = (props) => {
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
  return (
    <>
      <TableComponent
        headers={headers}
        list={list}
        rowsPerPage={rowsPerPage}
        page={page}
        onchangePage={onchangePage}
        onchangeRowsPerPage={onchangeRowsPerPage}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    </>
  );
};
