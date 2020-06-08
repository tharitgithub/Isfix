<?php
session_start();
if (!isset($_SESSION["checklogin"])) {
  header("location:../../../index.php");
}
include("../../model/category.class.php");

$CATEGORY = new category();

if (isset($_POST["id"])) {
  $id = $_POST["id"];
  if ($id=="get_loginlevel") {
    echo $_SESSION["userlevel"];
  }elseif ($id=="get_category") {
    $showCategory = $CATEGORY->showCategory();
    $getJson = $CATEGORY->getJson($showCategory);
    echo $getJson;
  }elseif ($id=="category_add") {
    return  $CATEGORY->categoryAdd($_POST["category"]);
  }else {
    // code...
  }

}else {
    $showCategory = $CATEGORY->showCategory();
    $getJson = $CATEGORY->getJson($showCategory);
    echo $getJson;
}

?>
