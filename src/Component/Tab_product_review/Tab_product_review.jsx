import { Stack } from '@mui/system'
import React from 'react'
import "./Tab_product_review.css"
import TextField from '@mui/material/TextField';
function Tab_product_review() {
  return (
    <div className='container'>
      <div className="d-block d-md-flex justify-content-between ">
        <div className="four_btn d-block d-md-flex text-start " style={{gap:"10px"}}>
            <button className='first_four px-2 mt-2 mt-md-0   py-0'>All Reviews</button>
            <button className='first_four px-2 mt-2 mt-md-0   py-0'>With images/video</button>
            <button className='first_four px-2 mt-2 mt-md-0   py-0'>With text</button>
            <button className='first_four px-2 mt-2 mt-md-0   py-0'>Lower than 4 stars</button>
        </div>
        <div className="two_btn" style={{gap:"10px"}}>
            <button className='second_two px-3  mt-2 mt-md-0 py-1 me-2'>Search</button>
            <button className='second_two px-3  mt-2 mt-md-0 py-1'> Clear All</button>
        </div>

     

      </div>
<div className="">
<div className="grid_cloms mt-3">
<div class="input-group bodder">
  <input type="text" placeholder='Order Number' class="form-control field" aria-label="Dollar amount (with dot and two decimal places)"/></div>
<div class="input-group bodder">
  <input type="text" placeholder='Product Name' class="form-control field" aria-label="Dollar amount (with dot and two decimal places)"/></div>
<div class="input-group bodder">
  <input type="text" placeholder='SKU' class="form-control field" aria-label="Dollar amount (with dot and two decimal places)"/></div>
<div class="input-group bodder">
  <input type="text" placeholder='Seller SKU' class="form-control field" aria-label="Dollar amount (with dot and two decimal places)"/></div>
  <div class="dropdown bodder">
  <button class="btn btn-white text_dark_select border rounded field w-100 text-start" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
   Content
  </button>
  <ul class="dropdown-menu " aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">With text</a></li>
    <li><a class="dropdown-item" href="#">With image/video</a></li>
    <li><a class="dropdown-item" href="#">With content</a></li>
    <li><a class="dropdown-item" href="#">Rating only</a></li>
  </ul>
</div>
  <div class="dropdown bodder">
  <button class="btn btn-white field text_dark_select border rounded w-100 text-start" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
   Status
  </button>
  <ul class="dropdown-menu " aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Not replied</a></li>
    <li><a class="dropdown-item" href="#">Replied</a></li>
    <li><a class="dropdown-item" href="#">Cancelled item</a></li>
    
  </ul>
</div>
<div className="">
<div component="form" noValidate  className='kkkk' >
      <TextField
     className=''
        id="date"
        label=""
        type="date"
        defaultValue="2017-05-24"
        sx={{ width: 230}}
        InputLabelProps={{
          shrink: true,
        }}
      />
      </div>
</div>


</div>
<div className="">
<div class="dropdown bodder mt-4 mt-md-2 w_starting">
  <button class="btn btn-white field text_dark_select border rounded w-100 text-start" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
   Rating
  </button>
  <ul class="dropdown-menu " aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">5 Strat</a></li>
    <li><a class="dropdown-item" href="#">4  Strat</a></li>
    <li><a class="dropdown-item" href="#"> 3  Strat</a></li>
    <li><a class="dropdown-item" href="#"> 2  Strat</a></li>
    <li><a class="dropdown-item" href="#"> 1  Strat</a></li>
    
  </ul>
</div>
</div>
</div>
<div className="table-responsive">
<div className='table-responsive'>
<table class="table  mt-4">
  <thead>
    <tr className="back_color_data ">
      <th className='' scope="col">Order</th>
      <th scope="col">Content</th>
      <th scope="col">Product</th>
      <th scope="col">Rating</th>
      <th scope="col">Status</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"></th>
      <td></td>
      <td>No data</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td colspan="2"></td>
      <td></td>
    </tr>
  
  </tbody>
</table>
</div></div>
    </div>
  )
}

export default Tab_product_review
