<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form method='post' action ="../Controller/loginvalidation.php">
        <?php
        echo "<h1 style='color: blue'>LogIn Page</h1>";
        ?>
        <table>
            <tr>
                <td>User Name: </td>
                <td><input type="text"></td>
            </tr>
            <tr>
                <td>Password: </td>
                <td><input type="password"></td>
            </tr>
            <tr>
                <td></td>
                <td><input type="submit"></td>
            </tr>
        </table>
    </form>
    <?php
       echo "<h3 style = 'color: red'>php Introduction</h3>";
       $text1 = "Hello World";
       echo $text1;
       echo "<br>";
       echo '<b>'.$text1. '</b>';
       echo "<br>";
       $var1 = 12.4;
       $var2 = 5;
       echo "Sum = $var1 + $var2 = ".($var1 + $var2);
       echo "<br>";
       echo $var1 + $var2;
       echo "<br>";
       $course = array("Course:"=>"WebTechnology, IP1","Pre-requisite:"=>"OOP2", "Next Course:"=>"Python");
       var_dump($course);
       echo "<br>";
       echo $course["Pre-requisite:"];
       echo "<br>";
       if($var2>0)
         {
              echo "Positive Number";
         }
         else if($var2<0)
         {
              echo "Negative Number";
         }
         else
         {
              echo "Zero";
         }
         function addnumber ($var1, $var2)
         {
                return $var1 + $var2;
         }
    ?>
</body>
</html>