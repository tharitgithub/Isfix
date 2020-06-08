<?php
session_start();
if (!isset($_SESSION["checklogin"])) {
  header("location:../../../index.php");
}
include("../../model/budget_year.class.php");

$BUDGET_YEAR = new budget_year();

if (isset($_POST["id"])) {
  $id = $_POST["id"];
  if ($id=="get_loginlevel") {
    echo $_SESSION["userlevel"];
  }elseif ($id=="get_budget_year") {
    $showBudget_year = $BUDGET_YEAR->showBudget_year();
    $getJson = $BUDGET_YEAR->getJson($showBudget_year);
    echo $getJson;
  }elseif ($id=="store_add") {
    return  $BUDGET_YEAR->storeAdd($_POST["serial_number"],$_POST["spname_select"],$_POST["sptype_select"],$_POST["part_detail"],$_POST["category_select"],$_POST["purchasing_amount_number"],$_POST["budget"],$_POST["dump"]);
  }else {
    // code...
  }

}else {
    $showCategory = $BUDGET_YEAR->showCategory();
    $getJson = $BUDGET_YEAR->getJson($showCategory);
    echo $getJson;
}

?>
