<?php
	$to = "hello@robswain.website";
	$subject = $_POST['subject'];
	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['msg'];

  $headers = 'From: hello@robswain.website';

	$body = "From: $name\n E-Mail: $email\n \n $message";

	mail ($to, $subject, $body, $headers);
?>
