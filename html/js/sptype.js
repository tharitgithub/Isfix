$(document).ready(function() {

  $("#category-select").html(categoryHtml());
  $("#category-select").change(function() {
      var spcategory_id = $("#category-select option:selected").val();
      $("#spname-select").html(spnameHtml(spcategory_id));
      //$("#spname-select").empty();
      //$("#add_table_sptype").empty();
      //$("#add_table_sptype").append(spnameHtml(spcategory_id,"table"));
  });

  $("#spname-select").change(function() {
      var spname_id = $("#spname-select option:selected").val();
      $("#table_sptype").empty();
      $("#table_sptype").append(showSptype(spname_id,getLoginLevel()));
                              datatables();
  });

  $("#table_sptype").append(table(getLoginLevel()));
                  datatables();


  function table(level) {
    var table="";
    table+="<table id='sptype_table' class='table table-hover text-nowrap table-show'>"+
           "<thead>"+
           thead_tfoot(level)+
           "</thead>"+
           "<tbody>"+
           "</tbody>"+
           "</table>";

    return table;
  }

  function datatables() {
    $("#sptype_table").DataTable({
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


function showSptype(spname_id,level) {
  var sptypeHtml="";

  $.ajax({
    url: 'control/ajax/ajax_sptype.php',
    async: false,
    type: 'post',
    data: {
      id: "get_sptype",
      spname_id:spname_id
    },
    dataType: 'json',
    success: function (output) {
       var no=1;

        sptypeHtml+="<table id='sptype_table' class='table table-hover text-nowrap table-show'>"+
              "<thead>"+
              "<tr>"+
              thead_tfoot(level)+
              "</tr>"+
              "</thead>"+
              "<tbody>";

              $.each(output.sptype,
                function(index,value) {
                  sptypeHtml += "<tr>"+
                                 "<td class='text-center'>"+ (no++) +"</td>"+
                                 "<td class='text-left'>"+value.sptype_name+"</td>";

                   if (level=="SysADMIN") {
                     sptypeHtml+="<td class='text-center'>"+
                                    "<button class='btn btn-primary btn-sm mr-1' href='#' data-id='" + value.sptype_id + "'><i class='fas fa-edit'></i></a>"+
                                    "<button class='btn btn-danger btn-sm' href='#' data-id='" + value.sptype_id + "'><i class='fas fa-trash'></i></a>"+
                                    "</td>";
                   }

                     sptypeHtml+="</tr>";
                   });

        sptypeHtml+="</tbody>"+
                    "</table>";

    }
  });

  return sptypeHtml;
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



function categoryHtml() {
  var categoryHtml="";

  $.ajax({
    url: 'control/ajax/ajax_sptype.php',
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

function spnameHtml(spcategory_id) {
  var spnameHtml="";

  $.ajax({
    url: 'control/ajax/ajax_sptype.php',
    async: false,
    type: 'post',
    data: {
      id: "get_spname",
      spcategory_id:spcategory_id
    },
    dataType: 'json',
    success: function (output) {
      spnameHtml += "<option disabled='disabled' selected='selected'>กรุณาเลือกหมวดหมู่</option>";

      $.each(output.spname,
        function(index,value) {
          spnameHtml += "<option value='"+value.spname_id+"'>"+value.spname_name+"</option>";
      });

    }
  });

  return spnameHtml;
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
