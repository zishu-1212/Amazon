import React from 'react'
import "./Add_product.css"
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Image_upload from '../Image_upload/Image_upload';
import Steper_box from '../Steper_box/Steper_box';
function Add_product() {
  return (
    <div>
      <div className="main_box ">
        <div className="container ">
          <div className="row mt-2 m-auto   justify-content-center">
            <div className="col-md-9 col-sm-12 ">
              <div className="border_ha bg-white">
<h5 className='text_oringe py-3   ps-3 m-0'> Basic information</h5>
<div className=" bg-white m-0 px-3 pt-3">
<div className="border border_ha py-3">
<p className='fs-6 fw-bold ps-3'>Product Images & Video</p>
<div className="">
  <p className='text_size ps-3'>Your product images is the first thing your customer sees on the product page.</p>


</div>
<div className="mt-5">
  <p className=' ps-3'>Product Images <span className='orrr_text'>*</span> <span><ErrorOutlineIcon className='me-2 fs-5 text-primary'/></span> </p>
  <div className="d-flex justify-content-between px-3 text_size"><p>Upload between 3 to 8 images</p>
  <a className='text-decoration-none ' href="/">
  <svg  width="14" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m3.491 3.652 2.206-2.205m0 0 2.206 2.205M5.697 1.447v7.72" stroke="#1791F2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9.531 4.994a.5.5 0 1 0-.78.625l.78-.625Zm-6.888.625a.5.5 0 1 0-.78-.625l.78.625ZM9.61 8.064a3.912 3.912 0 0 1-3.912 3.911v1a4.912 4.912 0 0 0 4.911-4.911h-1Zm-3.912 3.911a3.912 3.912 0 0 1-3.912-3.911h-1a4.912 4.912 0 0 0 4.912 4.911v-1ZM8.751 5.62c.537.67.858 1.52.858 2.445h1c0-1.161-.404-2.23-1.078-3.07l-.78.625ZM1.785 8.064c0-.926.321-1.775.858-2.445l-.78-.625a4.893 4.893 0 0 0-1.078 3.07h1Z" fill="#1791F2"></path></svg>
    Media Center</a>
  </div>
  <div className="mt-4 d-md-flex d-block justify-content-around w-100">
    <Image_upload img_title="Cover image"/>
    <Image_upload img_title=" image 1"/>
    <Image_upload img_title=" image 2"/>
    <Image_upload img_title=" image 3"/>
    <Image_upload img_title=" image 4"/>
    <Image_upload img_title=" image 5"/>
    <Image_upload img_title=" image 6"/>
    
    </div>

    <div className="container mt-4">
<p className='text_size'>Video <ErrorOutlineIcon className='me-2 fs-5 text-primary'/></p>
<div class="input-group mb-3 mt-2">

  <input type="text" class="form-control" placeholder="Input Youtube Video Link" aria-label="Username" aria-describedby="basic-addon1"/>
</div>
    </div>
</div>
</div>
<div className="border border_ha py-3 px-3 mt-3">
<p className='fs-6 fw-bold ps-3'>Product Images & Video</p>
<p className='text_size ps-3'>Having accurate product information raises discoverability.</p>
<div className="container">
  <p className='text_size mt-3'>Product Name <span className='orrr_text'>*</span></p>
</div>
<div className="row">
<div className="col-md-10 px-3 mt-2 " style={{gap:"7px" }}>
<div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">English</span>
  <input type="text" class="form-control" placeholder="Ex. Nikon Coolpix A300 Digital Camera" aria-label="Username" aria-describedby="basic-addon1"/>
  
</div>


<div class="input-group mb-3" >
  <span class="input-group-text" id="basic-addon1">Urdu</span>
  <input type="text" class="form-control" placeholder="Ex. Nikon Coolpix A300 Digital Camera" aria-label="Username" aria-describedby="basic-addon1"/>
  
</div>
</div>
<div className="col-md-2 ms-3 ms-md-0 mt-2">
<button className='Translate px-3'>Translate</button>
</div>
</div>

<div className="   border_ha ">
<p>Category <span className='orrr_text'>*</span></p>
<div className="d-md-flex d-block  justify-content-between" style={{gap:"44px" }}>
  
<div class="input-group mb-3 "  >

  <input type="text" class="form-control " placeholder="Category search: You can enter the product name" aria-label="Username" aria-describedby="basic-addon1"/>
  
 
</div>
<div className=""> <p className='orrr_text' >recently used</p></div>
</div>
</div>
</div>

</div> </div>

<div className="foter bg-white border_ha py-5 mt-3 " >
  <div className="d-flex justify-content-end px-3" style={{gap:"4px" }}>
    <button className='Translate py-2 px-4 me-3'>Save Draft</button>
    <button className='Translate py-2 px-4'>Submit</button>
  </div>
</div>
</div>
            
            <div className="col-md-3 col-sm-12 mt-4 mt-md-0 ">
              <div className="">
            <div className=" bg-white border_ha p-2">
              <div className="">

<Steper_box/>
</div>
            </div>
            </div></div>
         
        </div></div>
      </div>
    </div>
  )
}

export default Add_product
