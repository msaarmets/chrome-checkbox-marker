document.getElementById('submit_btn').addEventListener('click', sendAjax);

// Ajax function to send Url and email to db
function sendAjax(){
var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
  }
};

chrome.tabs.query({'active': true, 'currentWindow': true}, function (tabs) {
  // Send data by Ajax
  var url = tabs[0].url;
  var email = document.getElementById('email_input').value;
  xhttp.open("GET", "https://blindbow.com/checkboxer/chrome_checker.php?url="+url+"&email="+email, true);
  xhttp.send();
  
  // Show confirmation
  var initialDiv = document.getElementById('initial');
  var resultDiv = document.getElementById('result');
  initialDiv.style.display = 'none';
  resultDiv.innerHTML = '<h1>Thank you for your feedback!</h1>';
  resultDiv.innerHTML += '<div style="width: 50px"><img src="smile-o.svg" id="frown"></img></div>';
});
}