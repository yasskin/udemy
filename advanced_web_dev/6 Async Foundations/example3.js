function sendMessageConsole(message) {
  console.log(message);
}

function sendMessageAlert(message) {
  alert(message);
}

function sendMessageConfirm(message) {
  return confirm(message);
}

sendMessageAlert("Lots of duplication");

