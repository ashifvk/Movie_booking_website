import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './Edit.css'
import axios from 'axios';

export default function Edit() {
    const nav = useNavigate()

    const { showid } = useParams()
    console.log(showid);
    const [get, setGet] = useState({})
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/getsingleShow/${showid}`).then((response) => {
            console.log(response.data.data[0]);
            setGet(response.data.data[0])
        }).catch((error)=>{console.log(error);})
    }, []);
  
   

    const inputChange = (event) => {
        const { name, value } = event.target
        setGet({ ...get, [name]: value })
console.log(get);

    }
   
    const update = () => {
        const data = new FormData()
        data.append('image', get.image)
        data.append('filmName', get.filmName)
        data.append('star', get.star)
        data.append('date', get.date)
        data.append('directorName', get.directorName)
        data.append('rating', get.rating)
        console.log(data);
        axios.put(`http://127.0.0.1:8000/api/updateshow/${showid}`, data).then((response) => {
            console.log(response);
            nav('/show')
        }).catch((error)=>{console.log(error);})

    }
    const back = ()=>{
        nav('/show')
    }


  

    const imageGet = (event) => {
        const image = event.target.files[0]
        setGet({ ...get, 'image': image })
    }
    
    // console.log(get);
    return (
        <div className='main3'>

            <div class="container addcontainer">
                <div class="row mt-3 addsec">
                    <form action="">
                        
                    <div class="form-group">
                                <label>FilmImage</label>
                                <input type="file" class="form-control" name="image" onChange={imageGet} ></input>
                            </div>

                        <div class="form-group">
                            <label>FilmName</label>
                            <input type="text" class="form-control" placeholder="film name" name="filmName" defaultValue={get.filmName} onChange={inputChange}></input>
                        </div>
                        <div class="form-group">
                            <label>Staring</label>
                            <input type="text" class="form-control" placeholder="stars" name="star" defaultValue={get.star} onChange={inputChange}></input>
                        </div>
                        <div class="form-group">
                            <label>Release Date</label>
                            <input type="date" class="form-control" name='date' defaultValue={get.releaseDate} onChange={inputChange}></input>
                        </div>
                        <div class="form-row mt-2">
                            <div class="form-group col-md-6">
                                <label>Director</label>
                                <input type="text" class="form-control" placeholder="Director name" name="directorName" defaultValue={get.directorName} onChange={inputChange}></input>
                            </div>
                            <div class="col-md-6">
                                <label>Rating</label>
                                <select class="custom-select" required name="rating" onChange={inputChange} defaultValue={get.rating}>
                                    <option selected disabled value="">Choose...</option>
                                    <option>*</option>
                                    <option>**</option>
                                    <option>***</option>
                                    <option>****</option>
                                    <option>*****</option>
                                </select>
                            </div>
                        </div>

                        <input type="button" value='Back' class="b" onClick={back}></input>
                        <input type="button" value='submit' class="b ml-2" onClick={update}></input>
                    </form>
                </div>
            </div>
        </div>
    )
}
