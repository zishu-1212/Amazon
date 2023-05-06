import React from 'react'
import "./Media_image.css"
import folder1 from "../Accets/foot-removebg-preview.png"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
function Media_image() {
  return (
    <div>
      <div className="">
                
                <div className="mt-2 hover_post text-center py-3 px-2">
                    <img src={folder1} width="100" alt="" />
                    <input type="checkbox"  className='chexk'/>
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
                    <p className='text_size mt-4 word_rap'>979ad7688bb74.jpg</p>
                    <p className='text_size  word_rap'>916 * 965</p>
                </div>
              
            </div>
    </div>
  )
}

export default Media_image
