import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from "react-router-dom"
import { AiFillDelete } from 'react-icons/ai';
import { GrDocumentUpdate } from 'react-icons/gr';
const Carditem = (props) => {
    let history=useNavigate('/')
    return (
        <div className="col-md-3">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{props.note.title}</h5>
                    <p className="card-text">{props.note.description}</p>
                    <AiFillDelete onClick={()=>{props.deleteNote(props.note._id)}}/>&nbsp;&nbsp;
                    <GrDocumentUpdate onClick={()=>{history('/updatenote?id='+props.note._id+'&title='+props.note.title+'&description='+props.note.description)}}/>
                    <p class="card-text"><small class="text-muted">Created on {props.note.createdAt.slice(0,10)}</small></p>
                </div>
            </div>
            <br></br>
        </div>
    );
}
export default Carditem;
