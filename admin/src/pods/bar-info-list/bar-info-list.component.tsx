import React from 'react';

//Material ui
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

//VM
import { BarInfo } from '../bar-info/bar-info.vm';

//CSS
import * as classes from './bar-info-list.styles';

export interface Props {
  infoList: BarInfo[];
  onSelect: (bar: BarInfo) => void;
}
export const BarInfoListComponent: React.FunctionComponent<Props> = (props) => {
  const { infoList, onSelect } = props;

  const handleClick = (bar: BarInfo) => {
    onSelect(bar);
  };

  return (
    <Card className={classes.card}>
      <CardHeader title='Bar info List' className={classes.title} />

      {infoList.map((bar, index) => (
        <CardContent
          key={index}
          onClick={() => {
            handleClick(bar);
          }}
          className={classes.list}>
          <ul>
            <li>{bar.infoA}</li>
            <li>{bar.infoB}</li>
            <li>{bar.infoC}</li>
          </ul>
        </CardContent>
      ))}
    </Card>
  );
};
