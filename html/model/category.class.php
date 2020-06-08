<?php
/**
 *
 */
 include_once '../../model/dbconnect.class.php';
class category extends dbconnect
{
  private $result;
  private $json;

  function __construct()
  {
    dbconnect::__construct();
  }

  public function showCategory()
  {
     $result = array();
     $data = array();
     $sql = "";


       $sql = "SELECT * FROM spare_category";

     dbconnect::dataQuery($sql);
     $this->result = dbconnect::dataResult();

     while ($row = $this->result->fetch_assoc()) {
         $data[]=$row;
     }

     $result["category"] = $data;

     return $result;
  }

  public function categoryAdd($category)
  {
    $sql="";
    $spcategory_id = uniqid("spc-");

    $sql = "INSERT INTO spare_category (spcategory_id,spcategory_name)
            VALUES('".dbconnect::escapeString($spcategory_id)."','".dbconnect::escapeString($category)."')";

    try {
        dbconnect::dataQuery($sql);

        echo 3;
    } catch (Exception $e) {
        echo 0;
    }

  }


  public function getJson($result)
  {
     $this->json = json_encode($result);
      return $this->json;
  }
}



 ?>
