import React from 'react';

//Material ui
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

//VM
import { BarInfo } from '../bar-info/bar-info.vm';

//Component
import { ListItemComponent } from './components';

//CSS
import * as classes from './bar-info-list.styles';

export interface Props {
  infoList: BarInfo[];
}

export const BarInfoListComponent: React.FunctionComponent<Props> = (props) => {
  const { infoList } = props;
  console.log(infoList);
  const {
    root,
    items,
  } = classes;

  return (
    <List
      component='ul'
      aria-label='bar list'
      className={root}
    >
      {infoList.map(
        (bar) =>
          Boolean(bar) && (
            <ListItem
              key={bar.infoA}
              className={items}
            >
              <ListItemComponent
                title={bar.infoA}
                info2={bar.infoB}
                info3={bar.infoC}
                linkTo='/barInfo'
              />
            </ListItem>
          )
      )}
    </List>
  );
};
