const fs = require('fs');

// Make sure there is a "content" dir
exports.onPreBootstrap = ({ reporter }) => {
  const contentPath = 'content';

  if (!fs.existsSync(contentPath)) {
    reporter.info(`creating the ${contentPath} directory`);
    fs.mkdirSync(contentPath);
  }
};

// Create the base page
exports.createPages = async ({ actions, graphql, reporter }) => {
  const basePath = '/';
  actions.createPage({
    path: basePath,
    component: require.resolve('./src/templates/booklet.js'),
  });
};
