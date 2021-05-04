!DOCTYPE html>

<html>
<head>
<link rel="stylesheet" href="index.css"
    <meta charset="utf-8">
    <title>Login</title>
</head>


<?php 

$$_GET["user"];
$$_GET["pass"];

if($_GET["user"]==="333" && $_GET["pass"]==="271")
{
	echo " Login";
	else{
		echo"incorect";
	}
}
elseif ($_GET["user"]==="sahand" && $_GET["pass"]==="wrya"){
	echo "Login";



 
 ?>

<body>
<?php 

require_once'Get.php'

 ?>
<center>
<form action="Get.php"  method="get" >

<div class="Sahand" align="center">
<img src="/var/mobile/Containers/Shared/AppGroup/87920DDB-AA64-4A22-AB9B-1BA94CA63937/Documents/D3A53514-7C17-45EF-812F-E5A6F2257128.PNG"/>

<hr/>
<input type="hidden" name="hidden" value="secret hidden varible">
<input type="text" name="user" placeholder="Enter User ";/>
<br/>

<input type="password" name="pass" placeholder="Enter Password ";/>
<br/>
<button name="login" align="center">Login</button>
</div>

</form>

</center>






</body>
</html>
