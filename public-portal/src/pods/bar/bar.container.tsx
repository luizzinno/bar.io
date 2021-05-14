import React from 'react';
import { BarComponent } from './bar.component';

interface Props {
  slug: string;
}
export const BarContainer: React.FunctionComponent<Props> = (props) => {
  const { slug } = props;
  return <BarComponent slug={slug} />;
};
