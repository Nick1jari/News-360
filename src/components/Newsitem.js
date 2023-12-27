import React from 'react'
import "./dummydata.json"
import 'bootstrap/dist/css/bootstrap.min.css';
const NewsItem = (props) => {
    return (
        <div className="card" >
            <img src={props.imageurl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}...</p>
                    <p class="card-text"><small class="text-muted">Published by {props.author} on {new Date(props.time).toGMTString()}</small></p>
                    <a href={props.url} target="_blank" className="btn btn-dark" rel="noreferrer">Read More</a>
                </div>
        </div>
    );
}
export default NewsItem;
