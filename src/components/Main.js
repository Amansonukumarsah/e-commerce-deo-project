import React from 'react';
import { Routes,Route } from 'react-router';
import Navbar from './Navbar';
import Home from './Home';
import Form1 from './Form1';
import Conformationpage from './Conformationpage';
import Orderplaced from './Orderplaced';
import Productdetails from './Productdetails';
import { useState } from 'react';

const   Main=()=>{
  const [ide,setide]=useState()
  const [arr,setarr]=useState([])
 return (
    <>
      <div>
        <div>
         <Navbar/>
        </div>
        <div>
         <Routes>
             <Route exact path='/' element={<Home/>} />
             <Route exact path='/form' element={<Form1 setide={setide} ide={ide} setarr={setarr} arr={arr}/>} />
             <Route exact path='/con' element={<Conformationpage/>} />
             <Route exact path='/ord' element={<Orderplaced setide={setide} ide={ide} setarr={setarr} arr={arr}/>} />
             <Route exact path='/:id/' element={<Productdetails setide={setide} ide={ide}/>} />
         </Routes>
        </div>
    </div>
    </>
 )
}
export default Main;