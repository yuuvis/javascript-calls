const request = require('request');

var key = ""
var baseUrl = "https://api.yuuvis.io/"

function createAppliedSchemaRequest() {
  return{
    method: 'GET',
    uri: baseUrl + 'dms/schema/native',
    headers: {
      'Ocp-Apim-Subscription-Key': key,
      'Accept': 'application/xml'
    }
  }
}

function executeRequest(request_object){
  request.get(request_object, function callback(err, httpResponse, body) {
    if(err) throw err;
    else {
      console.log(httpResponse.statusCode)
      console.log(body)
    }
  })
}

var simpleSearchRequest = createAppliedSchemaRequest()
executeRequest(simpleSearchRequest)
