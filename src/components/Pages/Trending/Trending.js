import React, { useEffect, useState } from 'react';
import './Trending.css';
import axios from 'axios';
import SingleContent from '../../SingleContent/SingleContent';
import CustomPagination from '../../Pagination/CustomPagination';

require('dotenv').config();

const Trending = () => {
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);

  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    );

    setContent(data.results);
    // console.log(data.results);
  };

  useEffect(() => {
    fetchTrending();
  }, [page]);

  return (
    <div>
      <span className="page-title">Trending</span>
      <div className="trending">
        {content &&
          content.map((content) => (
            <SingleContent key={content.id} content={content} />
          ))}
      </div>
      <CustomPagination setPage={setPage} />
    </div>
  );
};

export default Trending;
