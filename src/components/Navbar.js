import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css'
import { useNavigate } from "react-router-dom"
const Navbar = () => {
    const initialquery = ""
    const [query, setquery] = useState(initialquery)
    let history = useNavigate('/')
    const handleClick2 = () => {
        if (query === initialquery) {
            setquery("all")
        }
        history("/everything?q=" + query)
    }
    const handleClick = () => {
        localStorage.removeItem('token', null)
        history('/')
    }
    const onChange = (e) => { setquery(e.target.value) }
    return (

        <div>
            <nav className="navbar fixed-top navbar-expand-lg bg-success">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/everything">News360</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"><a className='nav-link active' href="/General">General</a></li>
                            <li className="nav-item"><a className='nav-link active' href="/Business">Business</a></li>
                            <li className="nav-item"><a className='nav-link active' href="/Entertainment">Entertainment</a></li>
                            <li className="nav-item"><a className='nav-link active' href="/Technology">Technology</a></li>
                            <li className="nav-item"><a className='nav-link active' href="/Health">Health</a></li>
                            <li className="nav-item"><a className='nav-link active' href="/Science">Science</a></li>
                            <li className="nav-item"><a className='nav-link active' href="/Sports">Sports</a></li>
                            &nbsp;
                            <form class="d-flex" role="search">
                                <input name="q" onChange={onChange} value={query} class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button onClick={handleClick2} class="btn btn-outline-dark" type="submit">Search</button>
                            </form>
                            {!localStorage.getItem("token") ? (
                                <>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                    <a href="/login"><button type="button" id="id" class="btn btn-dark  ">Login</button></a>
                                </>
                            ) : (
                                <>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                    <a href="/createNote"><button className="btn btn-outline-dark " type="submit">AddNote</button></a>
                                    &nbsp;&nbsp;&nbsp;
                                    <a href="/viewNotes"><button className="btn btn-outline-dark" type="submit" >ViewNotes</button></a>
                                    &nbsp;&nbsp;&nbsp;
                                    <button className="btn btn-outline-dark" type="submit" onClick={() => { handleClick() }}>Logout</button>

                                </>
                            )
                            }

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;

