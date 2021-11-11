const ghpages = require('gh-pages');

ghpages.publish(
  '.',
  {
    src: ['*.html', '*.css'],
  },
  (result) => {
    console.log(result);
    console.log('Done');
  }
);
