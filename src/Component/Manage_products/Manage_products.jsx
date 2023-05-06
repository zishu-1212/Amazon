import React from 'react'
import './Manage_products.css'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Tab_manger_product from '../Tab_manger_product/Tab_manger_product';
function Manage_products() {
  return (
    <div className='px-0 px-3 mt-5 mt-md-1'>
      <div className=" text-start pt-1 ps-2">
        <h2 className='' >Product Management</h2>
      </div>
     <div className="container">
      <div className="row color_back2 rounded">
        <div className=" py-2 d-flex text-start m-auto">
<ErrorOutlineIcon className='me-2 text-primary '/>
<p>Since we have upgraded the product management, For a better experience, the older operation of file uploading on the current page would be offline in a few days. You can experience the new one in the menu 'Products / Bulk Add/Edit Products'</p>
      </div></div>
      <div className="mt-3 float-start">
      <button className='btn btn-primary text_size'>Add New Product</button>
     </div>
      </div> 
     <br/>
     <br/>
     <br/>
    
     <Tab_manger_product/>
    </div>
  )
}

export default Manage_products
