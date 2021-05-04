import React from 'react';
import Link from 'next/link';
import Typography from '@material-ui/core/Typography';
import { routes } from 'core/router';

export const BarListComponent: React.FunctionComponent = (props) => {
  return (
    <>
      <Typography variant="h4">Bar list</Typography>
      <Link href={routes.bar('/matsuya')}>Navigate to Matsuya bar</Link>
    </>
  );
};
