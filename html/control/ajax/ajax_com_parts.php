<?php
session_start();
if (!isset($_SESSION["checklogin"])) {
  header("location:../../../index.php");
}
include("../../model/comparts.class.php");

$SPAREPART = new comparts();

if (isset($_POST["id"])) {
  $id = $_POST["id"];
  if ($id=="get_loginlevel") {
    echo $_SESSION["userlevel"];
  }else {
    // code...
  }

}else {
    $showSparepart = $SPAREPART->showComParts();
    $getJson = $SPAREPART->getJson($showSparepart);
    echo $getJson;
}

?>
