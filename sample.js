var request = require("request")

var url = "http://api.exania.ai/telegrambot/chat.json?q=Hi I am Exania";

request({
    url: url,
    json: true
}, function (error, response, body) {

    if (!error && response.statusCode === 200) {
        console.log(body.answers[0].actions[0].expression); // Print the json response
    }
})
