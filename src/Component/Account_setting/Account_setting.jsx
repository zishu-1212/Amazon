import React from 'react'
import "./Account_setting.css"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Tab_account from "../Tab_account/Tab_account"
function Account_setting() {
  return (
    <div className='mt-5 mt-md-0'>
             <div className="text-start text_size pt-4 pt-lg-1">
      <span text-start>Home </span>
      <KeyboardArrowRightIcon className='text_size'/>
      <span text-start>Other </span>
      <KeyboardArrowRightIcon className='text_size'/>
      <span text-start>Account Setting </span>
      </div>

<div className=" text-start pt-1">
        <h4 className='font_weight' >Account Settings</h4>
      </div>
      <div className="">
        <Tab_account/>
      </div>
    </div>
  )
}

export default Account_setting
