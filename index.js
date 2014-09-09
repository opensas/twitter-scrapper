var searchTweets = require('./searchTweets');

var config = require('./config.js');
var fs = require('fs');

var parseParams = require('./parseParams');

var options = parseParams();

searchTweets(config, options.query, function(tweets) {
  console.log('total tweets: ' + tweets.length);
  fs.writeFileSync(options.output, JSON.stringify(tweets, null, 2));
  console.log('done');
})
