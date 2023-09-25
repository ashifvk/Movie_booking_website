import React, { useEffect, useState } from 'react'
import './Show.css'
import Nav from './Nav'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export default function Show() {
  const navigate = useNavigate()
  const [data, setData] = useState()

  const [state, setState] = useState([])
  const role = localStorage.getItem('login')


  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/GetshowDetails').then((response) => {
      console.log(response.data.data);
      setState(response.data.data)
    }).catch((error) => { console.log(error); })
  }, [data]);

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
  const input = (event) => {
    // const searchname = event.target.value
    // setData(searchname)
    const { name, value } = event.target
    setData({ ...data, [name]: value })

  }

  const search = () => {

    // axios.get(`http://127.0.0.1:8000/api/SearchMovie/${data}`).then((response) => {
    //   console.log(response.data.data);
    //   setState(response.data.data)
    // }).catch((error) => { console.log(error); })
    axios.post('', data).then((response) => {
      console.log(response.data.data);
      setState(response.data.data)
    }).catch((error) => { console.log(error); })
  }


  return (

    <div className='main4'>
      <Nav />
      <div class="container">
        <input class="form-control mr-sm-2 showsearch" type="search" placeholder="Search" aria-label="Search" onChange={input}></input>
        <button class="btn btn-outline-light my-2 my-sm-0" onClick={search} >Search</button>
        <div class="row">
          {state[0] ?
            <>
              {state?.map((value, key) => (
                <>
                  {role == 'admin' ?
                    <div class="col-lg-6">
                      <div class="card mb-3 yy" style={{ maxWidth: '540px' }}>
                        <div class="row no-gutters">
                          <div class="col-md-4">
                            <img src={`login/${value.image}`} alt="..." class="card-img" height="200px"></img>
                          </div>
                          <div class="col-md-8">
                            <div class="card-body">
                              <h5 class="card-title">{value.filmName}</h5>
                              <h6 class="card-text">starring :{value.star} , Director Name :{value.directorName}</h6>
                              <p class="card-text">Release Date : {value.releaseDate}</p>
                              <p class="card-text">Rating :{value.rating}</p>
                              <a class="btn btn-primary" onClick={() => { editshow(value.id) }}>Edit</a>
                              <a href="#" class="btn btn-primary ml-2" onClick={() => { deleteshow(value.id) }}>Delete</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    :
                    <div class="col-lg-6">
                      <div class="card mb-3 yy" style={{ maxWidth: '540px' }}>
                        <div class="row no-gutters">
                          <div class="col-md-4">
                            <img src={`login/${value.image}`} alt="..." class="card-img" height="200px"></img>
                          </div>
                          <div class="col-md-8">
                            <div class="card-body">
                              <h5 class="card-title">{value.filmName}</h5>
                              <h6 class="card-text">starring :{value.star} , Director Name :{value.directorName}</h6>
                              <p class="card-text">Release Date : {value.releaseDate}</p>
                              <p class="card-text">Rating :{value.rating}</p>
                            </div>
                          </div>
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
