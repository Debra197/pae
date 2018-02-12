<?php
	header('Content-type: application/json');
	$status = array(
		'type'=>'success',
		'message'=>'Message sent. We will contact you in the next day or two. If it is urgent, please call us on 027 307 7096.'
	);

    $yourname = @trim(stripslashes($_POST['yourname']));
	$subject = @trim(stripslashes($_POST['subject'])); 
    $email = @trim(stripslashes($_POST['email']));
	$phone = @trim(stripslashes($_POST['phone']));
    $message = @trim(stripslashes($_POST['message'])); 

    $email_from = $email;
    $email_to = 'ohmann.susan@gmail.com'; //replace with your email

    $body = 'Name: ' . $yourname . "\n\n" . 'Subject: ' . $subject . "\n\n" . 'Email: ' . $email . "\n\n" . 'phone: ' . $phone . "\n\n" . 'Message: ' . $message;

    $success = @mail($email_to, $subject, $body, 'From: <'.$email_from.'>');

    echo json_encode($status);
    die;