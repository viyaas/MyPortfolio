// Initialize WOW.js for animations
new WOW().init();

function myFunction() {
  navigator.clipboard.writeText("+91 8870823254");
  alert('Mobile Number Copied to your clipboard !!')
}

function emailsend() {
  Email.send({
    SecureToken: "6411ff99-0e67-45ed-a0a7-4d05cc7a2933",
    To: 'viyaaskge@gmail.com',
    From: 'viyaaskge@gmail.com',
    Subject: "Portfolio mail from " + document.getElementById("inputFirstName").value + " " + document.getElementById("inputLastName").value,
    Body: "Name : " + document.getElementById("inputFirstName").value + " " + document.getElementById("inputLastName").value + "<br> Email : " + document.getElementById("inputEmail").value + "<br> Message : " + document.getElementById("message").value
  }).then(
    message => {
      if (message == 'OK') {
        alert("Message send Successfully !!");
      }
      else {
        alert(message);
      }
    }
  );
}