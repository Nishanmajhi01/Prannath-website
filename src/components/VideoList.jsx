import React, { useState, useEffect } from 'react';
import VideosItems from './VideosItems'; // Assuming you have a component to render each video item
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';


const API_KEY = 'AIzaSyC1UQBD0ewYNAGdp6hLh69DCxOrAqquWow';
const CHANNEL_ID = 'UC3_chj3f0DqcvE1gBNGrDEg';
const PLAYLIST_ID ='PL3Xqz7K0Gsh765vNqgstIA4MaV8I4DirA';

const VideoList = (props) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const updateVideos = async (pageToken = '') => {
    try {
      setLoading(true);
      const url = `https://www.googleapis.com/youtube/v3/playlistItems?key=${API_KEY}&part=snippet&playlistId=${PLAYLIST_ID}&maxResults=${props.pageSize}&pageToken=${pageToken}`;
      let data = await fetch(url);
      if (!data.ok) {
        throw new Error('Failed to fetch videos');
      }
      let parsedData = await data.json();
      if (!parsedData.items || parsedData.items.length === 0) {
        throw new Error('No videos found');
      }
      setVideos((prevVideos) => [...prevVideos, ...parsedData.items]);
      setTotalResults(parsedData.pageInfo.totalResults);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching videos:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    updateVideos();
  }, []);

  const fetchMoreData = async () => {
    try {
      const nextPageToken = videos.length > 0 ? videos[videos.length - 1].snippet.position + 1 : '';
      setPage(nextPageToken);
      updateVideos(nextPageToken);
    } catch (error) {
      console.error('Error fetching more videos:', error);
    }
  };

  return (
    <>
      <h2 className='flex items-center justify-center text-2xl font-extrabold'>Recent Videos</h2>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={videos.length}
        next={fetchMoreData}
        hasMore={videos.length !== totalResults}
        loader={<Spinner />}
      >
          <div className="row">
          {videos.map((video, index) => (
  <div className="col-md-4" key={`${video.id}-${index}`}>
    <VideosItems
      title={video.snippet.title ? video.snippet.title : ''}
      description={video.snippet.description ? video.snippet.description : ''}
      videoId={video.snippet.resourceId.videoId}
      thumbnail={video.snippet.thumbnails.default.url}
    />
  </div>
))}

          
        </div>
      </InfiniteScroll>
    </>
  );
};

VideoList.defaultProps = {
  pageSize: 8,
};

VideoList.propTypes = {
  pageSize: PropTypes.number,
};

export default VideoList;

