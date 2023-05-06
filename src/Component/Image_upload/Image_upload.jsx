import React from 'react'
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import "./Image_upload.css"
function Image_upload(props) {
  return (
    <div >
      <div className="  text-center py-3 px-3 my-2  control_icon" >
<ControlPointIcon className='size_icon fs-2'/>

      </div>
      <p className='text_size'> {props.img_title}</p>
    </div>
  )
}

export default Image_upload
