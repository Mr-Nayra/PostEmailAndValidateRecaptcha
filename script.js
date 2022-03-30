const form = document.getElementById('email-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = {
    "feilds": [{
        "name": "email",
        "value": form.elements['email'].value]
    }],
    "context":{
      "pageUrl": "https://www.toplyne.io/",
      "pageName":"Home Page Top MQL"
    }
  }
  const sendEmailData = async () => {
    const response = await fetch("url", {
      method: "POST",
      body: JSON.stringify(cart),
    });

    if (!response.ok) {
      throw new Error('Unable to register');
    }
  }
}

const responseData = await response.json();
});
