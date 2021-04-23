

$('#contentSwitch').on('change', toggleContent)

$( document ).ready(toggleContent());

function toggleContent($event)
{
  console.log(Math.random());
  cSwitch = $('#contentSwitch').prop('checked');
  var chain = document.getElementById("blockchain");
  var bio = document.getElementById("biotech");
  if (cSwitch == true) {
  chain.style.display = "none";
  bio.style.display = "block";
  }
  else
  {
  chain.style.display = "block";
  bio.style.display = "none";
  }
  console.log("pooo")
   $event.stopPropagation();
}
