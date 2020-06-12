<?php
session_start();
if (!isset($_SESSION["checklogin"])) {
  header("location:../../../index.php");
}
include("../../model/member.class.php");

$MEMBER = new member();
if (isset($_POST["id"])) {
  $id = $_POST["id"];

  if ($id=="update_permission") {

    $user_id = $_POST["user_id"];
    $status = $_POST["status"];
    $MEMBER->permission_Update($user_id,$status);

  }elseif ($id=="get_level") {

    $user_id = $_POST["user_id"];
    $level = $MEMBER->get_level($user_id);
    $getJson = $MEMBER->getJson($level);
    echo $getJson;

  }else if($id=="update_level"){
    $user_id = $_POST["user_id"];
    $newLevel = $_POST["permise_new"];
    $MEMBER->level_Update($user_id,$newLevel);
  }else if($id=="password_confirm") {
    $username = $_SESSION["checklogin"];
    $password = $_POST["password"];

    $result = $MEMBER->password_Confirm($username,$password);

    if (!$result) {
      echo 0;
    }else {
      echo 1;
    }

  }elseif ($id=="user_delete") {
    $user_id = $_POST["user_id"];
    $result = $MEMBER->get_Userde_id($user_id);
    $userde_id = $result["userde_id"];
      $MEMBER->delete_Member($user_id,$userde_id);
  }elseif ($id=="get_rank") {
    $result = $MEMBER->getRank();
    $getJson = $MEMBER->getJson($result);
    echo $getJson;
  }elseif($id=="get_position"){
    $result = $MEMBER->getPosition();
    $getJson = $MEMBER->getJson($result);
    echo $getJson;
  }else if($id=="get_department"){
    $result = $MEMBER->getDepartment();
    $getJson = $MEMBER->getJson($result);
    echo $getJson;
  }elseif ($id=="get_userData") {
    $user_id = $_POST["user_id"];
    $result = $MEMBER->getUserData($user_id);
    $getJson = $MEMBER->getJson($result);
    echo $getJson;
  }else if($id=="member_add"){

    return  $MEMBER->memberAdd($_POST["username"],$_POST["password"],$_POST["rank"],$_POST["name"],$_POST["lastname"],$_POST["phonenumber"],$_POST["position"],$_POST["department"],$_POST["permiss"]);

  }else {
    // code...
  }
} else {
  $userlevel = $_SESSION["userlevel"];
  $member = $MEMBER->showMember($userlevel);
  $getJson = $MEMBER->getJson($member);
  echo $getJson;
  //echo $MEMBER->getJson();
}

?>
