<?php
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

  class dbconnect
  {
    private $host;
    private $userDB;
    private $passDB;
    private $dbname;
    private $con;
    private $data;

    function __construct()
    {

      $this->host = "us-cdbr-east-06.cleardb.net";
      $this->userDB="ba8771a5a7b086";
      $this->passDB="e693e96a04639ca";
      $this->dbname="heroku_c5a3ad28870ab19";

      /*
      $this->host = "127.0.0.1";
      $this->userDB="root";
      $this->passDB="";
      $this->dbname="isfix";
      */

      $this->con = new mysqli($this->host,$this->userDB,$this->passDB,$this->dbname);
      $this->con->set_charset("utf8");
    }

    public function dataQuery($sql)
    {
        try {

            $this->data=$this->con->query($sql);
            return true;

        } catch (mysqli_sql_exception $e) {

            return $this->con->errno;
        }

    }

    public function dataResult()
    {
      return $this->data;
    }

    public function getData()
    {
        return $this->data->fetch_assoc();
    }

    function escapeString($string)
    {
      return $this->con->real_escape_string($string);
    }

    public function close(){
        $this->con->msqli_close();
    }


  }
