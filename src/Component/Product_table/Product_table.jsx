import React from 'react'
import "./Product_table.css"
import head from "../Accets/head.jpg"
function Product_table() {
  return (
    <div>
      <div className="container  mt-5">
        <div className="row ha_responsiv">
            {/* <div className="col-1 mt-3">
<input type="checkbox" /><br/>
<input type="checkbox" className='mt-4' />
            </div> */}
            <div className="col-10 aasaas table-responsive ">
            <table class="table table-hover">
  <thead>
    <tr>
      <th scope="col"><input type="checkbox" /><br/></th>
      <th scope="col">Product</th>
      <th scope="col">Product/SKU</th>
      <th scope="col">Variation</th>
      
      <th scope="col">Price</th>
      <th scope="col">Stock</th>
      <th scope="col">Created</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><input type="checkbox" /><br/></th>
      <td className='d-flex '><img src={head} alt="" width="30%" /> <p className='ps-1 table_img'>GiONEE Handfree - 100% Original Gionee Pure Imported Handfree , High Quality</p></td>
      <td width="" className='table_img'>386118657</td>
      <td></td>
      <td className='table_img'>349 PKR</td>

      <td className='table_img'>10</td>
      <td className='table_img' width="30%"> 2022-07-04 11:03:45
Updated:
2023-01-02 13:26:5</td>
      
    </tr>
    <tr>
      <th scope="row"><input type="checkbox" /><br/></th>
      <td className='d-flex '><img src={head} alt="" width="30%" /> <p className='ps-1 table_img'>GiONEE Handfree - 100% Original Gionee Pure Imported Handfree , High Quality</p></td>
      <td width="" className='table_img'>386118657</td>
      <td></td>
      <td className='table_img'>349 PKR</td>

      <td className='table_img'>10</td>
      <td className='table_img' width="30%"> 2022-07-04 11:03:45
Updated:
2023-01-02 13:26:5</td>
      
    </tr>
    <tr>
      <th scope="row"><input type="checkbox" /><br/></th>
      <td className='d-flex '><img src={head} alt="" width="30%" /> <p className='ps-1 table_img'>GiONEE Handfree - 100% Original Gionee Pure Imported Handfree , High Quality</p></td>
      <td width="" className='table_img'>386118657</td>
      <td></td>
      <td className='table_img'>349 PKR</td>

      <td className='table_img'>10</td>
      <td className='table_img' width="30%"> 2022-07-04 11:03:45
Updated:
2023-01-02 13:26:5</td>
      
    </tr>
   
  </tbody>
</table>
            </div>
            <div className="col-1 mt-3">
<h5 className='text_size' >Actions</h5>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Product_table
