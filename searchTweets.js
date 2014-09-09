var Twit = require('twit')

var searchTweets = function(config, query, callback) {

  var twitterClient = new Twit(config);

  console.log('about to fetch from search/tweets with query ' + query);

  var tweets = [];

  var delay = 200; // wait 200 milliseconds

  // recursive function
  var fetchPage = function fetchPage(maxId, callback, count) {

    count = count || 30;

    var params = { q: query, count: count.toString(), include_entities: 1 };

    if (maxId) params.max_id = maxId;

    twitterClient.get('search/tweets', params, function(err, data, response) {

      if (err) {
        console.log('error fetching search/tweets with params', params);
        console.log(err);
        process.exit(1);
      }

      tweets = tweets.concat(data.statuses);
      console.log('fetched ' + data.statuses.length + ' tweets, total tweets: ' + tweets.length);

      // no more data
      if (data.statuses.length === 0 || !data.search_metadata.next_results ) {
        callback(tweets);
        return;
      }

      var next = data.search_metadata.next_results;
      var re = next.match(/max_id=(\d+)/);

      if (!re) {
        callback(tweets);
        return;
      }

      maxId = re[1];

      // recurive call
      setTimeout(function() {
        fetchPage(maxId, callback);
      }, delay);

    });

  }

  // initial call
  fetchPage(undefined, callback);

}

module.exports = searchTweets;
