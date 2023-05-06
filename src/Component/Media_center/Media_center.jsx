import React from 'react'
import "./Media_center.css"
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Tab_media from '../Tab_media/Tab_media';

function Media_center() {
  return (
    <div className='px-3 mt-5 mt-lg-1'>
             <div className="text-start text_size pt-4 pt-lg-1">
      <span text-start>Home </span>
      <KeyboardArrowRightIcon className='text_size'/>
      <span text-start>Products </span>
      <KeyboardArrowRightIcon className='text_size'/>
      <span text-start>Media Center </span>
      </div>
      <div className=" text-start pt-1">
        <h4 className='font_weight' >Media Center</h4>
      </div>
      <div className="d-flex align-items-center mt-4"> 
      <ErrorOutlineIcon className='me-2 fs-5 text-primary'/>
        <p className='text_size'>Please notice the image size should less then 5.0 MB Only support png,jpg,jpeg</p>
      </div>
      <div className="bg-white px-3 border_ha mt-3">
      <Tab_media/>
    </div></div>
  )
}

export default Media_center
