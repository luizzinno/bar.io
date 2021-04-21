import React from 'react';
import * as viewModel from './administrator-list.vm';

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
import { switchRoutes, linkRoutes } from 'core/router';
import { useHistory } from 'react-router-dom';

interface Props {
  administratorListCollection: viewModel.AdministratorEntityVm[];
  headers: string[];
  setAdministratorListCollection: (administrationlist) => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export const AdministratorListComponent: React.FunctionComponent<Props> = (props) => {
  const { container, icon } = classes;

  const {
    administratorListCollection,
    headers,
    setAdministratorListCollection,
    onEdit,
    onDelete,
  } = props;

  console.log(administratorListCollection);
  return <h1>Hello</h1>;
};
