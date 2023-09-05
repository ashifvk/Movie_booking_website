import React from 'react'
import kgf from './images/kgf.jpg'
import jailer from './images/jailer.jpg'
import leo from './images/leo.jpg'
import theater from './images/theater.jpg'
import Nav from './Nav'
import './Home.css'
import Contact from './Contact'

export default function Home() {
  return (
    <div className='main'>
     <Nav/>
     <div class="container">
    <div class="row pt-3">
      <div class="col-lg-3">
        <div class="card  the">
          <img src={jailer} class="card-img jailer" alt="..."></img>
          <div class="layer">
       
        <a href="">BOOK</a>
          </div>
        </div>
      </div>
      <div class="col-lg-3">
        <div class="card bg-dark text-white the">
          <img src={kgf} class="card-img kgf" alt="..."></img>
          <div class="layer">
            <a href="">BOOK</a>
          </div>
        </div>
      </div>
      <div class="col-lg-3">
        <div class="card the">
          <img src={leo} class="card-img leo" alt="..." ></img>
          <div class="layer">
            <a href="">BOOK</a>
          </div>
        </div>
      </div>
      <div class="col-lg-3">
        <div class="card the">
          <img src={jailer} class="card-img jailer" alt="..."></img>
          <div class="layer">
            <a href="">BOOK</a>
          </div>
        </div>
      </div>
    </div>
  </div> 

  <div class="container">
 <h4 class="text-white mt-5">show time</h4>
 <br></br>
 <div class="row">
<div class="col">
 <div class="card mb-3 yy" style={{ maxWidth: '540px' }}>
  <div class="row no-gutters">
    <div class="col-md-4">
      <img src={theater} alt="..." class="card-img" height="200px"></img>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">SCREEN - 1</h5>
        <a href="#" class="btn btn-primary ">10:00 AM</a>
        <a href="#" class="btn btn-primary ml-2">4:00 PM</a>
        <a href="#" class="btn btn-primary last ml-2">10:00 PM</a>
        <p class="card-text mt-3"><small class="text-muted ">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
</div>
<div class="col">
<div class="card mb-3 yy mb-5" style={{ maxWidth: '540px' }}>
  <div class="row no-gutters">
    <div class="col-md-4">
      <img src={theater} alt="..." class="card-img" height="200px"></img>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">SCREEN -2</h5>
        <a href="#" class="btn btn-primary ml-2">12:00 PM</a>
        <a href="#" class="btn btn-primary ml-2">7:00 PM</a>
     
        <p class="card-text mt-3"><small class="text-muted ">Last updated 3 mins ago</small></p>
      </div>
    </div>
    </div>
  </div>
</div>
</div>
</div>

<Contact/>
    </div>
  )
}
