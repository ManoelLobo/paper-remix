import React from 'react';

const Page = ({ article }) => (
  <div className="page">
    <div className="headline">
      <span>{article.headline.main}</span>
    </div>
    <div className="byline">{article.byline.original}</div>
    <div className="snippet">
      <span className="text">{article.snippet}</span>{' '}
      <span>
        <a href={article.web_url}>Read more</a>
      </span>
    </div>
  </div>
);

export default Page;
