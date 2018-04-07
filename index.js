require('dotenv').config()

const tweetHelper = require('./tweetHelper')

const Twit = require(‘twit’);
const TwitterBot = require(‘node-twitterbot’).TwitterBot;

const Bot = new TwitterBot({
 consumer_key: process.env.CONSUMER_KEY,
 consumer_secret: process.env.CONSUMER_SECRET,
 access_token: process.env.ACCESS_TOKEN,
 access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

Bot.tweet(tweetHelper.generate());
