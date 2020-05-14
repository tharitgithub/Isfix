<?php
/**
 *
 */
include_once '../../model/dbconnect.class.php';
class memberadd extends dbconnect
{
  private $result;
  private $json;

  function __construct()
  {
    dbconnect::__construct();
  }

  public function getRank()
  {
    $result = array();
    $data = array();
    $sql = "SELECT * FROM rank ORDER BY rank_priority ASC";

    dbconnect::dataQuery($sql);
    $this->result = dbconnect::dataResult();

    while ($row = $this->result->fetch_assoc()) {
        $data[]=$row;
    }

    $result["rank"] = $data;

    return $result;
  }

  public function getPosition()
  {
    $result = array();
    $data = array();
    $sql = "SELECT * FROM position";

    dbconnect::dataQuery($sql);
    $this->result = dbconnect::dataResult();

    while ($row = $this->result->fetch_assoc()) {
        $data[]=$row;
    }

    $result["position"] = $data;

    return $result;
  }

  public function getDepartment()
  {
    $result = array();
    $data = array();
    $sql = "SELECT d.dep_id,d.dep_short,o.org_short
            FROM department d
            LEFT JOIN organization o
            ON d.org_id = o.org_id";

    dbconnect::dataQuery($sql);
    $this->result = dbconnect::dataResult();

    while ($row = $this->result->fetch_assoc()) {
        $data[]=$row;
    }

    $result["department"] = $data;

    return $result;
  }

  public function memberAdd($username,$password,$rank,$name,$lastname,$phonenumber,$position,$department,$permiss)
  {
    $userde_id = uniqid("ud-");
    $user_id = uniqid("us-");
    $password = md5($password);

    $userdetail = "INSERT INTO userdetail (userde_id,rank_id,firstname,lastname,pos_id,tel,dep_id)
                        VALUES('".dbconnect::escapeString($userde_id)."','".dbconnect::escapeString($rank)."','".dbconnect::escapeString($name)."','".dbconnect::escapeString($lastname)."','".dbconnect::escapeString($position)."','".dbconnect::escapeString($phonenumber)."','".dbconnect::escapeString($department)."')";
    $user = "INSERT INTO user
              VALUES('".dbconnect::escapeString($user_id)."','".dbconnect::escapeString($username)."',password('".dbconnect::escapeString($password)."'),'".dbconnect::escapeString($userde_id)."','".dbconnect::escapeString($permiss)."','pending')";


    try {
        dbconnect::dataQuery($userdetail);
        dbconnect::dataQuery($user);

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
