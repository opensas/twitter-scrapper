Twitter-scrapper
================

Sample node.js script to search for tweets using twitter api.

Before using this project you'll have to create the file config.js.

- Copy config.template.js as config.js

- Register at twitter

- Go to the developer's site: https://apps.twitter.com/

- Create a new application: https://apps.twitter.com/app/new

- Complete all required fields and check the 'I agree' checkbox

- Go to API keys tab and click on 'Create my access token'

- Wait a few seconds and refresh the page until your access token appears

- Complete config.js like this:

```javascript
module.exports = {
  "consumer_key": {API key},
  "consumer_secret": {API secret},
  "access_token": {Access token},
  "access_token_secret": {Access token secret}
}
```

Now you can run the script like this

```
node index.js "node rocks" node_rocks_tweets.json
```

To get some help, run:

```
node index.js -h
```





