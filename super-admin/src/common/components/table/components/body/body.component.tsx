import React from 'react';

//Componentes material UI
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
//CSS
import { makeStyles } from '@material-ui/core/styles';

//Sobreescribir CSS de los componentes
const useStyles = makeStyles({
  cell: {
    wordWrap: 'break-word',
  },
});

interface Props {
  list: Object[];
  onEdit: (event: any) => void;
  onDelete: (event: any) => void;
}

export const TableBodyComponent: React.FC<Props> = (props) => {
  //Props
  const { list, onEdit, onDelete } = props;

  //CSS para sobreescribir en los componentes
  const classes = useStyles();

  return (
    <TableBody>
      {list.map((row, index) => (
        <TableRow key={index}>
          {Object.keys(row).map((cell, index2) => (
            <TableCell align='center' className={classes.cell} key={index2}>
              {cell}
            </TableCell>
          ))}
          <TableCell align='center' className={classes.cell}>
            <EditIcon onClick={onEdit} />

            <DeleteIcon onClick={onDelete} />
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};
