<?php

if (isset($_SESSION["userlevel"])) {

if ($_SESSION["userlevel"]=="SysADMIN") {
  include "menu/sysadmin.php";
}elseif ($_SESSION["userlevel"]=="ADMIN") {
  include 'menu/admin.php';
}else {
  include "menu/officer.php";
}

}
 ?>
