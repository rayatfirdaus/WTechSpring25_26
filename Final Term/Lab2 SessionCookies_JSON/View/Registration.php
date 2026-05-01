<?php
include "../Controller/RegistrationController.php";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form method="post" action="../Controller/RegistrationController.php">
        <table>
            <tr>
                <td><label for="Username">User Name: </label></td>
                <td><input type="text" id="name"> </td>
            </tr>
            <tr>
                <td><label for="Password">Password: </label></td>
                <td><input type="password" id="password"> </td>
            </tr>
            <tr>
                <td>
                    <input type="submit" id="submit">
                </td>
            </tr>
        </table>
    </form>
</body>
</html>