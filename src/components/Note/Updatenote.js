import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import './note.css'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Updatenote = () => {
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });
    const [note, setnote] = useState({ title: params.title, description: params.description })
    const [isLoading, setLoading] = useState(false);
   
    let history = useNavigate('/')
    const onChange = (e) => {
        setnote(prevState => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            }
        })

    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (!note.title) {
            toast.error("Title should not be empty",{autoClose:500, position: toast.POSITION.TOP_CENTER})
        } else if (!note.description) {
            toast.error("Description should not be empty",{autoClose:500, position: toast.POSITION.TOP_CENTER}) 
        }
        else {
            const response = await fetch('http://localhost:5000/editNote/' + params.id, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': localStorage.getItem('token')
                },
                body: JSON.stringify({ title: note.title, description: note.description })
            });
            const json = await response.json()
            toast.success('Note updated Successfully!!',{autoClose:500, position: toast.POSITION.TOP_CENTER})
            history('/viewNotes')

        }
        setLoading(false);
    }
    return (
        <div className='center'>
            <form className='note' onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input type="text" onChange={onChange} name="title" value={note.title} placeholder="Title" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <textarea onChange={onChange} name="description" value={note.description} placeholder="Description" rows="12" cols="50"></textarea>
                </div>
                <br></br>
                <button type="submit" className="bs btn btn-dark">UpdateNote</button>
            </form>
        </div>);
}
export default Updatenote; 