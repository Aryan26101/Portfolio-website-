const radios = document["contact-me"]["message-type"];

for (const radio of radios) {
  radio.addEventListener('change', (event) => {
    const hourlyRateContainer = document.getElementById("hourly-rate-container");

    if(!hourlyRateContainer) return;

    if(event.target.value === 'hiring') {
      hourlyRateContainer.classList.remove("hidden");
    }
    else {
      hourlyRateContainer.classList.add("hidden");
    }
  });
}

function formSubmit(event) {
  event.preventDefault();

  const name = document["contact-me"]["name"].value;
  const email = document["contact-me"]["email"].value;
  const address = document["contact-me"]["address"].value;
  const city = document["contact-me"]["city"].value;
  const postalCode = document["contact-me"]["postal-code"].value;
  const hourlyRate = document["contact-me"]["hourly-rate"].value;
  const message = document["contact-me"]["message"].value;
  const hearAboutMe = document["contact-me"]["hear-about-me"].value;

  const checkedMessageTypeRadio = [...document["contact-me"]["message-type"]].find(e => e.checked);
  const messageType = checkedMessageTypeRadio && checkedMessageTypeRadio.value;

  if(
    !name ||
    !email ||
    !address ||
    !city ||
    !postalCode ||
    messageType === 'hiring' && !hourlyRate ||
    !message ||
    !hearAboutMe ||
    !messageType
  ) {
    alert('Please input all value!');
    return;
  }

  fetch('https://httpbin.org/post', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: 'Contact me' })
  })
      .then(() => alert('Message sent successfully!'))
      .catch(() => alert('Could not send the message!'));
}