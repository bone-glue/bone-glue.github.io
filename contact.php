<!DOCTYPE html>
<html lang="en-US">
<head>
    <title>Sending Email...</title>
</head>
<?php
    mail("ichtchenkomaxim@gmail.com",
        $_POST["subject"],
        $_POST["message"]. $_POST["email"]);
?>
</html>