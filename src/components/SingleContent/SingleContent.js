import React from 'react';
import { img_300 } from '../../config/Config';
import { unavailable } from '../../config/Config';
import './SingleContent.css';

const SingleContent = ({ content }) => {
  console.log(content);
  return (
    <div className="media">
      <img
        className="poster"
        src={
          content.poster_path
            ? `${img_300}/${content.poster_path}`
            : unavailable
        }
        alt={content.title || content.name}
      />
      <b className="title">{content.title || content.name}</b>
      <span className="subTitle">
        {content.media_type === 'tv' ? 'Tv Series' : 'Movies'}
        <span className="subTitle">{content.release_date}</span>
      </span>
    </div>
  );
};

export default SingleContent;
