import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import './signup.css'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = (props) => {
    const [credentials, setcredentials] = useState({ name: "", email: "", password: "" });
    const [isLoading, setLoading] = useState(false);
    let history = useNavigate('/');
    const onChange = (e) => {
        setcredentials(prevState => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            }
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        if(!credentials.name) {
            toast.error("Name should not be empty",{autoClose:500, position: toast.POSITION.TOP_CENTER})
        } else if (!credentials.email) {
            toast.error("Email should not be empty",{autoClose:500, position: toast.POSITION.TOP_CENTER})
        } else if (!credentials.password) {
            toast.error("Password should not be empty",{autoClose:500, position: toast.POSITION.TOP_CENTER})
        } else {
            const response = await fetch('http://localhost:5000/registerUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',

                },
                body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password })
            });
            const json = await response.json();
            console.log(json)
            if (json === false) {
                toast.error("Invalid credentials!!",{autoClose:500, position: toast.POSITION.TOP_CENTER})
            } else {
                localStorage.setItem('token', json.token)
                toast.success('SignUp Successfull!!',{autoClose:500, position: toast.POSITION.TOP_CENTER})
                history('/')
            }
        }
        setLoading(false);
    }
    return (
        <div className='center'>
            <form className='signup' onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Name</label>
                    <input type="name" name="name" value={credentials.name} onChange={onChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email</label>
                    <input type="email" name="email" value={credentials.email} onChange={onChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" name="password" value={credentials.password} onChange={onChange} className="form-control" id="exampleInputPassword1" />
                </div>
                <a href='/login'>Already have an account?</a>
                <br></br>
                <button type="submit" className="bs btn btn-dark">SignUp</button>
            </form>
        </div>);
}

export default Signup;