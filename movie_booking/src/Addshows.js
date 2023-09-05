import React, { useState } from 'react'
import './Addshows.css'
import Nav from './Nav'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export default function Addshows() {
    const navigate =useNavigate()

    const [state,setState] = useState([])

    const inputChange =(event)=>{
        const {name,value} = event.target
        setState({...state,[name]:value})
    }
    const submit = ()=>{
        console.log(state);
        axios.post('http://127.0.0.1:8000/api/AddshowAPI',state).then((response)=>{
console.log(response);

navigate('/show')

        })
    }
  return (
    <>
    <Nav/>
    <div className='main3'>
    
      <div class="container addcontainer">
        <div class="row mt-3 addsec">
            <form action="">

                <div class="form-group">
                    <label>FilmName</label>
                    <input type="text" class="form-control" placeholder="film name" name="filmName" onChange={inputChange}></input>
                </div>
                <div class="form-group">
                    <label>Staring</label>
                    <input type="text" class="form-control" placeholder="stars" name="star" onChange={inputChange}></input>
                </div>
                <div class="form-group">
                    <label>Release Date</label>
                    <input type="date" class="form-control" name='date' onChange={inputChange}></input>
                </div>
                <div class="form-row mt-2">
                    <div class="form-group col-md-6">
                        <label>Director</label>
                        <input type="text" class="form-control" placeholder="Director name" name="directorName" onChange={inputChange}></input>
                    </div>
                    <div class="col-md-6">
                        <label>Rating</label>
                        <select class="custom-select"  required name="rating" onChange={inputChange}>
                            <option selected disabled value="">Choose...</option>
                            <option>*</option>
                            <option>**</option>
                            <option>***</option>
                            <option>****</option>
                            <option>*****</option>
                        </select>
                    </div>
                </div>


                <input type="button" value='submit' class="b" onClick={submit}></input>
            </form>
        </div>
    </div>
    </div>
    </>
  )
}
