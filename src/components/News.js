import React, { useState, useEffect } from 'react'
import NewsItem from './Newsitem';
import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from './Spinner';
// require('dotenv').config();

const News = (props) => {
    const initialarticles = [];
    const [articles, setArticles] = useState(initialarticles)
    const [count, setCount] = useState(12);
    const [loading, setLoading] = useState(false)
    const handleClick=()=>{
        setCount(count+8)
    }
    const func = async () => {
        setLoading(true)
        const url = "https://newsapi.org/v2/top-headlines?country=" + props.country + "&category=" + props.category + "&apiKey="+process.env.REACT_APP_KEY;
        const res = await fetch(url)
        const json = await res.json()
        setArticles(json.articles)
        setLoading(false)
    }
    useEffect(() => {
        func()

    }, [])
    return (
        <div className='container my-3'>
            <br></br>
            <br></br>
            <br></br>
            {loading && <Spinner />}
            <div className='row g-3'>
                {articles.slice(0, count).map((article) => {
                    return (<div className='col-12 col-md-6 col-lg-3 '>
                        <NewsItem time={article.publishedAt ? article.publishedAt : "NA"} author={article.author ? article.author : "unknown"} url={article.url ? article.url : ""} imageurl={article.urlToImage ? article.urlToImage : ""} title={article.title ? article.title : ""} description={article.description ? article.description.slice(0, 88) : ""} />
                    </div>
                    )
                })
                }
            </div>
            <br></br>
            <div class="text-center">
                <button type="button" onClick={handleClick} class="btn btn-success">ViewMore</button>
            </div>
        </div>
    );
}

export default News;

//KEY="726fa3dd4a6c48f7a08a6086139dcca3"