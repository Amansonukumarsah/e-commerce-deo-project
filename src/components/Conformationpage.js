import React from 'react';
import bear from './image/bear.gif';
import {NavLink} from 'react-router-dom';

const Conformationpage = () => {
   return (
      <>
         <div className='container-fluid con-body'>
            <div className='row'>
               <div className='col-6 offset-4'>
                  <img style={{ width: '500px' }} src={bear} alt="" />
               </div>
            </div>
         </div>
         <div className='text-center' style={{ marginTop: '50px' }}>
            <NavLink to='/'>
               <button className='btn btn-success'>GO_TO_HOME_PAGE</button>
            </NavLink>
         </div>
      </>
   )
}

export default Conformationpage;