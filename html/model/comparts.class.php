<?php
/**
 *
 */
 include_once '../../model/dbconnect.class.php';
class comparts extends dbconnect
{
  private $result;
  private $json;

  function __construct()
  {
    dbconnect::__construct();
  }

  public function showComParts()
  {
     $result = array();
     $data = array();
     $sql = "";


       $sql = "SELECT *
                FROM spare_part p
				        LEFT JOIN spare_type t ON p.sptype_id = t.sptype_id
                LEFT JOIN spare_name n ON t.spname_id = n.spname_id
                LEFT JOIN budget_year y ON p.budget_id = y.budget_id
                WHERE n.spcategory_id = 'spc-5ea469210eb96'";

     dbconnect::dataQuery($sql);
     $this->result = dbconnect::dataResult();

     while ($row = $this->result->fetch_assoc()) {
         $data[]=$row;
     }

     $result["com_parts"] = $data;

     return $result;
  }


  public function getJson($result)
  {
     $this->json = json_encode($result);
      return $this->json;
  }
}



 ?>
