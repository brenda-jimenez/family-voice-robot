const { conversation } = require('@assistant/conversation');
const functions = require('firebase-functions');

const app = conversation({debug: true});

app.handle('unavailable_actions', conv => {
  // Implement your code here
  //const option= conv.intent.params.chosenUnavailableOption.original; 
  console.log(conv.intent.params);
  const optionKey= conv.intent.params.chosenUnavailableActions.resolved;
  const message= `Sorry ${optionKey} does not exist yet.`;
  conv.add(message);
});

exports.ActionsOnGoogleFulfillment = functions.https.onRequest(app);
