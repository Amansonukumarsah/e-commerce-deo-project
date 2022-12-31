import React from 'react';
import data from './datadetails/data';
import { NavLink } from 'react-router-dom';
import './CSS/Basic.css'
import wallpaper from './image/wallpaper.avif'

const Home = () => {
  return (
    <>
      <div className=''>
        <div> 
          <img style={{width:'100%',height:'500px'}} src={wallpaper} alt="" />
        </div>
        <div className=''>
          <div className='card text-center' style={{ backgroundColor: ' rgb(153, 207, 207)' }}>
            <h1 className='sell'>SELL OF ELECTRONICE PRODUCT</h1>
          </div>
          <div className='container-fluid'>
            <div className='row'>
              {data.map((val) => (
                <div className='col-4 text-center'>
                  <div className="img1">
                    <img className='img2' src={val.imagesrc} alt="" />
                    <div className=''>
                      <div className='d-flex card' style={{backgroundColor:'rgb(231 231 82'}}>
                        <div className='d-flex' style={{marginLeft:'40px'}}>
                          <p className='card bg-success'>price:-{val.price}</p>
                        </div>
                        <div className='' style={{marginLeft:'40px'}}>
                          <p className='card bg-primary'>ProductName:-{val.ProductName}</p>
                        </div>
                        <div style={{marginLeft:'90px'}}>
                          <NavLink to={`/${val.id}/`}>
                            <button className='btn btn-warning'>Buy</button>
                          </NavLink>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
     <footer className='bg-black text-center'>
        <div>
          <p>Name:-Aman Kumar Sah</p>
          <div>
           <p>Email:-amankumarshah8102@gmail.com</p>
          </div>
        </div>
     </footer>
    </>
  )
}
export default Home;