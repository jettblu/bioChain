<?php

  date_default_timezone_set('UTC');
  $email = $_POST['email'];
  $bitcoinAddress = $_POST['bitcoinAddress'];
  $articleTitle = $_POST['articleTitle'];
  $articleType = $_POST['articleType'];
  $articleSubmission = $_POST['articleSubmission'];
  $time = date("h:i:s");
  $msg = sprintf(" Email: %s \n Bitcoin Address: %s \n Article Title: %s \n Article Type: %s \n Article Submission: %s \n .", $email, $bitcoinAddress, $articleTitle, $articleType, $articleSubmission);
  $to = "biochainblog@gmail.com";
  $subject = sprintf("Article submission %s", $time);
  mail($to, $subject, $msg);
  readFile('../submitDone.html');

?>
