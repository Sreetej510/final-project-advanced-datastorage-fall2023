import React, {useState} from "react";
import OrderDetails from "./components/OrderDetails/index";
import CURD from "./components/CURD/curd";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const App = () => {
  const [tabValue, setTabValue] = useState(0);

  const tabChange = (event, newValue) => {
    setTabValue(newValue);
  };
  

  return (
    <Box sx={{ width: '100%' }}>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs value={tabValue} onChange={tabChange} aria-label="basic tabs example">
        <Tab label="CURD" {...a11yProps(0)} />
        <Tab label="Search Orders By Customer Info" {...a11yProps(1)} />
      </Tabs>
    </Box>
    <TabPanel value={tabValue} index={0}>
      <CURD/>
    </TabPanel>
    <TabPanel value={tabValue} index={1}>
      <OrderDetails/>
    </TabPanel>
  </Box>
  );
};

export default App;