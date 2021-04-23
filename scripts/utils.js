$("#postLink").on('click', function(){
    copyToClip();
});

const toasts = document.getElementById("toasts");


const copiedMessage = "Link Copied";


const createNotification = (message = null, type = null) => {
  const notif = document.createElement("div");
  notif.classList.add("toast");
  notif.classList.add(type ? type : 'info');
  notif.innerText = message ? message : copiedMessage;
  toasts.appendChild(notif);
  setTimeout(() => notif.remove(), 2000);
};


function copyToClip() {
    var dummy = document.createElement('input'),
    text = window.location.href;

    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
    createNotification();
}
