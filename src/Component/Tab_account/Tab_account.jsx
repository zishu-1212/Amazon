import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import FacebookIcon from '@mui/icons-material/Facebook';
import "./Tab_account.css"
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
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example " variant='scrollable' >
          <Tab className='text_size' label="Change Profile Photo" {...a11yProps(0)} />
          <Tab  className='text_size' label="Login Credentials" {...a11yProps(1)} />
          <Tab  className='text_size' label="Social Media Accounts" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <div className="">
        <p className="fs-5">Change Profile Photo</p>
        <p>Please select your photo.</p>
        <div className="  text-center py-5  my-4  control_icon w-25 " >
<ControlPointIcon className='size_icon fs-2'/>

      </div>

      </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
       <div className="card py-5 px-3">
        <div className="card-body text_size">
            <p className=''>Login Email address</p>
            <div className="mt-2">
            <span className="pt-2">th747576@gmail.com</span><span className='ms-4 text_origin'>Change</span>
        </div>

            <p className='mt-4'>Login Phone Number</p>
            <div className="mt-2">
            <span className="pt-2">3189008320</span><span className='ms-4 text_origin'>Change</span>
        </div>

            <p className='mt-4'>Password</p>
            <div className="mt-2">
            <span className="pt-2">********</span><span className='ms-4 text_origin'>Change</span>
        </div>
        </div>
       </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <div className="">
        <p className='fs-5'>Linked Accounts</p>
        <p className="mt-2 text_size">Connect your account with any of the services below to simplify your sign-in experience. We only use this information to verify your account and will never post on your behalf</p>
<div className="row mt-5 text_size">
    <div className="col-3">Provider</div>
    <div className="col-3">Name</div>
    <div className="col-3">Email Address</div>
    <div className="col-3">Actions</div>
</div>
<hr/>
<div className="card">
    <div className="card-body">
<FacebookIcon className='fs-1 text-primary' /><span className='ms-1'>Facebook</span>
    </div>
</div>
      </div>
      </TabPanel>
    </Box>
  );
}
