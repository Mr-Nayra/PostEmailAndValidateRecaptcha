const form = document.getElementById('email-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  var btn = document.getElementById("button");
  btn.setAttribute("value", "Please wait...");

  const data = {
    "fields": [{
      "name": "email",
      "value": "a@gmail.com"
    }],
    "context": {
      "pageUri": "https://www.toplyne.io/",
      "pageName": "Home Page Top MQL"
    }
  };

  const url = "https://api.hsforms.com/submissions/v3/integration/submit/25336449/5f662e82-7b62-41ba-bf1e-a062a9516124";

  const sendEmailData = async () => {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      },
    });

    if (!response.ok) {
      throw new Error('Unable to register');
    } else {
      console.log(response);
      location.replace("https://www.toplyne.io/get-started")
    }
  }

  sendEmailData();
});
