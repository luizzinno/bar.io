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
  onEdit: (row: object) => void;
  onDelete: (row: object) => void;
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
          {Object.values(row).map((cell, index2) => {
            return (
              index2 > 0 && (
                <TableCell align='center' className={classes.cell} key={index2}>
                  {cell}
                </TableCell>
              )
            );
          })}
          <TableCell align='center' className={classes.cell}>
            <EditIcon
              onClick={() => {
                onEdit(row);
              }}
            />

            <DeleteIcon
              onClick={() => {
                onDelete(row);
              }}
            />
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};
