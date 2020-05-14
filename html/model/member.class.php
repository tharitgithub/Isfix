<?php
/**
 *
 */
include_once '../../model/dbconnect.class.php';
class member extends dbconnect
{
  private $result;
  private $json;

  function __construct()
  {
    dbconnect::__construct();
  }

  public function showMember($level)
  {
     $result = array();
     $data = array();
     $member = "";
     if ($level=="SysADMIN") {
       $member = "SELECT * FROM user u
                   LEFT JOIN userdetail us ON u.userde_id = us.userde_id
                   LEFT JOIN rank r ON us.rank_id = r.rank_id
                   LEFT JOIN position p ON us.pos_id = p.pos_id
                   WHERE level = 'ADMIN' OR level = 'OFFICER'
                   order by r.rank_priority ASC";
     }else {
       $member = "SELECT * FROM user u
                   LEFT JOIN userdetail us ON u.userde_id = us.userde_id
                   LEFT JOIN rank r ON us.rank_id = r.rank_id
                   LEFT JOIN position p ON us.pos_id = p.pos_id
                   WHERE level = 'OFFICER'
                   order by r.rank_priority ASC";
     }

     dbconnect::dataQuery($member);
     $this->result = dbconnect::dataResult();

     while ($row = $this->result->fetch_assoc()) {
         $data[]=$row;
     }

     $result["member"] = $data;

     return $result;
  }

  public function permission_Update($user_id,$status)
  {

      $sql = "UPDATE user set status = '$status' WHERE user_id = '".
      dbconnect::escapeString($user_id)."'";

      dbconnect::dataQuery($sql);

  }

  public function get_level($user_id)
  {
      $sql = "SELECT level FROM user WHERE user_id = '".
      dbconnect::escapeString($user_id)."'";

      dbconnect::dataQuery($sql);
      $this->result = dbconnect::dataResult();

      while ($row = $this->result->fetch_assoc()) {
          $data[]=$row;
      }

      $result["level"] = $data;

      return $result;
  }

  public function level_Update($user_id,$newLevel)
  {
    $sql = "UPDATE user set level = '$newLevel' WHERE user_id = '".
    dbconnect::escapeString($user_id)."'";

    dbconnect::dataQuery($sql);
  }

  public function password_Confirm($username,$password)
  {
    $sql = "SELECT username FROM user where username='".
        dbconnect::escapeString($username).
        "' and password=password('".dbconnect::escapeString(md5($password))."')";
        dbconnect::dataQuery($sql);
    $this->result = dbconnect::getData();
    //dbconnect::close();
    return $this->result;

  }

  public function get_Userde_id($user_id)
  {

      $sql = "SELECT u.userde_id
              FROM user u
              INNER JOIN userdetail ud
              ON u.userde_id = ud.userde_id
              WHERE u.user_id = '".
              dbconnect::escapeString($user_id)."'";
              dbconnect::dataQuery($sql);
      $this->result = dbconnect::getData();

      return $this->result;

}

public function delete_Member($user_id,$userde_id)
{
      $sql1 = "DELETE FROM user
               WHERE user_id = '".
               dbconnect::escapeString($user_id)."'";


      $sql2 = "DELETE FROM userdetail
               WHERE userde_id = '".
               dbconnect::escapeString($userde_id)."'";

               dbconnect::dataQuery($sql1);
               dbconnect::dataQuery($sql2);

  }


  public function getJson($result)
  {
     $this->json = json_encode($result);
      return $this->json;
  }

}


 ?>
