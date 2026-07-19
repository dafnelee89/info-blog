const fs = require('fs');
const DIST_PATH = '_sass/dist';

fs.rm(DIST_PATH, { recursive: true, force: true }, (err) => {
  if (err) {
    throw err;
  }

  fs.mkdirSync(DIST_PATH, { recursive: true });
});

module.exports = {
  content: [
    '_includes/**/*.html',
    '_layouts/**/*.html',
    '_tabs/**/*.md',
    '_posts/**/*.md',
    '_drafts/**/*.md'
  ],
  css: ['node_modules/bootstrap/dist/css/bootstrap.min.css'],
  keyframes: true,
  variables: true,
  output: `${DIST_PATH}/bootstrap.css`,
  safelist: {
    standard: [/^collaps/, /^w-/, 'shadow', 'border', 'kbd'],
    greedy: [/^col-/, /tooltip/]
  }
};
