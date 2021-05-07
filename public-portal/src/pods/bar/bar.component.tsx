import React from 'react';
import Typography from '@material-ui/core/Typography';

interface Props {
  slug: string;
}

export const BarComponent: React.FunctionComponent<Props> = (props) => {
  const { slug } = props;
  return <Typography>Bar path: {slug}</Typography>;
};
