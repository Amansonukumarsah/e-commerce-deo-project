import React from 'react';
import data from './datadetails/data';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
// import './CSS/Basic.css';
const Form1 = ({ setide, ide, arr, setarr }) => {
  const [img, setimg] = useState()
  const [price, setprice] = useState()
  const [details, setdetails] = useState()
  const [name, setname] = useState()
  const [first, setfirst] = useState("");
  const [email, setemail] = useState("");
  const [last, setlast] = useState("");
  const [dob, setdob] = useState("");
  const [del, setdel] = useState("");
  const [var1,setvar1]=useState(false)

  const handlesubmit = event => {
    event.preventDefault();
    document.getElementById('demo').innerHTML = 'Your form have success fully submit...please click on buy..'
  }

  const click = () => {
    const item = {
      first: first,
      last: last,
      email: email,
      dob: dob,
      del: del
    }
    setarr(item)
    setvar1(true)

  }

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
  console.log(arr)
  return (
    <>
      <div>

        <div className='container-fluid form-body'>
          <div className='row'>
            <div className='col-4 offset-4 card  my-2' style={{backgroundColor:'rgb(136, 242, 136)'}}>
              <div>
                <p id='demo' style={{ color: 'green' }}></p>
              </div>
              <div className='card text-center'>
                <h1>Please Fill The Detalils</h1>
              </div>
              <form onSubmit={handlesubmit} className='my-3'>
                <label for="">Product_Name:-</label>
                <input type="" name="" value={name} />
                <br /><br />
                <label for="">Product_Price:-</label>
                <input type="" name="" value={price} />
                <br /><br />
                <label for="">Product_details:-</label>
                <input type="" name="" value={details} />
                <br /><br />
                <label for="">First_Name:-</label>
                <input
                  type="text"
                  id='first'
                  name='first'
                  value={first}
                  onChange={event => setfirst(event.target.value)}
                />
                <br /><br />
                <label for="">Last_Name:-</label>
                <input
                  type="text"
                  id='last'
                  name='last'
                  value={last}
                  onChange={event => setlast(event.target.value)}
                />
                <br /><br />
                <label for="">Email:-</label>
                <input
                  type="email"
                  id='email'
                  name='email'
                  value={email}
                  onChange={event => setemail(event.target.value)}
                />
                <br /><br />
                <label for="">Date_of_Birth:-</label>
                <input
                  type="date"
                  id='dob'
                  name='dob'
                  value={dob}
                  onChange={event => setdob(event.target.value)}
                />
                <br /><br />
                <label for="">Delivery_Date:-</label>
                <input
                  type="date"
                  id='del'
                  name='del'
                  value={del}
                  onChange={event => setdel(event.target.value)}
                />
                <h1>{first}</h1>
                <br /><br />
                <div className='d-flex'>
                  <button type="" className='btn btn-success' onClick={click}>Submit</button>
                  <div className='mx-3'>
                    {
                         var1?<NavLink to='/ord'>
                         <button className='btn btn-warning'>Buy_Now</button>
                        </NavLink>:<NavLink to='/ord'></NavLink>
                    }
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
export default Form1;