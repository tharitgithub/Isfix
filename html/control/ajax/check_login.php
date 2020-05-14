<?php
session_start();
if(isset($_POST["username"])||isset($_SESSION["checklogin"])){//ตรวจสอบการส่งค่า username และ session checklogin

if (!isset($_SESSION["checklogin"])) {
include_once("../../model/dbconnect.class.php");
include_once("../../model/login.class.php");
$username = $_POST["username"];
$password = $_POST["password"];
    #ตรวจสอบ $objResult
    $user = new login();
    $objResult = $user->check($username, md5($password));
    if(!$objResult)
    {
        echo "0";
    }
    else
    {

      $properties = $user->getProperty($objResult["username"]);

      if ($properties["status"]=="active"||$properties["level"]=="SysADMIN") {
        if ($properties["level"]=="SysADMIN") {
          $_SESSION["checklogin"]=$properties["username"];
          $_SESSION["firstname"]=$properties["firstname"];
          $_SESSION["userlevel"]=$properties["level"];
          $_SESSION["rank_name"]="";
          $_SESSION["shorted_out"]="";
          $_SESSION["last"]="";
          $_SESSION["userimage"]="";

        //  echo $_SESSION["checklogin"];
        //  exit();

        }else {
          $_SESSION["checklogin"]=$properties["username"];
          $_SESSION["rank_name"]=$properties["rank_name"];
          $_SESSION["shorted_out"]=$properties["shorted_out"];
          $_SESSION["firstname"]=$properties["firstname"];
          $_SESSION["last"]=$properties["lastname"];
          $_SESSION["userimage"]=$properties["image"];
          $_SESSION["userlevel"]=$properties["level"];
        //  echo $_SESSION["checklogin"];
        //  exit();
        }
        echo "success";
        //exit();
      }
      elseif ($properties["status"]=="not_active") {
        echo "2";
        //exit();
      }
      else {
        echo "1";
        //exit();
      }
  }
}else {
  session_destroy();
  header('Location:../../../index.php');
}
} // end check username and checklogin
else {
  //exit();
  session_destroy();
  header('Location:../../../index.php');
}

?>
