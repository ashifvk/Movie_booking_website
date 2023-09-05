import React, { useState } from 'react'
import './Nav.css'
import vk from './images/V.png'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'

export default function Nav() {
  const navigate = useNavigate()


  const [state, setState] = useState()
  const inputChange = (event) => {
    const { name, value } = event.target
    setState({ ...state, [name]: value })
  }



  const submit = () => {
    axios.post('http://127.0.0.1:8000/api/LoginUserAPIView', state).then((response) => {
      console.log(response.data);
      console.log(state);
      localStorage.setItem('name', response.data.data.name)
      localStorage.setItem('login', response.data.data.role)

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

      setTimeout(nav, 500)
      function nav() {
        navigate('/')
        window.location.reload()
      }




    }).catch((error) => {
      console.log(error.response.data);
      toast.error(error.response.data.data, {
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
  }

  const role = localStorage.getItem('login')

  const clr = () => {
    toast.error('logout successfully', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    setTimeout(nav, 700)
    function nav() {
    //  const role =''
    //  localStorage.setItem('login',JSON.stringify(role))
      // localStorage.clear();
      localStorage.removeItem('login')
      navigate('/')
      // window.location.reload()
    }

  }
  return (
    <div >
      <ToastContainer />
      {role == 'admin' ?
        <nav class="navbar navbar-expand-lg navbar-light bg">
          <a class="navbar-brand text-white" href="#">
            <img src={vk} width="35" height="35" class="d-inline-block align-top" alt=""></img>
            <labell class='ml-2'>VK POLIS</labell>
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav mx-auto">
              <a class="nav-link active text-white" href="/">Home <span class="sr-only">(current)</span></a>
              <a class="nav-link text-white" href="/addshow">Add shows</a>
              <a class="nav-link text-white" href="/show">Shows</a>
              <a class="nav-link text-white" href="/contact">Contact us</a>
              <a class="nav-link text-white" href="/users">Users</a>
            </div>
            <button type="button" class="btn btn-light" data-toggle="modal" onClick={clr}>
            logout
          </button>
          </div>
          
        </nav>


        :
        role == "user" ?
          <nav class="navbar navbar-expand-lg navbar-light bg">
            <a class="navbar-brand text-white" href="#">
              <img src={vk} width="35" height="35" class="d-inline-block align-top" alt=""></img>
              <labell class='ml-2'>VK POLIS</labell>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav mx-auto">
                <a class="nav-link active text-white" href="/">Home <span class="sr-only">(current)</span></a>
                <a class="nav-link text-white" href="/show">shows</a>
                <a class="nav-link text-white" href="/contact">Contact us</a>

              </div>
            </div>
            <button type="button" class="btn btn-light" data-toggle="modal"onClick={clr} >
              logout
            </button>
          </nav>
          :

          <nav class="navbar navbar-expand-lg navbar-light bg">
            <a class="navbar-brand text-white" href="#">
              <img src={vk} width="35" height="35" class="d-inline-block align-top" alt=""></img>
              <labell class='ml-2'>VK POLIS</labell>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav mx-auto">
                <a class="nav-link active text-white" href="/">Home <span class="sr-only">(current)</span></a>
                <a class="nav-link text-white" href="/show">shows</a>
                <a class="nav-link text-white" href="/contact">Contact us</a>

              </div>
            </div>
            <button type="button" class="btn btn-light" data-toggle="modal" data-target="#staticBackdrop">
              login
            </button>
          </nav>



      }



      {/* <!-- Button trigger modal --> */}

      <div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content modback">
            <div class="modal-header">
              <h5 class="modal-title text-white" id="staticBackdropLabel">LOGIN HERE!</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">

              <form className='modleft'>
                <div class="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" name='email' aria-describedby="emailHelp" onChange={inputChange}></input>
                  <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                  <label className='modleft'>Password</label>
                  <input type="password" class="form-control" id="exampleInputPassword1" name='password' onChange={inputChange}></input>
                </div>
                <label>Don't have account ? </label><a className='ml-3' href='/reg'>SIGHN UP</a>

              </form>

            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" onClick={submit}>login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
