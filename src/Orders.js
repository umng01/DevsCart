import React, { useState } from "react";
import "./Orders.css";

const Orders = () => {
  return (
    <div className="ordersPage">
      <div className="left">
        <div className="leftHeading">Your Orders</div>

        <div className="orders">
          <div className="item">
            <div className="itemImage">
              <img src="https://rukminim1.flixcart.com/image/416/416/ks4yz680/laptop-skin-decal/4/x/q/hd-printed-full-panel-laptop-skin-sticker-vinyl-fits-size-upto-original-imag5rtgsuj9yhyt.jpeg?q=70" alt="" />
            </div>
            <div className="itemDescription">
              <p className="itemName">Printed Full Panel Laptop Skin Sticker</p>
              <p className="itemSeller">Seller: 8bitCart</p>
              <p className="itemPrice">
                ₹1000 <span> ₹1999</span>
              </p>
             
            </div>
          </div>


          <div className="item">
            <div className="itemImage">
              <img src="https://cdn.idealo.com/folder/Product/200455/6/200455675/s3_produktbild_gross/canon-eos-r6.jpg" alt="" />
            </div>
            <div className="itemDescription">
              <p className="itemName">Canon Full Frame Mirrorless EOS R6 Camera Body</p>
              <p className="itemSeller">Seller: 8bitCart</p>
              <p className="itemPrice">
                ₹1,00,000 <span> ₹2,99,999</span>
              </p>
             
            </div>
          </div>



          <div className="item">
            <div className="itemImage">
              <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-gallery2-2021_GEO_US_FMT_WHH?wid=750&hei=778&fmt=jpeg&qlt=80&.v=1617122867000" alt="" />
            </div>
            <div className="itemDescription">
              <p className="itemName">iPhone12 and iPhone12 mini - Apple</p>
              <p className="itemSeller">Seller: 8bitCart</p>
              <p className="itemPrice">
                ₹60,000 <span> ₹80,000</span>
              </p>
             
            </div>
          </div>




        </div>
      </div>
    </div>
  );
};

export default Orders;
