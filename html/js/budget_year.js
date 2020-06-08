$(document).ready(function() {
  $("#budget_yearAdd_button").click(function() {
    menu();
    link('control/bud_year_add.php', '#home', '#topic', menu["parts"]["l6"], "<i class='nav-icon fas fa-calendar-alt mr-1'></i>"+menu["parts"]["l6"], '#bread');
  });

  $("#table_budget_year").append(showBudget_year(getLoginLevel()));
                  datatables();

  function datatables() {
    $("#budget_year_table").DataTable({
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

  function showBudget_year(level) {
    var table="";
    var a="";

            $.ajax({
            url:'control/ajax/ajax_budget_year.php',
            async:false,
            type:'post',
            data:{id:"get_budget_year"},
            dataType:'json',
            success: function (response) {
                var no=1;
                table+="<table id='budget_year_table' class='table table-hover text-nowrap table-show'>"+
                       "<thead>"+
                       thead_tfoot(level)+
                       "</thead>"+
                       "<tbody>";
             $.each(response.budget_year,
              function(index,value) {
              table += "<tr>"+
                            "<td class='text-center'>"+ (no++) +"</td>"+
                            "<td class='text-left'>"+value.budgety_code+"</td>";

                  if (level=="SysADMIN") {
                     table+="<td class='text-center'>"+
                            "<button class='btn btn-primary btn-sm mr-1' href='#' data-id='" + value.budget_id + "'><i class='fas fa-edit'></i></a>"+
                            "<button class='btn btn-danger btn-sm' href='#' data-id='" + value.budget_id + "'><i class='fas fa-trash'></i></a>"+
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
      thead_tfoot+="<th width='30%' class='text-center'>#</th>";
      thead_tfoot+="<th>รายการ</th>";
      if (level=="SysADMIN") {
        thead_tfoot+="<th class='text-center'>จัดการ</th>";
      }
      thead_tfoot+="</tr>";
    }else {
      thead_tfoot+="<tr class='text-left'>";
      thead_tfoot+="<th width='30%' class='text-center'>#</th>";
      thead_tfoot+="<th>รายการ</th>";

      thead_tfoot+="</tr>";
    }

      return thead_tfoot;
  }


  function getLoginLevel() {
    var level="";
    $.ajax({
      url: 'control/ajax/ajax_budget_year.php',
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
