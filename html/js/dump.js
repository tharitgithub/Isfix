$(document).ready(function() {
  $("#dumpAdd_button").click(function() {
    menu();
    link('control/dump_add.php', '#home', '#topic', menu["parts"]["l5"], "<i class='nav-icon fas fa-th-list mr-1'></i>"+menu["parts"]["l5"], '#bread');
  });

  $("#table_dump").append(showDump(getLoginLevel()));
                  datatables();

  function datatables() {
    $("#dump_table").DataTable({
      ordering:false,
      lengthMenu:[[5,10,15,20,-1],[5,10,15,20,"All"]],
      "oLanguage": {
                "sLengthMenu": "แสดง _MENU_ แถว ต่อหน้า",
                "sZeroRecords": "ไม่พบข้อมูล",
                "sEmptyTable":     "ไม่มีข้อมูลในตาราง",
                "sInfo": "แสดง _START_ ถึง _END_ ของ _TOTAL_ แถว",
                "sInfoEmpty": "แสดง 0 ถึง 0 ของ 0 แถว",
                "sInfoFiltered": "(จากแถวทั้งหมด _MAX_ แถว)",
                "sSearch": "ค้นหา :",
                "oPaginate": {
                            "sFirst":    "หน้าแรก",
                            "sPrevious": "ก่อนหน้า",
                            "sNext":     "ถัดไป",
                            "sLast":     "หน้าสุดท้าย"
                              },
                "oAria": {
                            "sSortAscending":  ": เปิดใช้งานการเรียงข้อมูลจากน้อยไปมาก",
                            "sSortDescending": ": เปิดใช้งานการเรียงข้อมูลจากมากไปน้อย"
                          }
              }
    });
  }

  function showDump(level) {
    var table="";
    var a="";

            $.ajax({
            url:'control/ajax/ajax_dump.php',
            async:false,
            type:'post',
            data:{id:"get_dump"},
            dataType:'json',
            success: function (response) {
                var no=1;
                table+="<table id='dump_table' class='table table-hover text-nowrap table-show'>"+
                       "<thead>"+
                       thead_tfoot(level)+
                       "</thead>"+
                       "<tbody>";
             $.each(response.dump,
              function(index,value) {
              table += "<tr>"+
                            "<td class='text-center'>"+ (no++) +"</td>"+
                            "<td class='text-left'>"+value.dump_name+"</td>";

                  if (level=="SysADMIN") {
                     table+="<td class='text-center'>"+
                            "<button class='btn btn-primary btn-sm mr-1' href='#' data-id='" + value.dump_id + "'><i class='fas fa-edit'></i></a>"+
                            "<button class='btn btn-danger btn-sm' href='#' data-id='" + value.dump_id + "'><i class='fas fa-trash'></i></a>"+
                            "</td>";
                            }

                     table+="</tr>";

                       });

                       table+="</tbody>"+
                              "</table>";

            }
          });//end of get_store

    return table;
  }

  function thead_tfoot(level) {
    var thead_tfoot="";
    if (level!="OFFICER") {
      thead_tfoot+="<tr class='text-left'>";
      thead_tfoot+="<th width='10%' class='text-center'>#</th>";
      thead_tfoot+="<th>รายการ</th>";
      if (level=="SysADMIN") {
        thead_tfoot+="<th width='20%' class='text-center'>จัดการ</th>";
      }
      thead_tfoot+="</tr>";
    }else {
      thead_tfoot+="<tr class='text-left'>";
      thead_tfoot+="<th width='10%' class='text-center'>#</th>";
      thead_tfoot+="<th>รายการ</th>";

      thead_tfoot+="</tr>";
    }

      return thead_tfoot;
  }


  function getLoginLevel() {
    var level="";
    $.ajax({
      url: 'control/ajax/ajax_store.php',
      async: false,
      type: 'post',
      data: {
        id: "get_loginlevel"
      },
      success: function (response) {
        level=response;
      }
    });
    return level;
  }

  function menu() {

  $.ajax({
    url: 'control/topic_menu.php',
    async: false,
    data: {ID:"menu"},
    type: 'post',
    dataType: 'json',
    success: function(output) {

      menu = output.menu;
    }
  });
  }

});
