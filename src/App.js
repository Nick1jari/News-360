import "./App.css"
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login"
import Signup from "./components/Signup/Signup"
import News from "./components/News"
import Navbar from "./components/Navbar"
import Everything from "./components/Everything"
import Card from "./components/Note/Card";
import Note from "./components/Note/Note"
import Updatenote from "./components/Note/Updatenote"
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
    return (
        <>
            <ToastContainer />
            <div class="app">
                <Router>
                    <Navbar />
                    <Routes>
                        <Route exact path="/" element={<Everything />} />
                        <Route path="/General" element={<News country="in" category="general" />} />
                        <Route path="/Everything" element={<Everything />} />
                        <Route path="/Business" element={<News country="in" category="business" />} />
                        <Route path="/Entertainment" element={<News country="in" category="entertainment" />} />
                        <Route path="/Technology" element={<News country="in" category="technology" />} />
                        <Route path="/Health" element={<News country="in" category="health" />} />
                        <Route path="/Science" element={<News country="in" category="science" />} />
                        <Route path="/Sports" element={<News country="in" category="sports" />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/login" element={<Login/>} />
                        <Route path="/createNote" element={<Note />} />
                        <Route path="/viewNotes" element={<Card />} />
                        <Route path="/updatenote" element={<Updatenote />} />
                    </Routes>
                </Router>
            </div>
        </>

    );
}

export default App;
