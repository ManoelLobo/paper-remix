import React, { useState, useEffect } from 'react';
import Page from './page';

const Sheet = ({ index, articles }) => {
  const [flip, setFlip] = useState(false);
  const [flippedIndex, setFlippedIndex] = useState(999 - index);
  const front = articles[index];
  const back = articles[index + 1];

  useEffect(() => {
    if (flip) {
      setTimeout(() => {
        setFlippedIndex(index + 1);
      }, 600);
    } else {
      setFlippedIndex(999 - index);
    }
  }, [flip]);

  return (
    <div className="page">
      <div
        className={`flip-container${flip ? ' flip' : ''}`}
        style={{ zIndex: flippedIndex }}
      >
        <div className="flipper">
          <div
            className="front"
            onClick={() => {
              setFlip(!flip);
            }}
          >
            <Page className="bottom" article={front} />
          </div>
          <div
            className="back"
            onClick={() => {
              setFlip(!flip);
            }}
          >
            <Page className="top" article={back} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sheet;
