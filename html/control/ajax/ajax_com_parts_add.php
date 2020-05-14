<?php
session_start();
if (!isset($_SESSION["checklogin"])) {
  header("location:../../../index.php");
}
include("../../model/compartsadd.class.php");

$COMPARTSADD = new compartsadd();

if (isset($_POST["id"])) {
  $id = $_POST["id"];

  if ($id=="get_spname") {
    $result = $COMPARTSADD->getSpname();
    $getJson = $COMPARTSADD->getJson($result);
    echo $getJson;
  }elseif($id=="get_sptype"){
    $result = $COMPARTSADD->getSptype();
    $getJson = $COMPARTSADD->getJson($result);
    echo $getJson;
  }elseif ($id=="get_category") {
    $result = $COMPARTSADD->getCategory();
    $getJson = $COMPARTSADD->getJson($result);
    echo $getJson;
  }elseif ($id=="get_budget") {
    $result = $COMPARTSADD->getBudget();
    $getJson = $COMPARTSADD->getJson($result);
    echo $getJson;
  }elseif ($id=="com_parts_add") {
    return  $COMPARTSADD->comPartsAdd($_POST["serial_number"],$_POST["spname_select"],$_POST["sptype_select"],$_POST["part_detail"],$_POST["category_select"],$_POST["purchasing_amount_number"],$_POST["budget"],$_POST["dump"]);
  }else {
    // code...
  }

}else {
    //$showSparepart = $SPAREPART->showComParts();
    //$getJson = $SPAREPART->getJson($showSparepart);
    //echo $getJson;
}

?>
