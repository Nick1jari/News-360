import React, { useState, useEffect } from 'react'
import NewsItem from './Newsitem';
import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from './Spinner';


const Everything = (props) => {
    const initialarticles = [];
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });
    let query;
    query = params.q;
    console.log(params)
    const [count, setCount] = useState(8);
    const [articles, setArticles] = useState(initialarticles)
    const [loading, setLoading] = useState(true)
    
    // const [page, setPage] = useState(1)
    const handleClick=()=>{
        setCount(count+8)
    }
    const func = async () => {
        setLoading(true)
        const url = "https://newsapi.org/v2/everything?q=" + query + "&apiKey="+process.env.REACT_APP_KEY;
        const res = await fetch(url)
        const json = await res.json()
        console.log(process.env.KEY)
        setArticles(json.articles)
        setLoading(false)
    }

    useEffect(() => {
        func()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <>
            <br></br>
            {loading && <Spinner />}

            <div className='container my-3'>
                <br></br>
                <br></br>
                <br></br>

                <div className='row'>
                    {articles.slice(0, count).map((article) => {
                        return (<div className='col-md-3'>
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


        </>
    );
}

export default Everything;