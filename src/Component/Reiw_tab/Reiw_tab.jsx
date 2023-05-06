import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Tab_product_review from '../Tab_product_review/Tab_product_review';
import "./Reiw_tab.css"
import Tab_seller from '../Tab_seller/Tab_seller';
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
    <Box sx={{ width: '100%' }} className="">
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" >
          <Tab className='text_size fw-bold' label="Product Reviews" {...a11yProps(0)} />
          <Tab className='text_size fw-bold' label="Seller Reviews" {...a11yProps(1)} />
         
        </Tabs>
      </Box>
      <TabPanel className="px-0 px-md-5" value={value} index={0}>
       <Tab_product_review/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Tab_seller/>
      </TabPanel>
   
    </Box>
  );
}
