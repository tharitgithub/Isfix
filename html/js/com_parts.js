$(document).ready(function() {

  showSparePart();

  $(document).on("click","#com_parts_add",function () {
    link('control/com_parts_add.php', '#home', '#topic', "เพิ่มอะไหล่คอมพิวเตอร์", '#bread');
  });

  function showSparePart() {

    $.post("control/ajax/ajax_com_parts.php",
    {
      id:"get_loginlevel"
    },
    function(level) {

        button(level);

    $.post("control/ajax/ajax_com_parts.php",
      function(data) {
        var table="";
        var i = 1;

        $.each(data.com_parts, function(index, value) {

          if (level!="OFFICER") {
            table += "<tr class='text-left'>";
            table += "<td class='text-center'>" + (i++) + "</td>";
            table += "<td class='text-left'>"+value.spname_name+" "+value.sptype_name+" "+value.part_detail+"</td>";
            table += "<td>" +value.spn_partnumber+"-"+value.spt_partnumber+"-"+value.spp_partnumber+"</td>";
            table += "<td class='text-right'>" +value.purchasing_amount+ "</td>";
            table += "<td class='text-center'>" +value.budgety_code+ "</td>";
            table += "<td class='text-right'>" +value.take_out+ "</td>";
            table += "<td class='text-right'>" +value.part_qty+ "</td>";
            table += "<td>"+value.dump+"</td>";
            table += "<td class='text-center'>" +value.status+ "</td>";

            if (level=="SysADMIN") {
              table += "<td class='text-center'>";
              table += "<button class='btn btn-primary btn-sm mr-1' href='#' data-id='" + value.part_id + "'><i class='fas fa-edit'></i> แก้ไข</a>";
              table += "<button class='btn btn-danger btn-sm' href='#' data-id='" + value.part_id + "'><i class='fas fa-trash'></i> ลบ</a>";
              table += "</td>";
            }
            table += "</tr>";
          }else {
            table += "<tr class='text-left'>";
            table += "<td class='text-center'>" + (i++) + "</td>";
            table += "<td class='text-left'>"+value.spname_name+" "+value.sptype_name+" "+value.part_detail+"</td>";
            table += "<td>" +value.spn_partnumber+"-"+value.spt_partnumber+"-"+value.spp_partnumber+"</td>";
            table += "<td class='text-right'>" +value.purchasing_amount+ "</td>";
            table += "<td class='text-right'>" +value.part_qty+ "</td>";
            table += "<td></td>";
            table += "<td class='text-center'>" +value.status+ "</td>";
            table += "</tr>";
          }

        });
        thead_tfoot(level);
        $("#com_parts_tbody").html(table);
        $('#com_parts').DataTable();
      },"JSON");

      });
  }

  function button(level) {
    button="";
    button += "<h3 class='card-title mr-1'><i class='nav-icon fas fa-laptop mr-1'></i>รายการอะไหล่</h3>";
    if (level!="OFFICER") {
      button += "<div class='card-tools'>"+
                  "<div class='input-group'>"+
                    "<a class='btn bg-gradient-success mr-2' href='#' id='com_parts_add'><i class='fas fa-plus mr-1'></i>เพิ่มอะไหล่คอมพิวเตอร์</a>"+
                  "</div>"+
                "</div>";
    }
    $("#com_parts_button").html(button);
  }


  function thead_tfoot(level) {
    var thead_tfoot="";
    if (level!="OFFICER") {
      thead_tfoot+="<tr class='text-left'>";
      thead_tfoot+="<th class='text-center'>#</th>";
      thead_tfoot+="<th>รายการ</th>";
      thead_tfoot+="<th>Part Number</th>";
      thead_tfoot+="<th class='text-right'>จำนวนจัดซื้อ</th>";
      thead_tfoot+="<th class='text-center'>ปีงบประมาณ</th>";
      thead_tfoot+="<th class='text-right'>เบิกจ่าย</th>";
      thead_tfoot+="<th class='text-right'>คงเหลือ</th>";
      thead_tfoot+="<th>ที่เก็บ</th>";
      thead_tfoot+="<th class='text-center'>สถานะอะไหล่</th>";
      if (level=="SysADMIN") {
        thead_tfoot+="<th class='text-center'>จัดการ</th>";
      }
      thead_tfoot+="</tr>";
    }else {
      thead_tfoot+="<tr class='text-left'>";
      thead_tfoot+="<th class='text-center'>#</th>";
      thead_tfoot+="<th>รายการ</th>";
      thead_tfoot+="<th>Part Number</th>";
      thead_tfoot+="<th class='text-right'>จำนวนจัดซื้อ</th>";
      thead_tfoot+="<th class='text-right'>คงเหลือ</th>";
      thead_tfoot+="<th>ที่เก็บ</th>";
      thead_tfoot+="<th class='text-center'>สถานะอะไหล่</th>";
      thead_tfoot+="</tr>";
    }


      $("#com_parts_thead").html(thead_tfoot);
      $("#com_parts_tfoot").html(thead_tfoot);
  }

});
