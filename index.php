<?php
session_start();
if (isset($_SESSION["checklogin"])) {
  header('Location:html/home');
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<title>เข้าสู่ระบบ | ระบบสารสนเทศเพื่อการจัดการแผนกซ่อมระบบคอมพิวเตอร์</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
<!--===============================================================================================-->
	<link rel="icon" type="image/png" href="login/images/icons/logopage.ico"/>
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="login/vendor/bootstrap/css/bootstrap.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="login/fonts/font-awesome-4.7.0/css/font-awesome.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="login/fonts/Linearicons-Free-v1.0.0/icon-font.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="login/vendor/animate/animate.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="login/vendor/css-hamburgers/hamburgers.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="login/vendor/select2/select2.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="login/css/util.css">
	<link rel="stylesheet" type="text/css" href="login/css/main.css">
<!--===============================================================================================-->

<link rel="stylesheet" type="text/css" href="html/js/sweetalert/dist/sweetalert2.min.css">

</head>
<body>

	<div class="limiter">
		<div class="container-login100" style="background-image: url('login/images/computer-tips.jpg');">
			<div class="wrap-login100 p-t-50 p-b-30">
				<form class="login100-form validate-form" autocomplete="off">
					<div class="login100-form-avatar">
						<img src="login/images/logopage.png">
					</div>

					<span class="login100-form-title p-t-10 p-b-45">
						<p>ระบบสารสนเทศเพื่อการจัดการ</p>
						<div class="p-p">
							<p>
								แผนกซ่อมระบบคอมพิวเตอร์ กซร.สปก.สสท.ทร.
							</p>
						</div>
          </span>

					<div class="wrap-input100 validate-input m-b-10" data-validate = "กรุณากรอกชื่อผู้ใช้งาน">
						<input class="input100" type="text" name="username" id="username" placeholder="ชื่อผู้ใช้งาน" autofocus="autofocus">
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-user"></i>
						</span>
					</div>

					<div class="wrap-input100 validate-input m-b-10" data-validate = "กรุณากรอกรหัสผ่าน">
						<input class="input100" type="password" name="password" id="password" placeholder="รหัสผ่าน">
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-lock"></i>
						</span>
					</div>

					<div class="container-login100-form-btn p-t-10">
						<button class="login100-form-btn">
							เข้าสู่ระบบ
						</button>
					</div>


					<div class="text-center w-full p-t-50">
						<a class="txt1" href="#" data-toggle="modal" data-target="#member_add">
							สร้างผู้ใช้ใหม่
							<i class="fa fa-long-arrow-right"></i>
						</a>
					</div>

				</form>
			</div>
		</div>
	</div>


<!--===============================================================================================-->
	<script src="login/vendor/jquery/jquery-3.2.1.min.js"></script>
<!--===============================================================================================-->
	<script src="login/vendor/bootstrap/js/popper.js"></script>
	<script src="login/vendor/bootstrap/js/bootstrap.min.js"></script>
<!--===============================================================================================-->
	<script src="login/vendor/select2/select2.min.js"></script>
<!--===============================================================================================-->

  <script src="html/js/login.js"></script>
  <script src="html/js/sweetalert/dist/sweetalert2.all.min.js"></script>
<!--===============================================================================================-->
</body>
</html>
