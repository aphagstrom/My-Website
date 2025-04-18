<?php
// Change this to your email address
$to = "aphagstrom@gmail.com"; 

// Get the form data
$name = htmlspecialchars($_POST['name']);
$email = htmlspecialchars($_POST['email']);
$message = htmlspecialchars($_POST['message']);

// Create the email subject and body
$subject = "New message from contact form";
$body = "You have received a new message from $name ($email):\n\n$message";

// Optional: set headers
$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";

// Send the email
if (mail($to, $subject, $body, $headers)) {
    echo "Message sent successfully.";
} else {
    echo "There was a problem sending the message.";
}
?>
