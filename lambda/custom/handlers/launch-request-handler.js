const LaunchRequestHandler = {
  canHandle (handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'LaunchRequest'
  },

  handle (handlerInput) {
    const speechText = 'Hi Lloyd! Welcome to the Alexa Skills Kit, you can say hello!'

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .withSimpleCard('Hello World', speechText)
      .getResponse()
  }
}

exports.LaunchRequestHandler = LaunchRequestHandler
