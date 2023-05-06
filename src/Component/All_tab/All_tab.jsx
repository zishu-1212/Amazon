import React from 'react'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Product_table from '../Product_table/Product_table';
import "./All_tab.css"
function All_tab() {
  return (
    <div>
       <div className=" py-2 d-flex text-start m-auto color_back2 ps-2 rounded" >
<ErrorOutlineIcon className='me-2 text-primary'/>
<p>
    <h5>Explanation
</h5>
<p className='text_size'>All product exclude delete and draft.</p>
</p>
      </div>
<div className="">


<div className="grid_cloms mt-3">

<div class="dropdown bodder">
  <button class="btn btn-white text_dark_select border rounded field w-100 text-start" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  Category
  </button>
  <ul class="dropdown-menu " aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">With text</a></li>
    <li><a class="dropdown-item" href="#">With image/video</a></li>
    <li><a class="dropdown-item" href="#">With content</a></li>
    <li><a class="dropdown-item" href="#">Rating only</a></li>
  </ul>
</div>
<div class="input-group bodder">
  <input type="text" placeholder='Product ID' class="form-control field" aria-label="Dollar amount (with dot and two decimal places)"/></div>
<div class="input-group bodder">
  <input type="text" placeholder='Product Name' class="form-control field" aria-label="Dollar amount (with dot and two decimal places)"/></div>
<div class="input-group bodder">
  <input type="text" placeholder='Seller SKU' class="form-control field" aria-label="Dollar amount (with dot and two decimal places)"/></div>
<div class="input-group bodder">
  <input type="text" placeholder='Shop SKU' class="form-control field" aria-label="Dollar amount (with dot and two decimal places)"/></div>
 
 </div>
 
</div>
<button className='btn btn-primary text_size mt-2'>Search</button>

<div className="d-flex justify-content-between align-items-center mt-4">
  <p className='text_size'>Selected: 0</p>
  <button className='btn btn-primary text_size mt-2'>product</button>
</div>
<Product_table/>
    </div>
  )
}

export default All_tab
