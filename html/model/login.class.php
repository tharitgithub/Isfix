<?php
#ตรวจสอบชื่อผู้ใช้งาน
class login extends dbconnect{
    private $objResult;

    function __construct(){
        dbconnect::__construct();
    }
    public function check($usr=null, $pwd=null){
        $sql = "SELECT username FROM user where username='".
            dbconnect::escapeString($usr).
            "' and password=password('".dbconnect::escapeString($pwd)."')";
            dbconnect::dataQuery($sql);
        $this->objResult = dbconnect::getData();
        //dbconnect::close();
        return $this->objResult;
    }

    public function getProperty($usr = null){
        $sql = "SELECT * FROM user u
                    LEFT JOIN userdetail us ON u.userde_id = us.userde_id
                    LEFT JOIN rank r ON us.rank_id = r.rank_id
                    LEFT JOIN position p ON us.pos_id = p.pos_id
                    where userName='".
            dbconnect::escapeString($usr)."'";
            dbconnect::dataQuery($sql);
        $this->objResult = dbconnect::getData();
        //dbconnect::close();
        return $this->objResult;
    }

}
 ?>
