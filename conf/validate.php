<?php
if(isset($_POST['name']))
{
if(empty($_POST['name']))
{
    echo '* Please fill You name';
}
}
if(isset($_POST['lname']))
{
if(empty($_POST['lname']))
{
    echo '* Please fill You surname';
}
}


?> 