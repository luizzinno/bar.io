import React from 'react';

//Api
import { getBarInfoList } from 'core/api';

//Router
import { useHistory } from 'react-router-dom';

import { routes } from 'core/router';
//VM
import { BarInfo } from '../bar-info/bar-info.vm';

//Mapper
import { mapBarInfoListFromApiToVm } from '../bar-info/bar-info.mappers';

//Components
import { BarInfoListComponent } from './bar-info-list.component';

export const BarInfoListContainer: React.FunctionComponent = () => {
  const history = useHistory();
  const [barInfoList, setbarInfoList] = React.useState<BarInfo[]>([]);

  React.useEffect(() => {
    onLoadBarInfoList();
  }, []);

  const onLoadBarInfoList = async () => {
    getBarInfoList()
    .then((result) => {
      //Mock....
      setbarInfoList(mapBarInfoListFromApiToVm(result));
    })
    .catch((error) => {
      // Snackbar error
      alert('Error to load bar info list');
    });
  };
  const handleSelect = (bar: BarInfo) => {
    history.push({ pathname: routes.barInfo, state: bar });
  };

  return <BarInfoListComponent infoList={barInfoList} onSelect={handleSelect} />;
};
