import React, { useEffect, useState } from 'react';
import axios from 'axios';
require('dotenv').config();

const Trending = () => {
  const [content, setContent] = useState([]);

  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`
    );

    setContent(data.results);
    console.log(data);
  };

  useEffect(() => {
    fetchTrending();
  }, []);

  return (
    <div>
      <span className="page-title">Trending</span>
    </div>
  );
};

export default Trending;
