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
    $spcategory_id = $_POST["spcategory_id"];
    $showStore = $STORE->showStore($spcategory_id);
    $getJson = $STORE->getJson($showStore);
    echo $getJson;
  }elseif ($id=="get_spname") {
    $result = $STORE->getSpname();
    $getJson = $STORE->getJson($result);
    echo $getJson;
  }elseif($id=="get_sptype"){
    $result = $STORE->getSptype();
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
