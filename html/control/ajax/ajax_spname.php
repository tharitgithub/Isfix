<?php
session_start();
if (!isset($_SESSION["checklogin"])) {
  header("location:../../../index.php");
}
include("../../model/spname.class.php");

$SPNAME = new spname();

if (isset($_POST["id"])) {
  $id = $_POST["id"];
  if ($id=="get_loginlevel") {
    echo $_SESSION["userlevel"];
  }elseif($id=="get_category"){
    $result = $SPNAME->getCategory();
    $getJson = $SPNAME->getJson($result);
    echo $getJson;
  }elseif($id=="get_spname") {
    $result = $SPNAME->getSpname($_POST["spcategory_id"]);
    $getJson = $SPNAME->getJson($result);
    echo $getJson;
  }elseif ($id=="get_sptype") {
    $result = $SPNAME->getSptype($_POST["spname_id"]);
    $getJson = $SPNAME->getJson($result);
    echo $getJson;
  }
}else {

}

?>
