const form = document.getElementById('email-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  var formcontainer = document.getElementById("formcontainer");
  formcontainer.innerHTML="<div class='aftersubmit'><p>Thank you! Your submission has been received!</p></div>"
});
