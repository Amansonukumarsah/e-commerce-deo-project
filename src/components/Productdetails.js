import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from './datadetails/data'
import { NavLink } from 'react-router-dom';
const Productdetails = ({setide,ide}) => {
   const [img, setimg] = useState()
   const [price, setprice] = useState()
   const [details, setdetails] = useState()
   const [name, setname] = useState()
   const { id } = useParams()

   useEffect(() => {
      {
         data.map((val, ind) => {
            if (val.id == id) {
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
         <div className='container-fluid'>
            <div className='row'>
               <div className='col-4 my-2'>
                  <div className='card text-center my-2'>
                     <p>Image_Of_Product</p>
                  </div>
                  <img style={{width:'500px'}} src={img} alt="" />
               </div>
               <div className='col-1'>

               </div>
               <div className='col-7 my-2'>
                  <div className='card text-center my-2'>
                     <p>Product_Details</p>
                  </div>
                  <div>
                     <p style={{color:'black'}}>Price:-{name}</p>
                     <p style={{color:'black'}}>Price:-{price}</p>
                     <p style={{color:'black'}}>ProductDetails:-{details}</p>
                  </div>
                  <NavLink to='/form'>
                     <button className='btn btn-success'>Please fill the details for placing order</button>
                  </NavLink>
               </div>
            </div>
         </div>
      </>
   )
}

export default Productdetails;