$('#btnArticleSubmit').on('click', submit)


function submit()
{
    const email = document.getElementById('email').value;
    const bitcoinAddress = document.getElementById('bitcoinAddress').value;
    const articleTitle = document.getElementById('articleTitle').value;
    const articleType = document.getElementById('articleType').value;
    const articleSubmission = document.getElementById('articleSubmission').value;


  if(ValidateEmail(email))
  {
     console.log('was validated');
     var url = 'http://www.biochain.blog/scripts/submission.php?';
     console.log('yyeee');
     var query = 'email=' +  email + 'articleType' + articleType + 'bitcoinAddress' + bitcoinAddress + 'articleTitle' + articleTitle + 'articleSubmission' + articleSubmission;
     console.log("Submission sent.")
     window.location.href = url + query;
  }

}


  const failMessage = "Invalid email";
  const createNotification = (message = null, type = null) => {
  const notif = document.createElement("div");
  notif.classList.add("toast");
  notif.classList.add(type ? type : 'info');
  notif.innerText = message ? message : failMessage;
  toasts.appendChild(notif);
  setTimeout(() => notif.remove(), 2000);
};

function ValidateEmail(mail)
{
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail))
        {
          console.log('Valid Email');
          return (true);
        }
    else{
          console.log('Invalid Email');
		  createNotification();
		  $("#email").value = "";
          return (false);
          }
}


$('#toasts').fadeIn(400, function () {
    setTimeout(function () {
        $('#toasts').fadeOut();
    }, 5000);
});
