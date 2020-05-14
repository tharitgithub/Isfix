<?php
session_start();
//if (!isset($_SESSION["checklogin"])) {
//  header("location:../../../index.php");
//}
include("../../model/memberadd.class.php");

$MEMBERADD = new memberadd();
if (isset($_POST["id"])) {
  $id = $_POST["id"];

  if ($id=="get_rank") {
    $result = $MEMBERADD->getRank();
    $getJson = $MEMBERADD->getJson($result);
    echo $getJson;
  }else if($id=="get_position"){
    $result = $MEMBERADD->getPosition();
    $getJson = $MEMBERADD->getJson($result);
    echo $getJson;
  }else if($id=="get_department"){
    $result = $MEMBERADD->getDepartment();
    $getJson = $MEMBERADD->getJson($result);
    echo $getJson;
  }else if($id=="member_add"){

    return  $MEMBERADD->memberAdd($_POST["username"],$_POST["password"],$_POST["rank"],$_POST["name"],$_POST["lastname"],$_POST["phonenumber"],$_POST["position"],$_POST["department"],$_POST["permiss"]);

  }else {
    // code...
  }
} else {

}

?>
