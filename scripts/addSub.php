<?php

$list_id = '09d14292ae';
$api_key = '5e28b035077d4a39dcbb5c8ee09d85f0-us1';
// The data to send to the API
$email = $_GET['email'];



$data_center = substr($api_key,strpos($api_key,'-')+1);

$url = 'https://'. $data_center .'.api.mailchimp.com/3.0/lists/'. $list_id .'/members';

$json = json_encode([
    'email_address' => $email,
    'status'        => 'subscribed', //pass 'subscribed' or 'pending'
]);

try {
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_USERPWD, 'user:' . $api_key);
    curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 10);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $json);
    $result = curl_exec($ch);
    $status_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    if (200 == $status_code) {
		$time = date("h:i:s");
		readfile('../success.html');
		$msg = sprintf(" Email: %s \n Quality>quantity", $email);
		$to = "biochainblog@gmail.com";
		$subject = sprintf("Wooohoo! New Subscriber %s", $time);
		mail($to, $subject, $msg);
    }
    else{
        		readfile('../all.html');
        }
}
catch(Exception $e) {
  		readfile('../all.html');
}



?>
