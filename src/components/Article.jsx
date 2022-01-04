import React from 'react';

const Article = ({ data }) => {
  return (
    <div className="article">
      <h1>{data.titre}</h1>
      {data.details.map((detail) => (
        <p>{detail.texte}</p>
      ))}
    </div>
  );
};

export default Article;
