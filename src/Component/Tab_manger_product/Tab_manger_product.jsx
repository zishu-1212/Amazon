import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import All_tab from '../All_tab/All_tab';

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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{  }} className="bg-white rounded shadow_tab">
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange}  variant="scrollable"
  
  
 >
          <Tab className='text_size '  label="All" {...a11yProps(0)} />
          <Tab className='text_size '  label="Online(8)" {...a11yProps(1)} />
          <Tab className='text_size '  label="Draft(0)" {...a11yProps(2)} />
          <Tab className='text_size '  label="Pending(0)" {...a11yProps(3)} />
          <Tab className='text_size '  label="Out Of Stock(0)" {...a11yProps(4)} />
          <Tab className='text_size '  label="Inactive(0)" {...a11yProps(5)} />
          <Tab className='text_size '  label="Suspended(0)" {...a11yProps(6)} />
          <Tab className='text_size '  label="Deleted(0)" {...a11yProps(7)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <All_tab/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={7}>
        Item Three
      </TabPanel>
    </Box>
  );
}
