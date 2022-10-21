import React, { useState, useEffect } from "react";
import "./News.css";
import axios from "axios";

function News() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=b6c05f4cbdda4053b19ca82b9cbbcae4")
      .then((res) => {
        setNews(res.data.articles);
      }).catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(news);
  const openNews = (url) => {
    window.open(url);
  };

  return (
    <div className="news-parent-container">
      <div className="news-grid-area">
        {news && news.length > 0
          ? news.map((i) => {

              return (
                <div className="news-grid-item" onClick={() => openNews(i.url)}>
                  {i.urlToImage !== null ? <img src={i.urlToImage}className="news-grid-item-img"
                  /> : <img src="https://i.ibb.co/Q8kPHqF/No-image-available.png" className="news-grid-item-img"
                  />}
                  <p className="news-grid-item-title">{i.title}</p>
                  <p className="news-grid-item-description">{i.description}</p>
                  <hr></hr>
                  <div className="news-grid-item-bottom-div">
                    <p className="news-grid-item-source">Source: {i.source.name}</p>
                    {i.author !== null ? <p className="news-grid-item-author">
                      Author: {i.author}
                    </p> : null}
                  </div>
                </div>
              );
            })
          : ""}
      </div>
    </div>
  );
}
export default News;