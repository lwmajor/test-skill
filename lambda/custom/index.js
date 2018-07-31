/* eslint-disable  func-names */
/* eslint-disable  no-console */

const Alexa = require('ask-sdk-core');

const LaunchRequestHandler = require('./handlers/launch-request-handler');
const SessionEndedRequestHandler = require('./handlers/session-ended-handler');
const CancelAndStopIntentHandler = require('./handlers/cancel-stop-intent-handler');
const HelpIntentHandler = require('./handlers/help-intent-handler');

const HelloWorldIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'HelloWorldIntent';
  },
  handle(handlerInput) {
    const speechText = 'Hello World!';

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard('Hello World', speechText)
      .getResponse();
  },
};

const skillBuilder = Alexa.SkillBuilders.custom();

exports.handler = skillBuilder
  .addRequestHandlers(
    LaunchRequestHandler.LaunchRequestHandler,
    HelloWorldIntentHandler,
    HelpIntentHandler.HelpIntentHandler,
    CancelAndStopIntentHandler.CancelAndStopIntentHandler,
    SessionEndedRequestHandler.SessionEndedRequestHandler
  )
  .addErrorHandlers(ErrorHandler)
  .lambda();
