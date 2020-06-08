<?php
/**
 *
 */
 include_once '../../model/dbconnect.class.php';
class dump extends dbconnect
{
  private $result;
  private $json;

  function __construct()
  {
    dbconnect::__construct();
  }

  public function showDump()
  {
     $result = array();
     $data = array();
     $sql = "";
       $sql = "SELECT * FROM dump";

     dbconnect::dataQuery($sql);
     $this->result = dbconnect::dataResult();

     while ($row = $this->result->fetch_assoc()) {
         $data[]=$row;
     }

     $result["dump"] = $data;

     return $result;
  }

  public function storeAdd($serial_number,$spname_select,$sptype_select,$part_detail,$category_select,$purchasing_amount_number,$budget,$dump)
  {
    $sp_id = uniqid("spp-");
    $i=2;
    $spp_partnumber = sprintf('%04d', $i);

    $spare_part = "INSERT INTO spare_part (sp_id,sptype_id,spp_partnumber,part_detail,budget_id,purchasing_amount,dump,part_qty,status)
                        VALUES('".dbconnect::escapeString($sp_id)."','".dbconnect::escapeString($sptype_select)."','".dbconnect::escapeString($spp_partnumber)."',
                              '".dbconnect::escapeString($part_detail)."','".dbconnect::escapeString($budget)."','$purchasing_amount_number',
                              '".dbconnect::escapeString($dump)."','$purchasing_amount_number','have')";

    try {
        dbconnect::dataQuery($spare_part);

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
