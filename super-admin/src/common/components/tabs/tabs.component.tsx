import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

interface TabPanel {
  children: Element;
  index: number;
  value: number;
}

const TabPanel: React.FC<TabPanel> = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && (
        <Box p={3}>
          <>{children}</>
        </Box>
      )}
    </div>
  );
};

interface TabsPanel {
  namesTabs: string[];
  scenesTabs: any[];
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export const TabsPanel: React.FC<TabsPanel> = (props) => {
  const { namesTabs, scenesTabs } = props;
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Tabs value={value} onChange={handleChange} aria-label='tabs actions'>
          {namesTabs.map((name, index) => (
            <Tab label={name} key={index} />
          ))}
        </Tabs>
      </AppBar>
      {scenesTabs.map((scene, index) => (
        <TabPanel value={value} index={index} key={index}>
          {scene}
        </TabPanel>
      ))}
    </div>
  );
};
