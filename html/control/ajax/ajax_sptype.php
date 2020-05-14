<?php
session_start();
if (!isset($_SESSION["checklogin"])) {
  header("location:../../../index.php");
}
include("../../model/sptype.class.php");

$SPTYPE = new sptype();

if (isset($_POST["id"])) {
  $id = $_POST["id"];
  if ($id=="get_loginlevel") {
    echo $_SESSION["userlevel"];
  }elseif($id=="get_category"){
    $result = $SPTYPE->getCategory();
    $getJson = $SPTYPE->getJson($result);
    echo $getJson;
  }elseif($id=="get_spname") {
    $result = $SPTYPE->getSpname($_POST["spcategory_id"]);
    $getJson = $SPTYPE->getJson($result);
    echo $getJson;
  }elseif ($id=="get_sptype") {
    $result = $SPTYPE->getSptype($_POST["spname_id"]);
    $getJson = $SPTYPE->getJson($result);
    echo $getJson;
  }
}else {

}

?>
