<!DOCTYPE html>
<html>
    <body>
        <form method ='post' action ="../Controller/loginvalidation.php">
            <?php
            echo "<h1 style='color: red'>LogIn Page</h1>";
            ?>
            <table>
                <tr>
                    <td> User Name: </td>
                    <td> <input type="text"/></td>
                </tr>
                <tr>
                    <td> Password: </td>
                    <td > <input type ="password"/> </td>
                </tr>
                <tr>
                    <td> </td>
                    <td>
                        <input type ="submit"/>
                    </td>
                </tr>
            </table>
        </form>
        <?php
            echo "<h4 style='color: red'>php Introduction</h4>";
            $text1= "Hello World";
            echo "<b>$text1</b>";
            echo "<br>";
            echo '<b>'.$text1. '</b>';
            echo "<br>";
            $var1 = 12.5;
            $var2 = 5;
            echo "Sum = $var1 + $var2 = " . $var1 + $var2;
            echo "<br>";
            echo $var1 + $var2; 
            echo "<br>";
            $course = array("Course:"=>"WebTechnology, IP1", "Pre-requisite:"=>"OOP2", "Next Course;"=>"Python");
            var_dump($course);
            echo "<br>"; 
            echo $course["Course:"];
            if($var2>0)
                {
                    echo "Number is Positive";
                }
                else if($var2==0)
                    {
                        echo "Number is Zero";
                    }
                    else
                    {
                        echo "Negative";
                    }
            function addnumber($var1, $var2)
            {
                
            }

        ?>
    </body>
</html>