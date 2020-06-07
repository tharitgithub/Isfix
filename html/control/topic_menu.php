<?php

$menu = array("take_pay" => array("header" => "ข้อมูลการเบิก-จ่าย"),
              "store" => array("header" => "คลัง"),
              "parts" => array('header' => 'จัดการข้อมูลคลัง',
                          'l1' => 'ประเภท',
                          'l2' => 'หมวดหมู่',
                          'l3' => 'ชนิด',
                          'l4' => 'ยี่ห้อ',
                          'l5' => 'ที่เก็บ',
                          'l6' => 'ปีงบประมาณ'),
              "member" => array("header" => "จัดการผู้ใช้งาน")
             );

             if ($_POST["ID"]=="menu") {
               $result = array();
               $result["menu"] = $menu;
               $json = json_encode($result);
               echo $json;
             }

 ?>
