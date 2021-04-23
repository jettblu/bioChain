$('#btnSubscribe').on('click', addSubscriber)


function addSubscriber()
{
    const data = document.getElementById('email').value;
    console.log(data)

  if(ValidateEmail(data))
  {
     console.log('was validated');
     var url = 'http://www.biochain.blog/scripts/addSub.php?';
     var query = 'email=' + data;
     console.log("Subscriber request sent.")
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
