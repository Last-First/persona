const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

'use strict';
const {dialogflow} = require('actions-on-google');

const app = dialogflow({debug: true});

app.intent('one - custom', (conv, {first, second, third}) => {
  conv.close(`Thank you! ${first} is how the people see or observe you, ${second} is how you think people see or observe you, and ${third} is how and what you actually are` + 
  ` I hope you like it, Just type okay to retake the test.`);
});

app.intent('three - custom', (conv, {dog, cat, rat, coffee, sea}) => {
  conv.close(`Alright, your input of dog signifies your own personality which is ${dog} and a cat defines your partner: ${cat}, your definition of a rat signifies the personality of your enemies: ${rat}, while your definition of coffee is how you percieve sex: ${coffee}, lastly the sea signifies your life which is ${sea}! ` +
    ` I hope you like it, Just type okay to retake the test..`);
});

app.intent('four - custom', (conv, {yellow, orange, red, white, green}) => {
  conv.close(`Thank you! ${yellow} is someone you will never forget, ${orange} is someone you consider your true friend, ${red} is someone that you really love, ${white} is your twin soul and ${green} is someone that you will remember for the rest of your life.` +
  ` I hope you like it, Just type okay to retake the test.`);
});

exports.personaTest = functions.https.onRequest(app);