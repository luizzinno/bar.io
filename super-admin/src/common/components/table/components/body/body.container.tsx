import React from 'react';

//Componente
import { TableBodyComponent } from './body.component';

interface Props {
  list: object[];
  rowsPerPage: number;
  page: number;
  onEdit: (row: object) => void;
  onDelete: (row: object) => void;
}
export const TableBodyContainer: React.FC<Props> = (props) => {
  //Props
  const { list, rowsPerPage, page, onEdit, onDelete } = props;

  return (
    <>
      <TableBodyComponent
        onEdit={onEdit}
        onDelete={onDelete}
        list={
          rowsPerPage > 0 ? list.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : list
        }
      />
    </>
  );
};
