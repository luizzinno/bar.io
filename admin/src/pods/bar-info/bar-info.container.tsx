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
  const [barInfo, setbarInfo] = React.useState<BarInfo>(createEmptyBarInfo());

  React.useEffect(() => {
    onLoadInfoBar();
  }, []);

  const onLoadInfoBar = async () => {
    api
      .getBarInfo()
      .then((result) => {
        setbarInfo(mapBarInfoFromApiToVm(result));
      })
      .catch((error) => {
        // Snackbar error
        // alert('Error to load bar info');
        setError('Error to load bar info');
      });
  };

  const handleSave = (barInfo: BarInfo) => {
    api
      .saveBarInfo(barInfo)
      .then((result) => {
        // Snackbar error
        // alert('Updated Bar info');
        setError('Updated Bar info');
      })
      .catch((error) => {
        // Snackbar error
        // alert('Error to update bar info');
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
