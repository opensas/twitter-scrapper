var searchTweets = require('./searchTweets');

var config = require('./config.js');
var fs = require('fs');

var Twit = require('twit')

var T = new Twit(config);

var parseParams = require('./parseParams');

var options = parseParams();

searchTweets(T, options.query, function(tweets) {
  console.log('total tweets: ' + tweets.length);
  fs.writeFileSync(options.output, JSON.stringify(tweets, null, 2));
  console.log('done');
})
