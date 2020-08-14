<?php
    if($_POST['submit']) {
        setcookie('first_name',$_POST['first_name'],time()+3600);
        setcookie('last_name',$_POST['last_name'],time()+3600);
        setcookie('email',$_POST['email'],time()+3600);
        setcookie('phone',$_POST['phone'],time()+3600);
        setcookie('sulley',$_POST['sulley'],time()+3600);
        setcookie('q1',$_POST['q1'],time()+3600);
        setcookie('q2',$_POST['q2'],time()+3600);
        setcookie('q3',$_POST['q3'],time()+3600);
        setcookie('q4',$_POST['q4'],time()+3600);
        setcookie('q5',$_POST['q5'],time()+3600);
    }
    else {}
?>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>Data Entry Form SG</title>
        <style type="text/css">@import url('css/styles.css');</style>
    </head>
    <body>
       <div id="content-container">
         <div id="content">
            <form name="form" method="post" action=" ">
                <fieldset>
                    <legend>Data Entry!</legend>
                        <ul>
                           <li>
                              <input type="text" name="first_name" id="first_name" value="<?php if(isset($_COOKIE['first_name'])) { print $_COOKIE['first_name']; } ?>" />
                              <label for="first_name">First Name</label>
                                  <?php if(empty($_POST['first_name']) && (isset($_POST['submit']))) {
                                ?> <span class="missing">Please enter a value for first name!</span> <?php
                                } else {}
                                ?>
                           </li> 
                            <li>
                                <input type="text" name="last_name" id="last_name" value="<?php if(isset($_COOKIE['last_name'])) { print $_COOKIE['last_name']; } ?>" />
                                <label for="last_name">Last Name</label>
                                <?php if(empty($_POST['last_name']) && (isset($_POST['submit']))) {
                                ?> <span class="missing">Please enter a value for last name!</span> <?php
                                } else {}
                                ?>
                            </li>
                            <li>
                                <input type="text" name="email" id="email" value="<?php if(isset($_COOKIE['email'])) { print $_COOKIE['email']; } ?>" />
                                <label for="email">E-mail</label>
                                <?php if(empty($_POST['email']) && (isset($_POST['submit']))) {
                                ?> <span class="missing">Please enter a value for email!</span> <?php
                                } else {}
                                ?>
                            </li>
                            <li>
                                <input type="text" name="phone" id="phone" value="<?php if(isset($_COOKIE['phone'])) { print $_COOKIE['phone']; } ?>" />
                                <label for="phone">Phone Number</label>
                                <?php if(empty($_POST['phone']) && (isset($_POST['submit']))) {
                                ?> <span class="missing">Please enter a value for phone number!</span> <?php
                                } else {}
                                ?>
                            </li>
                            <li>
                                <input type="text" name="sulley" id="sulley" value="<?php if(isset($_COOKIE['sulley'])) { print $_COOKIE['sulley']; } ?>" />
                                <label for="sulley">Sulley Address</label>
                                <?php if(empty($_POST['sulley']) && (isset($_POST['submit']))) {
                                ?> <span class="missing">Please enter a value for sulley address!</span> <?php
                                } else {}
                                ?>
                            </li>
                            <li>
                                <input type="text" name="q1" id="q1" value="<?php if(isset($_COOKIE['q1'])) { print $_COOKIE['q1']; } ?>" />
                                <label for="q1">What is your favorite color?</label>
                                <?php if(empty($_POST['q1']) && (isset($_POST['submit']))) {
                                ?> <span class="missing">Please enter a value for q1!</span> <?php
                                } else {}
                                ?>
                            </li>
                            <li>
                                <input type="text" name="q2" id="q2" value="<?php if(isset($_COOKIE['q2'])) { print $_COOKIE['q2']; } ?>" />
                                <label for="q2">What was the last movie you saw?</label>
                                <?php if(empty($_POST['q2']) && (isset($_POST['submit']))) {
                                ?> <span class="missing">Please enter a value for q2!</span> <?php
                                } else {}
                                ?>
                            </li>
                            <li>
                                <input type="text" name="q3" id="q3" value="<?php if(isset($_COOKIE['q3'])) { print $_COOKIE['q3']; } ?>" />
                                <label for="q3">How often do you purchase software?</label>
                                <?php if(empty($_POST['q3']) && (isset($_POST['submit']))) {
                                ?> <span class="missing">Please enter a value for q3!</span> <?php
                                } else {}
                                ?>
                            </li>
                            <li>
                                <input type="text" name="q4" id="q4" value="<?php if(isset($_COOKIE['q4'])) { print $_COOKIE['q4']; } ?>" />
                                <label for="q4">What is your favorite outdoor activity?</label>
                                <?php if(empty($_POST['q4']) && (isset($_POST['submit']))) {
                                ?> <span class="missing">Please enter a value for q4!</span> <?php
                                } else {}
                                ?>
                            </li>
                            <li>
                                <input type="text" name="q5" id="q5" value="<?php if(isset($_COOKIE['q5'])) { print $_COOKIE['q5']; } ?>" />
                                <label for="q5">Would you like to play a game?</label>
                                <?php if(empty($_POST['q5']) && (isset($_POST['submit']))) {
                                ?> <span class="missing">Please enter a value for q5!</span> <?php
                                } else {}
                                ?>
                            </li>
                            <li>
                                <input type="submit" name="submit" id="submit" value="Preview Answers" />
                                <?php 
                                if ($_POST['submit']) {
                                ?>
                                <p>Personal Info</p>
                                <p>First Name: <?php if(isset($_POST['first_name'])) { print $_POST['first_name']; } ?></p>
                                <p>Last Name: <?php if(isset($_POST['last_name'])) { print $_POST['last_name']; } ?></p>
                                <p>E-mail: <?php if(isset($_POST['email'])) { print $_POST['email']; } ?></p>
                                <p>Phone Number: <?php if(isset($_POST['phone'])) { print $_POST['phone']; } ?></p>
                                <p>Sulley Address: <?php if(isset($_POST['sulley'])) { print $_POST['sulley']; } ?></p>

                                <p>What is your favorite color?: <?php if(isset($_POST['q1'])) { print $_POST['q1']; } ?></p>
                                <p>What was the last movie you saw?: <?php if(isset($_POST['q2'])) { print $_POST['q2']; } ?></p>
                                <p>How often do you purchase software?: <?php if(isset($_POST['q3'])) { print $_POST['q3']; } ?></p>
                                <p>What is your favorite outdoor activity?: <?php if(isset($_POST['q4'])) { print $_POST['q4']; } ?></p>
                                <p>Would you like to play a game?: <?php if(isset($_POST['q5'])) { print $_POST['q5']; } ?></p>
                                <?php 
                                }
                                ?>    
                            </li>
                    <form method="post" action=" ">
                    <input type="submit" name="submit" value="Edit" />
                    </form>
                    <form method="post" action=" ">
                    <input type="submit" name="confirm" value="Finish" />
                    </form>
                        <?php
                        if(isset($_POST['confirm'])) {
                        print 'Thank you, your data has been submitted';
                        }
                        ?>
                        </ul>
                    </fieldset>
                </form>
            </div>
           </div>
    </body>
</html>