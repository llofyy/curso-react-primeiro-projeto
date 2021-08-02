import React from 'react';
import Types from 'prop-types';

import './styles.css';

export default function PostCard({ title, body, cover }) {
  return (
    <div className="post">
      <img src={cover} alt={title} />
      <div className="post-content">
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    </div>
  );
}

PostCard.propTypes = {
  title: Types.string.isRequired,
  body: Types.string.isRequired,
  cover: Types.string.isRequired,
};
