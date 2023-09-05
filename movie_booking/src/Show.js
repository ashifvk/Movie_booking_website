import React, { useEffect, useState } from 'react'
import './Show.css'
import Nav from './Nav'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export default function Show() {
  const navigate = useNavigate()
  const [state, setState] = useState([])
  const role = localStorage.getItem('login')


  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/GetshowDetails').then((response) => {
      console.log(response);
      setState(response.data.data)
    }).catch((error) => { console.log(error); })
  }, []);

  const deleteshow = (val) => {
    const id = val
    console.log(id);
    axios.delete(`http://127.0.0.1:8000/api/deleteshow/${id}`).then((response) => {
      console.log(response);

    }).catch((error) => { console.log(error); })
    window.location.reload()
  }
  const editshow = (val) => {
    const id = val
    navigate(`/edit/${id}`)
  }



  return (

    <div className='main4'>
      <Nav />
      <div class="container">
        <div class="row">
          {state[0] ?
            <>
              {state?.map((value, key) => (
                <>
                  {role === "admin" ?
                    <div class="col-md-6">
                      <div class="card mt-3">
                        <div class="card-body">
                          <h3 class="card-title">{value.filmName}</h3>
                          <h6 class="card-text">starring :{value.star} , Director Name :{value.directorName}</h6>
                          <p class="card-text">Release Date : {value.releaseDate}</p>
                          <p class="card-text">Rating :{value.rating}</p>
                          <a class="btn btn-primary" onClick={() => { editshow(value.id) }}>Edit</a>
                          <a href="#" class="btn btn-primary ml-2" onClick={() => { deleteshow(value.id) }}>Delete</a>
                        </div>
                      </div>
                    </div>

                    :
                    <div class="col-md-6">
                      <div class="card mt-3">
                        <div class="card-body">
                          <h3 class="card-title">{value.filmName}</h3>
                          <h6 class="card-text">starring :{value.star} , Director Name :{value.directorName}</h6>
                          <p class="card-text">Release Date : {value.releaseDate}</p>
                          <p class="card-text">Rating :{value.rating}</p>

                        </div>
                      </div>
                    </div>

                  }

                </>
              ))}
            </>
            :

            <h3 className='text-center text-white mt-5'>No data found</h3>

          }

        </div>



      </div>
    </div>
  )
}
