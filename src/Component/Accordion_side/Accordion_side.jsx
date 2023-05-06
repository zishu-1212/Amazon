import { Link } from '@mui/material'
import React from 'react'
import product from "../Accets/product.png"
import product1 from "../Accets/product1.png"
import product2 from "../Accets/product2.png"
import product3 from "../Accets/product3.png"
import product4 from "../Accets/product4.png"
import product5 from "../Accets/product5.png"
import product6 from "../Accets/product6.png"

// import product7 from "../Accets/product7.png"
import "./Accordion_side.css"
function Accordion_side() {
  return (
    <div>
            <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed product_title" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        <img src={product} width="8%" alt="" className='me-2' />
      Products
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse center collapse " aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
    <Link to="/Manage_products" className='text-decoration-none text-dark'><div className='py-2 mt-2 text_size product_hover'> <p  className='text_style' >Manage products</p></div></Link>
    <Link to="/Add_product" className='text-decoration-none text-dark'><div className='py-2  text_size product_hover'> <p  className='text_style' >Add Products</p></div></Link>
    <Link to="/Media_center" className='text-decoration-none text-dark'><div className='py-2 text_size  product_hover'> <p  className='text_style' >Media Center</p></div></Link>
    <div className='py-2 text_size  product_hover'> <p  className='text_style' >Manage image</p></div>
    <div className='py-2 text_size  product_hover'> <p  className='text_style' >Bulk Add/Edit Products</p></div>
    </div>
  </div>
  
    
      <div class=" product_title py-2 text-start ps-3 border-none " >
      <img src={product1} width="8%" alt="" className='me-2' />
      Fulfilment by Daraz
      </div>
   
    

  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed product_title" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      <img src={product2} width="8%" alt="" className='me-2' />

      Orders &amp; Reviews
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse center collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
    <div className='py-2 mt-2 text_size product_hover'> <p  className='text_style' >
Manage Orders</p></div>
   <Link to="/" className='text-decoration-none text-dark'> <div className='py-2  text_size product_hover'> <p  className='text_style' >Manage Reviews</p></div></Link>
    <div className='py-2 text_size  product_hover'> <p  className='text_style' >Schedule Drop-offs</p></div>
    <div className='py-2 text_size  product_hover'> <p  className='text_style' >Customer Returns</p></div>
   
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-heading4">
      <button class="accordion-button collapsed product_title" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse4" aria-expanded="false" aria-controls="flush-collapse4">
      <img src={product3} width="8%" alt="" className='me-2' />

      Seller Tools
      </button>
    </h2>
    <div id="flush-collapse4" class="accordion-collapse center collapse" aria-labelledby="flush-heading4" data-bs-parent="#accordionFlushExample">
    <div className='py-2 mt-2 text_size product_hover'> <p  className='text_style' >Campaign</p></div>
    <div className='py-2  text_size product_hover'> <p  className='text_style' >Bundles</p></div>
    <div className='py-2 text_size  product_hover'> <p  className='text_style' >Seller Voucher</p></div>
    <div className='py-2 text_size  product_hover'> <p  className='text_style' >Free Shipping</p></div>
    <div className='py-2 text_size  product_hover'> <p  className='text_style' >Seller Picks</p></div>
    <div className='py-2 text_size  product_hover'> <p  className='text_style' >Store Decoration</p></div>
    <div className='py-2 text_size  product_hover'> <p  className='text_style' >Livestream</p></div>
   
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-heading5">
      <button class="accordion-button collapsed product_title" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse5" aria-expanded="false" aria-controls="flush-collapse5">
      <img src={product4} width="8%" alt="" className='me-2' />

      Seller Advisor
      </button>
    </h2>
    <div id="flush-collapse5" class="accordion-collapse center collapse" aria-labelledby="flush-heading5" data-bs-parent="#accordionFlushExample">
    <div className='py-2 mt-2 text_size product_hover'> <p  className='text_style' >Account Health</p></div>
    <div className='py-2  text_size product_hover'> <p  className='text_style' >Product Advisor</p></div>
    <div className='py-2 text_size  product_hover'> <p  className='text_style' >Business Advisor</p></div>

   
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-heading6">
      <button class="accordion-button collapsed product_title" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse6" aria-expanded="false" aria-controls="flush-collapse6">
      <img src={product5} width="8%" alt="" className='me-2' />

      Finance
      </button>
    </h2>
    <div id="flush-collapse6" class="accordion-collapse center collapse" aria-labelledby="flush-heading6" data-bs-parent="#accordionFlushExample">
    <div className='py-2 mt-2 text_size product_hover'> <p  className='text_style' >Account statements</p></div>
    <div className='py-2  text_size product_hover'> <p  className='text_style' >Order overview</p></div>
    <div className='py-2 text_size  product_hover'> <p  className='text_style' >Transaction overview</p></div>
   
   
    </div>
  </div>

  <div class=" product_title py-2 text-start ps-3 border-none " >
      <img src={product6} width="8%" alt="" className='me-2' />
      Daraz University
      </div>

      <div class="accordion-item">
    <h2 class="accordion-header" id="flush-heading7">
      <button class="accordion-button collapsed product_title" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse7" aria-expanded="false" aria-controls="flush-collapse7">
      <img src={product5} width="8%" alt="" className='me-2' />

      Seller Support
      </button>
    </h2>
    <div id="flush-collapse7" class="accordion-collapse center collapse" aria-labelledby="flush-heading7" data-bs-parent="#accordionFlushExample">
    <div className='py-2 mt-2 text_size product_hover'> <p  className='text_style' >Help center</p></div>
    <div className='py-2  text_size product_hover'> <p  className='text_style' >Shop Management Services</p></div>
    <div className='py-2 text_size  product_hover'> <p  className='text_style' >Contact Us</p></div>
   
   
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-heading8">
      <button class="accordion-button collapsed product_title" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse8" aria-expanded="false" aria-controls="flush-collapse8">
      <img src={product5} width="8%" alt="" className='me-2' />

      Account & Settings
      </button>
    </h2>
    <div id="flush-collapse8" class="accordion-collapse center collapse" aria-labelledby="flush-heading8" data-bs-parent="#accordionFlushExample">
    <div className='py-2 mt-2 text_size product_hover'> <p  className='text_style' >Profile</p></div>
    <div className='py-2  text_size product_hover'> <p  className='text_style' >User Management</p></div>
    <div className='py-2 text_size  product_hover'> <p  className='text_style' >Account settings</p></div>
    <div className='py-2 text_size  product_hover'> <p  className='text_style' >Chat settings</p></div>
   
   
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-heading9">
      <button class="accordion-button collapsed product_title" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse9" aria-expanded="false" aria-controls="flush-collapse9">
      <img src={product5} width="8%" alt="" className='me-2' />

      Seller Documents
      </button>
    </h2>
    <div id="flush-collapse9" class="accordion-collapse center collapse" aria-labelledby="flush-heading9" data-bs-parent="#accordionFlushExample">
    <div className='py-2 mt-2 text_size product_hover'> <p  className='text_style' >Templates</p></div>
    <div className='py-2  text_size product_hover'> <p  className='text_style' >API Documents</p></div>
    <div className='py-2 text_size  product_hover'> <p  className='text_style' >API Test Tools</p></div>
   
   
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-heading10">
      <button class="accordion-button collapsed product_title" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse10" aria-expanded="false" aria-controls="flush-collapse10">
      <img src={product5} width="8%" alt="" className='me-2' />

      Sponsored Solution
      </button>
    </h2>
    <div id="flush-collapse10" class="accordion-collapse center collapse" aria-labelledby="flush-heading10" data-bs-parent="#accordionFlushExample">
    <div className='py-2 mt-2 text_size product_hover'> <p  className='text_style' >Campaign Management</p></div>
    <div className='py-2  text_size product_hover'> <p  className='text_style' >Ad Groups</p></div>
    <div className='py-2 text_size  product_hover'> <p  className='text_style' >Account Statement</p></div>
    <div className='py-2 text_size  product_hover'> <p  className='text_style' >Performance Reports</p></div>
    <div className='py-2 text_size  product_hover'> <p  className='text_style' >Learn About Ads</p></div>
   
   
    </div>
  </div>

</div>
    </div>
  )
}

export default Accordion_side
