$(document).ready(function() {

  $("#storeAdd_button").click(function() {
    menu();
    link('control/store_add.php', '#home', '#topic', menu["store"]["header"], "<i class='nav-icon fas fa-store mr-1'></i>"+menu["store"]["header"], '#bread');
  });

  $("#category-select").html(categoryHtml());
  $("#category-select").change(function () {
    var spcategory_id = $("#category-select option:selected").val();
    $("#spname-select").html(spnameHtml(spcategory_id));
    $("#table_store").empty();
    $("#table_store").append(showStore(spcategory_id,"category",getLoginLevel()));
                              datatables();
  });

  $("#spname-select").change(function() {
      var spname_id = $("#spname-select option:selected").val();
      $("#sptype-select").html(sptypeHtml(spname_id));
      $("#table_store").empty();
      $("#table_store").append(showStore(spname_id,"spname",getLoginLevel()));
                              datatables();
  });

  $("#sptype-select").change(function() {
      var sptype_id = $("#sptype-select option:selected").val();
      $("#table_store").empty();
      $("#table_store").append(showStore(sptype_id,"sptype",getLoginLevel()));
                              datatables();
  });

  $("#table_store").append(showStore("","",getLoginLevel()));
                  datatables();

  $("#budget-select").html(budgetHtml());
  $("#dump-select").html(dumpHtml());


  function table(level) {
    var table="";
    table+="<table id='store_table' class='table table-hover text-nowrap table-show'>"+
           "<thead>"+
           thead_tfoot(level)+
           "</thead>"+
           "<tbody>"+
           "</tbody>"+
           "</table>";

    return table;
  }

  function datatables() {
    $("#store_table").DataTable({
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

  function showStore(id_key,key,level) {
    var table="";
    var a="";

            $.ajax({
            url:'control/ajax/ajax_store.php',
            async:false,
            type:'post',
            data:{id:"get_store",id_key:id_key,key:key},
            dataType:'json',
            success: function (response) {
                var no=1;
                table+="<table id='store_table' class='table table-hover text-nowrap table-show'>"+
                       "<thead>"+
                       thead_tfoot(level)+
                       "</thead>"+
                       "<tbody>";
             $.each(response.store,
              function(index,value) {
              table += "<tr>"+
                            "<td class='text-center'>"+ (no++) +"</td>"+
                            "<td class='text-left'>"+value.spname_name+" "+value.sptype_name+" "+value.part_detail+"</td>"+
                            "<td>"+value.spn_partnumber+" "+value.spt_partnumber+" "+value.spp_partnumber+"</td>"+
                            "<td class='text-right'>"+value.purchasing_amount+"</td>"+
                            "<td class='text-center'>"+value.budgety_code+"</td>"+
                            "<td class='text-right'>"+value.take_out+"</td>"+
                            "<td class='text-right'>"+value.part_qty+"</td>"+
                            "<td>"+value.dump_name+"</td>"+
                            "<td class='text-center'>";
                            if (value.status=="have") {
                              table+="<p class='text-success'>มีของ</p>";
                            }else {
                              table+="<p class='text-danger'>ของหมด</p>";
                            }
                            table+="</td>";

                  if (level=="SysADMIN") {
                     table+="<td class='text-center'>"+
                            "<button class='btn btn-primary btn-sm mr-1' href='#' data-id='" + value.sp_id + "'><i class='fas fa-edit'></i></a>"+
                            "<button class='btn btn-danger btn-sm' href='#' data-id='" + value.sp_id + "'><i class='fas fa-trash'></i></a>"+
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
      thead_tfoot+="<th class='text-center'>#</th>";
      thead_tfoot+="<th width='20%'>รายการ</th>";
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
      thead_tfoot+="<th width='20%'>รายการ</th>";
      thead_tfoot+="<th>Part Number</th>";
      thead_tfoot+="<th class='text-right'>จำนวนจัดซื้อ</th>";
      thead_tfoot+="<th class='text-right'>คงเหลือ</th>";
      thead_tfoot+="<th>ที่เก็บ</th>";
      thead_tfoot+="<th class='text-center'>สถานะอะไหล่</th>";
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

  $(document).on("submit","#store_add-form",function(e) {
    e.preventDefault();
     var serial_number = $("#serial-number").val();
     var spname_select = $("#spname-select").val();
     var sptype_select = $("#sptype-select").val();
     var part_detail = $("#part-detail").val();
     var category_select = $("#category-select").val();
     var purchasing_amount_number = $("#purchasing_amount-number").val();
     var budget = $("#budget-select").val();
     var dump = $("#dump-select").val();

     $.post("control/ajax/ajax_store.php",
     {
       id:"store_add",
       serial_number:serial_number,
       spname_select:spname_select,
       sptype_select:sptype_select,
       part_detail:part_detail,
       category_select:category_select,
       purchasing_amount_number:purchasing_amount_number,
       budget:budget,
       dump:dump
     },
     function(data) {

       Swal.fire({
         title: 'กำลังดำเนินการ',
         timer: 2000,
         timerProgressBar: true,
         onBeforeOpen: () => {
           Swal.showLoading()
           timerInterval = setInterval(() => {
             const content = Swal.getContent()
             if (content) {
               const b = content.querySelector('b')
               if (b) {
                 b.textContent = Swal.getTimerLeft()
               }
             }
           }, 100)
         },
         onClose: () => {
           clearInterval(timerInterval)
         }
       }).then((result) => {

         if (data==3) {
           Swal.fire({
             title: "บันทึกข้อมูลสำเร็จ",
             icon: 'success',
             timer: 1500,
             showConfirmButton: false
           })
         }else {
           Swal.fire({
             title: 'บันทึกข้อมูลไม่สำเร็จ',
             icon: 'error',
             timer: 1500,
             showConfirmButton: false
           })
         }

       })

     });


     setTimeout(function() {
           location.href = "home";
           //link('control/member.php', '#home', '#topic', "เพิ่มผู้ใช้งาน", '#bread');
       }, 4000);


     //location.href = "home";

     //return false;
  });


  function categoryHtml() {
    var optionCategory;

    $.ajax({
      url: 'control/ajax/ajax_store.php',
      async: false,
      type: 'post',
      data: {
        id: "get_category"
      },
      dataType: 'json',
      success: function (output) {
        optionCategory += "<option disabled='disabled' selected='selected'>กรุณาเลือกประเภท</option>";

        $.each(output.category,
          function(index,value) {
            optionCategory += "<option value='"+value.spcategory_id+"' data-spcategory_name='"+value.spcategory_name+"'>"+value.spcategory_name+"</option>";
        });
      }
    });

    return optionCategory;
  }


  function spnameHtml(spcategory_id) {
    var optionspname;

    $.ajax({
      url: 'control/ajax/ajax_store.php',
      async: false,
      type: 'post',
      data: {
        id: "get_spname",
        spcategory_id:spcategory_id
      },
      dataType: 'json',
      success: function (output) {
        optionspname += "<option disabled='disabled' selected='selected'>กรุณาเลือกหมวดหมู่</option>";

        $.each(output.spname,
          function(index,value) {
            optionspname += "<option value='"+value.spname_id+"'>"+value.spname_name+"</option>";
        });
      }
    });

    return optionspname;
  }

  function sptypeHtml(spname_id) {
    var optionsptype;

    $.ajax({
      url: 'control/ajax/ajax_store.php',
      async: false,
      type: 'post',
      data: {
        id: "get_sptype",
        spname_id:spname_id
      },
      dataType: 'json',
      success: function (output) {
        optionsptype += "<option disabled='disabled' selected='selected'>กรุณาเลือกชนิด</option>";

        $.each(output.sptype,
          function(index,value) {
            optionsptype += "<option value='"+value.sptype_id+"'>"+value.sptype_name+"</option>";
        });
      }
    });

    return optionsptype;
  }


  function budgetHtml() {
    var optionsptype;

    $.ajax({
      url: 'control/ajax/ajax_store.php',
      async: false,
      type: 'post',
      data: {
        id: "get_budget"
      },
      dataType: 'json',
      success: function (output) {
        optionsptype += "<option disabled='disabled' selected='selected'>กรุณาเลือกปีงบประมาณ</option>";

        $.each(output.budget,
          function(index,value) {
            optionsptype += "<option value='"+value.budget_id+"'>"+value.budgety_code+"</option>";
        });
      }
    });

    return optionsptype;
  }


  function dumpHtml() {
    var optiondump;

    $.ajax({
      url: 'control/ajax/ajax_store.php',
      async: false,
      type: 'post',
      data: {
        id: "get_dump"
      },
      dataType: 'json',
      success: function (output) {
        optiondump += "<option disabled='disabled' selected='selected'>กรุณาเลือกที่เก็บ</option>";

        $.each(output.dump,
          function(index,value) {
            optiondump += "<option value='"+value.dump_id+"'>"+value.dump_name+"</option>";
        });
      }
    });

    return optiondump;
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
