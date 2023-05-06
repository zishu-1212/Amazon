import React from 'react'
import "./Manage_review.css"
import Review_card from "../Review_card/Review_card"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
function Manage_review() {
  return (
    <div className='mt-5 mt-md-1'>
        <div className="text-start text_size">
      <span text-start>Home </span>
      <KeyboardArrowRightIcon className='text_size'/>
      <span text-start>Orders </span>
      <KeyboardArrowRightIcon className='text_size'/>
      <span text-start>Manage Reviews </span>
      </div>
      <div className=" text-start pt-1">
        <h4 className='font_weight' >Reviews Management</h4>
      </div>
<div className="">
    <Review_card/>
</div>

    </div>
  )
}

export default Manage_review
