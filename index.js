require('dotenv').config()

const tweetHelper = require('./tweetHelper')

const Twit = require('twit')
const T = new Twit({
    consumer_key:         process.env.CONSUMER_KEY,
    consumer_secret:      process.env.CONSUMER_SECRET,
    access_token:         process.env.ACCESS_TOKEN,
    access_token_secret:  process.env.ACCESS_TOKEN_SECRET,
})

function sendTweet() {

  let newStatus = tweetHelper.generate();

  T.post('statuses/update', { status: newStatus }, function(err, data, response) {
    console.log(data)
  })
}

sendTweet(); // initial tweet

setInterval(sendTweet, 7200000); // 2 hours
