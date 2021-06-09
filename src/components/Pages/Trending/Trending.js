import React, { useEffect, useState } from 'react';
import './Trending.css';
import axios from 'axios';
import SingleContent from '../../SingleContent/SingleContent';
require('dotenv').config();

const Trending = () => {
  const [content, setContent] = useState([]);

  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`
    );

    setContent(data.results);
    // console.log(data.results);
  };

  useEffect(() => {
    fetchTrending();
  }, []);

  return (
    <div>
      <span className="page-title">Trending</span>
      <div className="trending">
        {content &&
          content.map((content) => (
            <SingleContent key={content.id} content={content} />
          ))}
      </div>
    </div>
  );
};

export default Trending;
