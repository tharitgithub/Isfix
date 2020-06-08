<?php
/**
 *
 */
 include_once '../../model/dbconnect.class.php';
class store extends dbconnect
{
  private $result;
  private $json;

  function __construct()
  {
    dbconnect::__construct();
  }

  public function showStore($id_key,$key)
  {
     $result = array();
     $data = array();
     $sql = "";

        if ($key=="category") {
          $sql = "SELECT *
                   FROM spare_part p
                   LEFT JOIN spare_type t ON p.sptype_id = t.sptype_id
                   LEFT JOIN spare_name n ON t.spname_id = n.spname_id
                   LEFT JOIN budget_year y ON p.budget_id = y.budget_id
                   LEFT JOIN dump d ON p.dump_id = d.dump_id
                   WHERE n.spcategory_id = '$id_key'
                   ORDER BY spn_partnumber ASC";
        }elseif ($key=="spname") {
          $sql = "SELECT *
                   FROM spare_part p
                   LEFT JOIN spare_type t ON p.sptype_id = t.sptype_id
                   LEFT JOIN spare_name n ON t.spname_id = n.spname_id
                   LEFT JOIN budget_year y ON p.budget_id = y.budget_id
                   LEFT JOIN dump d ON p.dump_id = d.dump_id
                   WHERE t.spname_id = '$id_key'
                   ORDER BY spn_partnumber ASC";
        }elseif($key=="sptype") {
          $sql = "SELECT *
                   FROM spare_part p
                   LEFT JOIN spare_type t ON p.sptype_id = t.sptype_id
                   LEFT JOIN spare_name n ON t.spname_id = n.spname_id
                   LEFT JOIN budget_year y ON p.budget_id = y.budget_id
                   LEFT JOIN dump d ON p.dump_id = d.dump_id
                   WHERE p.sptype_id = '$id_key'
                   ORDER BY spn_partnumber ASC";
        }else {
          $sql = "SELECT *
                   FROM spare_part p
                   LEFT JOIN spare_type t ON p.sptype_id = t.sptype_id
                   LEFT JOIN spare_name n ON t.spname_id = n.spname_id
                   LEFT JOIN budget_year y ON p.budget_id = y.budget_id
                   LEFT JOIN dump d ON p.dump_id = d.dump_id
                   ORDER BY spn_partnumber ASC";
        }

     dbconnect::dataQuery($sql);
     $this->result = dbconnect::dataResult();

     while ($row = $this->result->fetch_assoc()) {
         $data[]=$row;
     }

     $result["store"] = $data;

     return $result;
  }


  public function getSpname($spcategory_id)
  {
    $result = array();
    $data = array();
    $sql = "SELECT * FROM spare_name
            WHERE spcategory_id = '$spcategory_id'
            ORDER BY spn_partnumber ASC";

    dbconnect::dataQuery($sql);
    $this->result = dbconnect::dataResult();

    while ($row = $this->result->fetch_assoc()) {
        $data[]=$row;
    }

    $result["spname"] = $data;

    return $result;
  }

  public function getSptype($spname_id)
  {
    $result = array();
    $data = array();
    $sql = "SELECT * FROM spare_type
            WHERE spname_id = '$spname_id'
            ORDER BY spt_partnumber ASC";

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

  public function getDump()
  {
    $result = array();
    $data = array();
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

    $spare_part = "INSERT INTO spare_part (sp_id,sptype_id,spp_partnumber,part_detail,budget_id,purchasing_amount,dump_id,part_qty,status)
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
