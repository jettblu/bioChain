<?php
date_default_timezone_set('UTC');
$email = $_GET['email'];
$bitcoinAddress = $_GET['bitcoinAddress'];
$articleTitle = $_GET['articleTitle'];
$articleType = $_GET['articleType'];
$articleSubmission = $_GET['articleSubmission'];
$time = date("h:i:s");
$msg = sprintf("Email: %s \n Bitcoin Address: %s \n Article Title: %s \n Article Type: %s \n Article Submission: %s \n .", $email, $bitcoinAddress, $articleTitle, $articleType, $articleSubmission);
$to = "biochainblog@gmail.com";
$subject = sprintf("Article submission %s", $time);
try{
  mail($to, $subject, $msg);
  readFile('../submitDone.html');
}
catch{
  	header('Location: ../add.html');
}
?>
