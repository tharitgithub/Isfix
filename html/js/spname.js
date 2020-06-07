$(document).ready(function() {

  $("#spnameAdd_button").click(function() {
    menu();
    link('control/spname_add.php', '#home', '#topic', menu["parts"]["l3"],"<i class='nav-icon fas fa-layer-group mr-1'></i>"+menu["parts"]["l3"], '#bread');
  });

  $("#category-select").html(categoryHtml());
  $("#category-select").change(function() {
      var spcategory_id = $("#category-select option:selected").val();
      $("#table_spname").empty();
      $("#table_spname").append(showSpname(spcategory_id,getLoginLevel()));
                                datatables();
  });

  $("#table_spname").append(table(getLoginLevel()));
                  datatables();

  function table(level) {
    var table="";
    table+="<table id='spname_table' class='table table-hover text-nowrap table-show'>"+
           "<thead>"+
           thead_tfoot(level)+
           "</thead>"+
           "<tbody>"+
           "</tbody>"+
           "</table>";

    return table;
  }

  function datatables() {
    $("#spname_table").DataTable({
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


function showSpname(spcategory_id,level) {
  var spnameHtml="";

  $.ajax({
    url: 'control/ajax/ajax_spname.php',
    async: false,
    type: 'post',
    data: {
      id: "get_spname",
      spcategory_id:spcategory_id
    },
    dataType: 'json',
    success: function (output) {
        var no=1;

         spnameHtml+="<table id='spname_table' class='table table-hover text-nowrap table-show'>"+
               "<thead>"+
               thead_tfoot(level)+
               "</thead>"+
               "<tbody>";

               $.each(output.spname,
                 function(index,value) {
                   spnameHtml += "<tr>"+
                                  "<td class='text-center' width='0%'>"+ (no++) +"</td>"+
                                  "<td class='text-left'>"+value.spname_name+"</td>";

                      if(level=="SysADMIN"){
                      spnameHtml+="<td class='text-center' width='0%'>"+
                                  "<button class='btn btn-primary btn-sm mr-1' href='#' data-id='" + value.spname_id + "'><i class='fas fa-edit mr-1'></i>แก้ไข</a>"+
                                  "<button class='btn btn-danger btn-sm' href='#' data-id='" + value.spname_id + "'><i class='fas fa-trash mr-1'></i>ลบ</a>"+
                                  "</td>";
                                }

                      spnameHtml+="</tr>";
               });
         spnameHtml+="</tbody>"+
                     "</table>";
    }

  });

  return spnameHtml;
}

function thead_tfoot(level) {
  var thead_tfoot="";
  if (level!="OFFICER") {
    thead_tfoot+="<tr class='text-left'>";
    thead_tfoot+="<th class='text-center'>#</th>";
    thead_tfoot+="<th width='20%'>รายการ</th>";
    if (level=="SysADMIN") {
      thead_tfoot+="<th class='text-center'>จัดการ</th>";
    }
    thead_tfoot+="</tr>";
  }else {
    thead_tfoot+="<tr class='text-left'>";
    thead_tfoot+="<th class='text-center'>#</th>";
    thead_tfoot+="<th width='20%'>รายการ</th>";
    thead_tfoot+="</tr>";
  }

    return thead_tfoot;
}

function categoryHtml() {
  var categoryHtml="";

  $.ajax({
    url: 'control/ajax/ajax_spname.php',
    async: false,
    type: 'post',
    data: {
      id: "get_category"
    },
    dataType: 'json',
    success: function (output) {
      categoryHtml += "<option disabled='disabled' selected='selected'>กรุณาเลือกประเภท</option>";

      $.each(output.category,
        function(index,value) {
          categoryHtml += "<option value='"+value.spcategory_id+"'>"+value.spcategory_name+"</option>";
      });
    }
  });

  return categoryHtml;
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
