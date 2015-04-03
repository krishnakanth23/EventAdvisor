<!DOCTYPE html>
<html>

<head>
	<title>Event Advisor Admin Panel</title>
	<meta charset="utf-8">
	<link href="/css/style.css" rel='stylesheet' type='text/css' />
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<script type="application/x-javascript"> addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } </script>
	<!--webfonts-->
	<link href='http://fonts.googleapis.com/css?family=Open+Sans:600italic,400,300,600,700' rel='stylesheet' type='text/css'>
	<!--//webfonts-->
</head>
<body>
	<?php echo file_get_contents("../header.php"); ?>
	<div class="outer_div">
		<!-----start-main---->
		<div class="login-form">
			<div class="head">
				<img src="/images/rsz_admin.jpg" alt=""/>

			</div>
			<form action="ValidateLogin.php" method="post">
				<li>
					<input type="text" class="text" name="username" id="username" placeholder="Enter Username" required ><a href="#" class=" icon user"></a>
				</li>
				<li>
					<input type="password" name="password" id="Password" placeholder="Enter password" required><a href="#" class=" icon lock"></a>
				</li>
				<div class="p-container">
					<!-- <label class="checkbox"><input type="checkbox" name="checkbox" checked><i></i>Remember Me</label> -->
					<input type="submit" onclick="myFunction()" value="Login" >
					<div class="clear"> </div>
				</div>
			</form>
		</div>
		<!--//End-login-form-->
		<div style="display:none">
			<!-----start-copyright---->
			<div class="copy-right">
				<p>Template by <a href="http://w3layouts.com">w3layouts</a></p> 
			</div>
			<!-----//end-copyright---->
		</div>
	</div>	
	<?php echo file_get_contents("../footer.php"); ?>
</body>
</html>