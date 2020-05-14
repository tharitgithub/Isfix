<?php
session_start();
if (!isset($_SESSION["checklogin"])) {
  header("location:../../../index.php");
}
include("../../model/tools.class.php");

$TOOLS = new tools();

if (isset($_POST["id"])) {
  $id = $_POST["id"];
  if ($id=="get_loginlevel") {
    echo $_SESSION["userlevel"];
  }elseif($id=="get_spname") {
      $result = $TOOLS->getSpname();
      $getJson = $TOOLS->getJson($result);
      echo $getJson;
    }elseif($id=="get_sptype"){
      $result = $TOOLS->getSptype();
      $getJson = $TOOLS->getJson($result);
      echo $getJson;
    }elseif ($id=="get_category") {
      $result = $TOOLS->getCategory();
      $getJson = $TOOLS->getJson($result);
      echo $getJson;
    }elseif ($id=="get_budget") {
      $result = $TOOLS->getBudget();
      $getJson = $TOOLS->getJson($result);
      echo $getJson;
    }elseif ($id=="tools_add") {
      return  $TOOLS->toolsAdd($_POST["serial_number"],$_POST["spname_select"],$_POST["sptype_select"],$_POST["part_detail"],$_POST["category_select"],$_POST["purchasing_amount_number"],$_POST["budget"],$_POST["dump"]);
    }else {
      // code...
    }

}else {
    $showTools = $TOOLS->showTools();
    $getJson = $TOOLS->getJson($showTools);
    echo $getJson;
}

?>
