module.exports = {
  plugins: [
    {
      resolve: `gatsby-transformer-remark`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `content`,
      },
    },
  ],
};
