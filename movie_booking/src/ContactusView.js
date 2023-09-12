import React, { useEffect, useState } from 'react'
import './ContactusView.css'
import Nav from './Nav'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';

export default function ContactusView() {
    const set = localStorage.getItem('reply')

    const [state, setState] = useState([])
    const [input, setInput] = useState({})
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/GetContactusDetails').then((response) => {
            console.log(response);
            setState(response.data.data)
        }).catch((error) => { console.log(error); })
    }, []);

    const reply = (val) => {
        const id = val
        console.log(id)
        axios.get(`http://127.0.0.1:8000/api/getsinglecontactView/${id}`).then((response) => {
            console.log(response.data.data[0]);
            setInput(response.data.data[0])
        })

    }
    const send = () => {
        axios.post('http://127.0.0.1:8000/api/replyMessage', input).then((response) => { console.log(response.data); })
        console.log(input);
        toast.success('success', {
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        localStorage.setItem('reply',('replied'))
      
        setInterval(fun, 900)
        function fun() {
            window.location.reload()
        }

    }
    const inputChange = (event) => {
        const { name, value } = event.target
        setInput({ ...input, [name]: value })
    }


    return (
        <div className='main4'>
            <Nav />
            <ToastContainer />
            <div class="container">
                <div class="row">
                    {state[0] ?
                        <>
                            {state?.map((value, key) => (

                                <div class="col-md-6">
                                    <div class="card mt-3">
                                        <div class="card-body">
                                            <h3 class="card-title">{value.fname} {value.lname}</h3>
                                            <h6 class="card-text">Email :{value.email}</h6>
                                            <p class="card-text dai2">Contact :{value.number}</p>
                                            <p class="card-text">Message : {value.message}</p>

                                            <a class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo" onClick={() => { reply(value.id) }}>Reply</a>
                                            {set == "replied" ?
                                                <a class="btn btn-primary">Replied</a>

                                                :
                                                <none />
                                            }
                                        </div>
                                    </div>
                                </div>

                            ))}
                        </>
                        :

                        <h3 className='text-center text-white mt-5'>No data found</h3>

                    }

                </div>



            </div>


            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">New message</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="form-group">
                                    <label for="recipient-name" class="col-form-label">Name:</label>
                                    <input type="text" class="form-control" id="recipient-name" name='replyname' value={input.fname}></input>
                                </div>
                                <div class="form-group">
                                    <label for="recipient-name" class="col-form-label">Recipient:</label>
                                    <input type="text" class="form-control" id="recipient-name" name='email' value={input.email}></input>
                                </div>
                                <div class="form-group">
                                    <label for="message-text" class="col-form-label" >Message:</label>
                                    <textarea class="form-control" id="message-text" name='Reply' onChange={inputChange}></textarea>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" onClick={send}>Send message</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}



