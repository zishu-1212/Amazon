import { TextField } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'

function Tab_seller() {
  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col-md-9 col-sm-12">
            
<div className="grid_cloms2 ">


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
<div class="input-group bodder">
  <input type="text" placeholder='Seller SKU' class="form-control field" aria-label="Dollar amount (with dot and two decimal places)"/></div>

  <div className="">
<Stack component="form" noValidate  className='kkkk' >
      <TextField
     
        id="date"
        label=""
        type="date"
        defaultValue="2017-05-24"
        sx={{ width: 230,height: "18px" }}
        InputLabelProps={{
          shrink: true,
        }}
      />
      </Stack>
</div>
</div>
</div>
            
            <div className="col-md-3 col-sm-12 mt-md-0 mt-5">
            <div className="two_btn d-flex align-items-center" style={{gap:"10px"}}>
            <button className='second_two px-3  mt-2 mt-md-0 py-1 me-2'>Search</button>
            <button className='second_two px-3  mt-2 mt-md-0 py-1'> Clear All</button>
        </div>
            </div></div>
        </div>

        <div >
<table class="table table-lg mt-5">
  <thead>
    <tr className="back_color_data ">
      <th className='' scope="col">Order Number</th>
      <th scope="col">review</th>
      <th scope="col"></th>
      <th scope="col"></th>
      <th scope="col"></th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"></th>
      <td>No data</td>
      <td></td>
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
</div>
      </div>
    
  )
}

export default Tab_seller
