import React from 'react';

import Page from './page';
import Sheet from './sheet';

import '../style.css';

const Booklet = ({ pages }) => {
  const centerPages =
    pages.length % 2 === 0
      ? pages.slice(1, pages.length - 1)
      : pages.slice(1, pages.length);
  const lastPage = pages[pages.length - 1].html;
  console.log(lastPage);

  return (
    <div id="booklet-container">
      <div className="booklet">
        <div className="first">
          <Page className="top" content={pages[0].html} />
        </div>
        <div className="sheets">
          {centerPages.map((_page, idx) =>
            idx % 2 === 0 ? (
              <Sheet pages={centerPages} key={idx} index={idx} />
            ) : null,
          )}
        </div>
        {pages.length % 2 === 0 ? (
          <div className="last">
            <Page content={lastPage.html} />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Booklet;
