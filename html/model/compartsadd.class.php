<?php
/**
 *
 */
include_once '../../model/dbconnect.class.php';
class compartsadd extends dbconnect
{
  private $result;
  private $json;

  function __construct()
  {
    dbconnect::__construct();
  }

  public function getSpname()
  {
    $result = array();
    $data = array();
    $sql = "SELECT * FROM spare_name ORDER BY spn_partnumber ASC";

    dbconnect::dataQuery($sql);
    $this->result = dbconnect::dataResult();

    while ($row = $this->result->fetch_assoc()) {
        $data[]=$row;
    }

    $result["spname"] = $data;

    return $result;
  }

  public function getSptype()
  {
    $result = array();
    $data = array();
    $sql = "SELECT * FROM spare_type ORDER BY spt_partnumber ASC";

    dbconnect::dataQuery($sql);
    $this->result = dbconnect::dataResult();

    while ($row = $this->result->fetch_assoc()) {
        $data[]=$row;
    }

    $result["sptype"] = $data;

    return $result;
  }

  public function getCategory()
  {
    $result = array();
    $data = array();
    $sql = "SELECT * FROM spare_category";

    dbconnect::dataQuery($sql);
    $this->result = dbconnect::dataResult();

    while ($row = $this->result->fetch_assoc()) {
        $data[]=$row;
    }

    $result["category"] = $data;

    return $result;
  }

  public function getBudget()
  {
    $result = array();
    $data = array();
    $sql = "SELECT * FROM budget_year";

    dbconnect::dataQuery($sql);
    $this->result = dbconnect::dataResult();

    while ($row = $this->result->fetch_assoc()) {
        $data[]=$row;
    }

    $result["budget"] = $data;

    return $result;
  }

  public function comPartsAdd($serial_number,$spname_select,$sptype_select,$part_detail,$category_select,$purchasing_amount_number,$budget,$dump)
  {
    $sp_id = uniqid("spp-");
    $i=2;
    $spp_partnumber = sprintf('%04d', $i);

    $spare_part = "INSERT INTO spare_part (sp_id,sptype_id,spp_partnumber,part_detail,spcategory_id,budget_id,purchasing_amount,dump,part_qty,status)
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
