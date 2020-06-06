<?php

$menu = array("take_pay" => array("topic" => "ข้อมูลการเบิก-จ่าย",
                         'l1' => 'รายการเบิก-จ่าย'),
              "parts" => array("header" => "คลัง",
                          'topic' => 'จัดการข้อมูลคลัง',
                          'l1' => 'คลัง',
                          'l2' => 'ประเภท',
                          'l3' => 'หมวดหมู่',
                          'l4' => 'ยี่ห้อ',
                          'l5' => 'ที่เก็บ',
                          'l6' => 'ปีงบประมาณ'),
              "member" => array("header" => "ผู้ใช้งาน",
                          'l1' => 'จัดการผู้ใช้งาน')
             );

             if ($_POST["ID"]=="menu") {
               $result = array();
               $result["menu"] = $menu;
               $json = json_encode($result);
               echo $json;
             }

 ?>
