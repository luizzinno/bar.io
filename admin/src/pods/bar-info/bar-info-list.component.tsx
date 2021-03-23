import React from 'react';

//Material ui
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

//CSS
import * as classes from './bar-info.styles';

export interface Props {
  infoList: BarInfo[];
  onSelect: (bar: BarInfo) => void;
}
export const BarInfoListComponent: React.FunctionComponent<Props> = (props) => {
  const { infoList, onSelect } = props;

  React.useEffect(() => {
    console.log(infoList);
  });

  return (
    <Card className={classes.card}>
      <CardHeader title='Bar info List' className={classes.title} />

      {infoList.map((bar, index) => (
        <CardContent
          key={index}
          onClick={() => {
            onSelect(bar);
          }}>
          <p>{bar.infoA}</p>
          <p>{bar.infoB}</p>
          <p>{bar.infoC}</p>
        </CardContent>
      ))}
    </Card>
  );
};
