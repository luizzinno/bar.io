import React from 'react';

//Api
import { getBarInfoList } from 'core/api';

//VM
import { BarInfo } from '../bar-info/bar-info.vm';

//Mapper
import { mapBarInfoListFromApiToVm } from '../bar-info/bar-info.mappers';

//Components
import { BarInfoListComponent } from './bar-info-list.component';

export const BarInfoListContainer: React.FunctionComponent = () => {
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

  return <BarInfoListComponent infoList={barInfoList} />;
};
