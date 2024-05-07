import React, { useEffect, useState } from "react";
import NewsItems from "./VideosItems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    // document.title = `${capitalizeFirstLetter(props.category)} - News`;
  
    const capitalizeFirstLetter = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }};


    const updateNews = async () => {
        props.setProgress(10);
        const url = `https://www.googleapis.com/youtube/v3/playlistItems?key=${API_KEY}&part=snippet&playlistId=${PLAYLIST_ID}&maxResults=50&pageToken=${pageToken}`;
        setLoading(true);
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json();
        console.log(parsedData);
        props.setProgress(50);
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
    
        props.setProgress(100);
      };
    
      useEffect(() => {
        updateNews();
      }, []);
    
      const fetchMoreData = async () => {
        setPage(page + 1);
        const url = `https://www.googleapis.com/youtube/v3/playlistItems?key=${API_KEY}&part=snippet&playlistId=${PLAYLIST_ID}&maxResults=50&pageToken=${pageToken}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
        console.log(parsedData);
      };

function Videos() {
  return (
    <>
    <h2 className="text-center">
        United State - Top {capitalizeFirstLetter(props.category)}
        Headlines
      </h2>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItems
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
      
    </>
  )
}
News.defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };
  News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  


export default Videos
