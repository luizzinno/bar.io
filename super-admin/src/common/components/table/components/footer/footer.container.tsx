import React from 'react';

//Componente
import { TableFooterComponent } from './footer.component';

interface Props {
  list: object[];
  rowsPerPage: number;
  page: number;
  onchangePage: (event: any, page: number) => void;
  onchangeRowsPerPage: (event: any) => void;
}

export const TableFooterContainer: React.FC<Props> = (props) => {
  const { list, rowsPerPage, page, onchangePage, onchangeRowsPerPage } = props;

  return (
    <>
      <TableFooterComponent
        length={list.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={onchangePage}
        onChangeRowsPerPage={onchangeRowsPerPage}
      />
    </>
  );
};
