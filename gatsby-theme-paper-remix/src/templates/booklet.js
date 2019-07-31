import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Booklet from '../components/booklet';

const BookletTemplate = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: fileAbsolutePath }) {
        nodes {
          html
        }
      }
    }
  `);

  const pages = data.allMarkdownRemark.nodes;

  return <Booklet pages={pages} />;
};

export default BookletTemplate;
