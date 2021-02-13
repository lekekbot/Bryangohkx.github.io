<?php
    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST["message"];

    $to = 'bryangoh843@gmail.com';
    if (empty($subject)) {
        $email_subject = 'Form Submission';
    }else{
        $email_subject = $subject;
    }
    $headers = "From: $visitor_email \r\n";
    mail($to, $email_subject, $message,$headers);
    header("Location: index.html");

?>  