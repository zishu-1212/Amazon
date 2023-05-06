import React from 'react'
import "./User_mangment.css"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Tab_user from "../Tab_user/Tab_user"
function User_mangment() {
  return (
    <div className='mt-5 mt-md-0'>
    <div className="text-start text_size pt-4 pt-lg-1">
<span text-start>Home </span>

<KeyboardArrowRightIcon className='text_size'/>
<span text-start>Manage Users </span>
</div>
<div className=" text-start pt-1 d-flex justify-content-between">
        <h4 className='font_weight' >Manage Users</h4>
        <button className='btn btn-primary'>Add User</button>
      </div>
      <div className="">
        <Tab_user/>
      </div>
    </div>
  )
}

export default User_mangment
