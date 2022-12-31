import React from 'react';
import data from './datadetails/data';
import { useState, useEffect } from 'react';
import {NavLink} from 'react-router-dom';
import './CSS/Basic.css'
const Orderplaced = ({ setide, ide, setarr, arr }) => {
   const [img, setimg] = useState()
   const [price, setprice] = useState()
   const [details, setdetails] = useState()
   const [name, setname] = useState()
   useEffect(() => {
      {
         data.map((val, ind) => {
            if (val.id == ide) {
               setimg(val.imagesrc)
               setname(val.ProductName)
               setdetails(val.productdetails)
               setprice(val.price)
               setide(val.id)
            }

         })
      }
   }, [])
   return (
      <>
         <div class="card my-3">
            <div class="card-header text-center">
               PRODUCT AND CUSTOMER DETAILS
            </div>
            <div class="card-body">
               <div className='container-fluid'>
                  <div className='row'>
                     <div className='col-6'>
                        <h1 className='card text-center'>Product_Details</h1>
                        <div className='text-center' style={{marginTop:'20px'}}>
                           <img style={{width:'200px', height:'200px'}} src={img} alt=""/>
                           <p>Product_Name:-{name}</p>
                           <p>Price:-{price}</p>
                        </div>
                     </div>
                     <div className='col-6'>
                     <h1 className='card text-center'>Customer_Details</h1>
                        <div className='text-center' style={{marginTop:'20px'}}>
                           
                           <p>First_Name:-{arr.first}</p>
                           <p>Last_Name:-{arr.last}</p>
                           <p>Date_Of_Birth:-{arr.dob}</p>
                           <p>Email:-{arr.email}</p>
                           <p>Delivery_Date:-{arr.del}</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className='text-center' style={{marginTop:'50px'}}>
                  <NavLink to='/con'>
                     <button className='btn btn-warning'>Orderplaced</button>
                  </NavLink>
               </div>
            </div>
         </div>
      </>
   )
}

export default Orderplaced;