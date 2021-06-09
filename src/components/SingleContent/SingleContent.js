import { Badge } from '@material-ui/core';
import React from 'react';
import { img_300 } from '../../config/Config';
import { unavailable } from '../../config/Config';
import './SingleContent.css';

const SingleContent = ({ content }) => {
  return (
    <div className="media">
      <Badge
        badgeContent={content.vote_average}
        color={content.vote_average > 6 ? 'primary' : 'secondary'}
      />
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
