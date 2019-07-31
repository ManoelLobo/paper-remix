import React from 'react';

import Page from '../components/page';
import Sheet from '../components/sheet';

import '../style.css';

const article = (num = 1) => ({
  headline: { main: `MAIN HEAD ${num}` },
  byline: { original: 'By: Line' },
  snippet: 'Snip here',
  web_url: 'http://www.com',
});

const articles = () => {
  const list = [];
  for (let i = 1; i <= 9; i++) {
    list.push(article(i));
  }

  return list;
};

const Booklet = () => {
  const articleList = articles();
  const pageArticles =
    articleList.length % 2 === 0
      ? articleList.slice(1, articleList.length - 1)
      : articleList.slice(1, articleList.length);
  const lastArticle = articleList[articleList.length - 1];

  console.log(articleList, pageArticles);

  return (
    <div id="booklet-container">
      <div className="booklet">
        <div className="first">
          <Page className="top" article={articleList[0]} />
        </div>
        <div className="sheets">
          {pageArticles.map((_article, idx) =>
            idx % 2 === 0 ? (
              <Sheet articles={pageArticles} key={idx} index={idx} />
            ) : null,
          )}
        </div>
        {articleList.length % 2 === 0 ? (
          <div className="last">
            <Page article={lastArticle} />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Booklet;
