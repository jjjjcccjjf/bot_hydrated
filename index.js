require('dotenv').config()

const Twit = require('twit')
const T = new Twit({
    consumer_key:         process.env.CONSUMER_KEY,
    consumer_secret:      process.env.CONSUMER_SECRET,
    access_token:         process.env.ACCESS_TOKEN,
    access_token_secret:  process.env.ACCESS_TOKEN_SECRET,
})

T.post('statuses/update', { status: 'Running! ' + Date.now() }, function(err, data, response) {
  console.log(data)
})

function sendTweet() {
  T.post('statuses/update', { status: 'Stay hydrated y\'all, drink some water! 💧 ' + Date.now() }, function(err, data, response) {
    console.log(data)
  })
}

setInterval(sendTweet, 3*60*1000);
