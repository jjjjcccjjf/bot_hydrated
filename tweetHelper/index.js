'use strict'

exports.generate = function () {
  // const fixedStrings = ['Stay hydrated y\'all, drink some water! 💧']
  // Hey mate! Don't forget to drink some water, Okay?
  return g() + " " + a() + t() + " " + b() + t() + " " + s() + q();
}

/**
* return a random greeting
* from a list of words
* @return {[type]} [description]
*/
function g() {
  const arr = [
    'Hm',
    'Hmmm',
    'Hmph',
    'Hola',
    'Hallo',
    'Guten Tag',
    'Namaste',
    'Ohayou',
    'Konnichiwa',
    'Annyeonghaseyo',
    'Hello',
    'Hewwow',
    'Hi',
    'Hi there',
    'Yo',
    'Oi',
    'Yooooo',
    'Hey',
    'Sup',
    'Ayo',
    'Heeeey',
    'Psst',
    '👋',
    'Aye',
    'Hooo',
    'Hoy',
    'Greetings',
    'Beep bop',
    'Blip bloop',
    'Jello',
    'Eyyyy',
    'Ey',
    'Psssssst'
  ]

  return arr[Math.floor(Math.random() * arr.length)];

}

/**
* return a random addressee
* from a list of words
* @return {[type]} [description]
*/
function a() {
  const arr = [
    'friend',
    'mate',
    'human',
    'pal',
    'bro',
    'sis',
    'sistah',
    'chum',
    'amigo',
    'buddy',
    'bruddah',
    'cuz',
    'comrade',
    'sidekick',
    'brother',
    'good buddy',
    'awesome human',
    'bruh',
    'brah',
    'your majesty',
    'your highness',
    'milord',
    'lordship',
    'his excellence',
    'her excellence',
    'teacher',
    'The Chosen One',
    'your excellency',
    'Senpai',
    'Sensei',
    'Hero',
  ]

  return arr[Math.floor(Math.random() * arr.length)];
}

/**
* return a random tweet body
* from a list of words
* @return {[type]} [description]
*/
function b() {
  const arr = [
    'Don\'t forget to drink some water',
    'Please don\'t forget to drink some water',
    'Drink some water',
    'I beseech thee to hydrate thyself',
    'When was the last time you drank water? Drink up',
    'Water',
    'Water time',
    'Water timeeeee',
    'Hmmm... It would be nice if you would drink some water right now',
    'Would you be kind enough to drink some water right now',
    'Hydrate yourself ' + a(),
    'Drink or eat something juicy',
    'Drink water',
    'When will you drink water',
    'Water drinking time',
    'Time to drink',
    'It is that time of the day. Drink up',
    'Fill that belly with some water',
    'Hydrating time',
    'Hydrate please',
    'Hydrate plz',
    'Hydrate pls',
    'Please hydrate right now',
    'TIME. FOR. SOME. LIQUID',
    'Hohoho~ Looks like you need some refreshments',
    'Care to drink',
    'Drink, drink, drink',
    'Gulp some water',
    'Time for water',
    'Drink some liquid',
    'Drink something refreshing',
    'Drink something',
    'Wateeeeer',
    'H20 ' + a(),
    'This is a good time to drink water',
    'Plants need water, so do you',
    'Be a good ' + a() + ' and drink some water',
    'You\'re getting dehydrated now',
    'Water up',
    'Drink something',
    'Keep yourself hydrated',
    'Drink water again',
    'IT\'S TIME TO D-D-D-DRINK WATER',
    'Chug some liquid',
    'This is the best time to drink water',
    'This is the best place to drink water',
    'This is the best time and place to drink water',
    'Not the worst timing to drink water right, ' + a()
  ]

  return arr[Math.floor(Math.random() * arr.length)];
}

/**
* return a random suffix
* from a list of words
* @return {[type]} [description]
*/
function s() {
  const arr = [
    'Okay',
    'Alright',
    'Is that clear',
    'Do you understand',
    'OK',
    'Sounds good',
    'Hmmm',
    'Hmph',
    'Understood',
    'We clear',
    'We clear on that',
    'We good on that',
    'We good',
    'See ya',
    'That good',
    'That is an order',
    'Aight',
    'Aye',
    'Bruh',
    'Orayt',
    'Hahaha',
    'Okey',
    'Hihihi',
    'Teehee',
    'Hohoho',
  ]

  return arr[Math.floor(Math.random() * arr.length)];
}

/**
* return a random verbal tic
* from a list of words
* @return {[type]} [description]
*/
function t() {
  const arr = [
    '!',
    '！',
    '~',
    '〜',
    '.',
    '。',
  ]

  return arr[Math.floor(Math.random() * arr.length)];
}

/**
 * return a random question mark
 * from a list of words
 * @return {[type]} [description]
 */
function q() {
  const arr = [
    "?",
    "？",
    "!",
    '！',
  ]

  return arr[Math.floor(Math.random() * arr.length)];
}
