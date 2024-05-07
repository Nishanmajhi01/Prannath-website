import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import VideosItems from './VideosItems';
import InfiniteScroll from "react-infinite-scroll-component"; 


export default function RecentVideos(props) {
    const [videos, setVideos] = useState([]);
    const [totalResults, setTotalResults] = useState(0);

    const API = "AIzaSyC1UQBD0ewYNAGdp6hLh69DCxOrAqquWow"; // Replace with your actual API key
    const ChannelId = "UC3_chj3f0DqcvE1gBNGrDEg"; // Replace with your actual channel ID

    const updateVideos = async () => {
        const url = `https://www.googleapis.com/youtube/v3/search?key=${API}&part=snippet&type=video&channelId=${ChannelId}`;
        try {
            let data = await fetch(url);
            let parsedData = await data.json();
            console.log(parsedData);
            setVideos(parsedData.items)
            setTotalResults(parsedData.pageInfo.totalResults);
        } catch (error) {
            console.error('Error fetching videos:', error);
        }
    };

    useEffect(() => {
        updateVideos();
    }, []); // Add props to dependency array

    const fetchMoreData = async () => {
        const url = `https://www.googleapis.com/youtube/v3/search?key=${API}&part=snippet&type=video&channelId=${ChannelId}`;
        try {
            let data = await fetch(url);
            let parsedData = await data.json();
            setVideos(item.concat(parsedData.items))
            setTotalResults(parsedData.pageInfo.totalResults);
            console.log(parsedData);
        } catch (error) {
            console.error('Error fetching more videos:', error);
        }
    };

    return (
        <>
            <h2>Video List</h2>
      <div>
        {videos.map(video => (
          <VideosItems
            key={video.id.videoId}
            title={video.snippet.title}
            description={video.snippet.description}
            videoId={video.id.videoId}
            thumbnail={video.snippet.thumbnails.default.url}
          />
        ))}
      </div>
        </>
    );
}

RecentVideos.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    videoId: PropTypes.string, 
    thumbnail: PropTypes.string,
};
