<?php
session_start();
if (!isset($_SESSION["checklogin"])) {
  header("location:../../../index.php");
}
include("../../model/store.class.php");

$STORE = new store();

if (isset($_POST["id"])) {
  $id = $_POST["id"];
  if ($id=="get_loginlevel") {
    echo $_SESSION["userlevel"];
  }elseif ($id=="get_store") {
    $id_key = $_POST["id_key"];
    $key = $_POST["key"];
    $showStore = $STORE->showStore($id_key,$key);
    $getJson = $STORE->getJson($showStore);
    echo $getJson;
  }elseif ($id=="get_spname") {
    $result = $STORE->getSpname($_POST["spcategory_id"]);
    $getJson = $STORE->getJson($result);
    echo $getJson;
  }elseif($id=="get_sptype"){
    $result = $STORE->getSptype($_POST["spname_id"]);
    $getJson = $STORE->getJson($result);
    echo $getJson;
  }elseif ($id=="get_category") {
    $result = $STORE->getCategory();
    $getJson = $STORE->getJson($result);
    echo $getJson;
  }elseif ($id=="get_budget") {
    $result = $STORE->getBudget();
    $getJson = $STORE->getJson($result);
    echo $getJson;
  }elseif ($id=="get_dump") {
    $result = $STORE->getDump();
    $getJson = $STORE->getJson($result);
    echo $getJson;
  }elseif ($id=="store_add") {
    return  $STORE->storeAdd($_POST["serial_number"],$_POST["spname_select"],$_POST["sptype_select"],$_POST["part_detail"],$_POST["category_select"],$_POST["purchasing_amount_number"],$_POST["budget"],$_POST["dump"]);
  }else {
    // code...
  }

}else {
    $showStore = $STORE->showStore();
    $getJson = $STORE->getJson($showStore);
    echo $getJson;
}

?>
