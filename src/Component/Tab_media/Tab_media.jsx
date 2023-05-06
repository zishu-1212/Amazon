import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Date_piker from "../Date_piker/Date_piker"
import folder from "../Accets/folder.png"
import Media_image from '../Media_image/Media_image';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

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
    <Box sx={{ width: '80%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab className='text_size fw-bold' label="Image" {...a11yProps(0)} />
          
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div className="">
            <div className="d-flex"style={{gap:"10px"}} >
                <button className='btn btn-primary text_size'>Upload Image</button>
                <button className='btn btn-white text_size  border_primary'>Create New Folder</button>
            </div>
<div className="mt-3 d-md-flex d-block justify-content-evenly hasd " >
<Date_piker/>
<input type="text" class="form-control ananan " placeholder="Search picher name" aria-label="Username" aria-describedby="basic-addon1"/>
<button className='border text_size px-3 bg-white ananan mt-2  mt-md-0'>Clear</button>
<button className='border text_size px-3 btn btn-primary ananan ms-1 ms-md-2 mt-0 mt-md-0'>Search</button>
</div>

            <div className="mt-2">
                <p className='fw-bold'>Folder</p>
                <div className="mt-2 hover_post py-3 px-2">
                    <img src={folder} width="80" alt="" />
                    <div className="chexk_btn">     
<div class="dropdown">
  <button class="dropbtn"><MoreHorizIcon/></button>
  <div class="dropdown-content text-start">
    <a href="#">View detail</a>
    <a href="#">Edit</a>
    <a href="#">Delete</a>
    <a href="#">Copy Link</a>
    <a href="#">Downlord</a>
    <a href="#">Export URLS</a>
  </div>
</div></div>  
                    <p className='text_size mt-4'>Product Post</p>
                </div>
              
            </div>
            <div className="">
            <p className='fw-bold mt-5'>Image</p>
           
<div className="grid_media">

<Media_image/>
<Media_image/>
<Media_image/>
<Media_image/>
<Media_image/>
<Media_image/>
<Media_image/>
<Media_image/>
<Media_image/>
<Media_image/>

</div>
 </div>
            
            <div className="mt-4">
            <Stack spacing={2}>
     
      <Pagination count={10} variant="outlined" shape="rounded" color="primary" />
    </Stack>
            </div>
        </div>
      </TabPanel>
      
    </Box>
  );
}
