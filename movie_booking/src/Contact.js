import React, { useState } from 'react'
import './Contact.css'
import axios from 'axios'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'

export default function Contact() {

  const nav=useNavigate()
 const [state,setState] = useState()

const inputchange = (event)=>{
  const {name,value} = event.target
  setState({...state,[name]:value})
}
const submit = ()=>{
  axios.post('http://127.0.0.1:8000/api/contactusAPI',state).then((response)=>{
    console.log(response);
    toast.success(response.data.message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    setTimeout(ff,900)
    function ff(){
      nav('/')
    }
    

  }).catch((error)=>{
    console.log(error.response.data);
      toast.error(error.response.data.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

    })
console.log(state);
}


  return (
    <div className='bg2 pb-5'>
  <h2 class="heading text-white text-center pt-3">Contact <span>Us!</span></h2>
  <div class="container">
  <form action="#">
    <div class="input-box">
      <input type="text" placeholder="First Name" name='fname' onChange={inputchange}></input>
      <input type="text" placeholder="Last Name" name='lname' onChange={inputchange}></input>
    </div>
    <div class="input-box">
      <input type="email" placeholder="Email" name='email' onChange={inputchange}></input>
      <input type="number" placeholder="Phone Number" name='number' onChange={inputchange}></input>
      <textarea placeholder="Your Message" cols="30" rows="8" name='message' onChange={inputchange}></textarea>
      <input type="button" value="Send " class="btn" onClick={submit}></input>
    </div>
  </form>
</div>
<ToastContainer/>
    </div>
  )
}
