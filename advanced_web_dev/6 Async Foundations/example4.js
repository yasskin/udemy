// function sendMessage(message, callback) {
//   return callback(message);
// }
//
// sendMessage("Message for console",
//             console.log);
//
// sendMessage("Message for alert", alert);
//
// var answer = sendMessage("Are you sure??",
//                          confirm);

// higher order function - second parameter is a function
function sendMessage(message, callback) {
  return callback(message);
}

sendMessage("Message for console", console.log);

sendMessage("Message for alert", alert);

var answer = sendMessage("Are you sure??", confirm);
