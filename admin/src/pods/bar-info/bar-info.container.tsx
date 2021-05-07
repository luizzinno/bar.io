import React from 'react';

//Api
import * as api from './api';

//Router
import { useHistory } from 'react-router-dom';
import { switchRoutes } from 'core/router';

//VM
import { BarInfo, createEmptyBarInfo } from './bar-info.vm';

//Mapper
import { mapBarInfoFromApiToVm } from './bar-info.mappers';

//Components
import { BarInfoComponent } from './bar-info.component';
import {
  AlertSnackbarComponent,
  HorizontalPosition,
  Severity,
  VerticalPosition,
} from 'common-app/components/alert-snackbar';

export const BarInfoContainer: React.FunctionComponent = () => {
  const history = useHistory();
  const [error, setError] = React.useState<string>(null);
  const [barInfo, setBarInfo] = React.useState<BarInfo>(createEmptyBarInfo());

  React.useEffect(() => {
    if (history.location.state !== undefined) {
      const bar: BarInfo = history.location.state as BarInfo;
      setBarInfo(bar);
    } else {
      onLoadBarInfo();
    }
  }, []);

  const onLoadBarInfo = async () => {
    api
      .getBarInfo()
      .then((result) => {
        setBarInfo(mapBarInfoFromApiToVm(result));
      })
      .catch((error) => {
        setError('Error to load bar info');
      });
  };

  const handleSave = (barInfo: BarInfo) => {
    api
      .saveBarInfo(barInfo)
      .then((result) => {
        setError('Updated Bar info');
      })
      .catch((error) => {
        setError('Error to update bar info');
      });
  };

  const handleCancel = () => {
    history.push(switchRoutes.dashboard);
  };

  const onCloseErrorAlert = () => {
    setError(null);
  };

  return (
    <>
      <BarInfoComponent info={barInfo} onSave={handleSave} onCancel={handleCancel} />
      <AlertSnackbarComponent
        open={!!error}
        message={error}
        onClose={onCloseErrorAlert}
        severity={Severity.ERROR}
        autoHideDuration={6000}
        vertical={VerticalPosition.TOP}
        horizontal={HorizontalPosition.CENTER}
      />
    </>
  );
};
