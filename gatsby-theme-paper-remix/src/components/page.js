import React from 'react';

const Page = ({ content }) => (
  <div className="page" dangerouslySetInnerHTML={{ __html: content }} />
);

export default Page;
