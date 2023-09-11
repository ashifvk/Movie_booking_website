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
        const data = new FormData()
        data.append('filmImage',state.filmImage)
        data.append('filmName',state.filmName)
        data.append('star',state.star)
        data.append('date',state.date)
        data.append('directorName',state.directorName)
        data.append('rating',state.rating)
        axios.post('http://127.0.0.1:8000/api/AddshowAPI',state).then((response)=>{
console.log(response);

navigate('/show')

        }).catch((error)=>{console.log(error);})
    }


    const imageGet = (event)=>{
         const {filmImage} = event.target.files[0]
         setState({...state,'filmImage':filmImage})
    }


  return (
    <>
    <Nav/>
    <div className='main3'>
    
      <div class="container addcontainer">
        <div class="row mt-3 addsec">
            <form action="">

            <div class="form-group">
                    <label>FilmImage</label>
                    <input type="file" class="form-control"  name="filmImage" onChange={imageGet}></input>
                </div>

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
