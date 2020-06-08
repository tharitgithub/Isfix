<?php
session_start();
if (!isset($_SESSION["checklogin"])) {
  header("location:../../../index.php");
}
include("../../model/dump.class.php");

$DUMP = new dump();

if (isset($_POST["id"])) {
  $id = $_POST["id"];
  if ($id=="get_loginlevel") {
    echo $_SESSION["userlevel"];
  }elseif ($id=="get_dump") {
    $showDump = $DUMP->showDump();
    $getJson = $DUMP->getJson($showDump);
    echo $getJson;
  }elseif ($id=="store_add") {
    return  $DUMP->storeAdd($_POST["serial_number"],$_POST["spname_select"],$_POST["sptype_select"],$_POST["part_detail"],$_POST["category_select"],$_POST["purchasing_amount_number"],$_POST["budget"],$_POST["dump"]);
  }else {
    // code...
  }

}else {
    $showCategory = $CATEGORY->showCategory();
    $getJson = $CATEGORY->getJson($showCategory);
    echo $getJson;
}

?>
