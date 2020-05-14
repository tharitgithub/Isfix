$(document).ready(function() {


  $("#storeAdd_button").click(function() {
    link('control/store_add.php', '#home', '#topic', menu("parts","l1"), '#bread');
  });

  $("#spname-select").html(spnameHtml());
  $("#sptype-select").html(sptypeHtml());
  $("#budget-select").html(budgetHtml());
  $("#category-select").html(categoryHtml());

  $("#category-select").change(function () {
    var spcategory_id = $("#category-select option:selected").val();
    $("#table_store").empty();
    $("#table_store").append(showStore(spcategory_id));
    $("#store_table").DataTable();
  });



  function showStore(spcategory_id) {
    var table="";
    var a="";

    $.ajax({
      url: 'control/ajax/ajax_store.php',
      async: false,
      type: 'post',
      data: {
        id: "get_loginlevel"
      },
      success: function (level) {

          $.ajax({
            url:'control/ajax/ajax_store.php',
            async:false,
            type:'post',
            data:{id:"get_store",spcategory_id:spcategory_id},
            dataType:'json',
            success: function (response) {
                var no=1;
                table+="<table id='store_table' class='table table-bordered table-hover table-show'>"+
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
                            "<td>"+value.dump+"</td>"+
                            "<td class='text-center'>"+value.status+"</td>";

                  if (level=="SysADMIN") {
                     table+="<td class='text-center'>"+
                            "<button class='btn btn-primary btn-sm mr-1' href='#' data-id='" + value.sp_id + "'><i class='fas fa-edit mr-1'></i>แก้ไข</a>"+
                            "<button class='btn btn-danger btn-sm' href='#' data-id='" + value.sp_id + "'><i class='fas fa-trash mr-1'></i>ลบ</a>"+
                            "</td>";
                            }

                     table+="</tr>";
                       });


                 table+="</tbody>"+
                       "<tfoot>"+
                       thead_tfoot(level)+
                       "</tfoot>"+
                       "</table>";

            }
          });//end of get_store

      }
      });//end of get_loginlevel

    return table;
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

      return thead_tfoot;
  }


  $(document).on("submit","#store_add-form",function() {

     var serial_number = $("#serial-number").val();
     var spname_select = $("#spname-select").val();
     var sptype_select = $("#sptype-select").val();
     var part_detail = $("#part-detail").val();
     var category_select = $("#category-select").val();
     var purchasing_amount_number = $("#purchasing_amount-number").val();
     var budget = $("#budget-select").val();
     var dump = $("#dump").val();

     $.post("control/ajax/ajax_store.php",
     {
       id:"store_add",
       serial_number:serial_number,
       spname_select:spname_select,
       sptype_select:sptype_select,
       part_detail:part_detail,
       category_select:"spc-5ea469210eb96",
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

     return false;
  });


  function spnameHtml() {
    var optionspname;

    $.ajax({
      url: 'control/ajax/ajax_store.php',
      async: false,
      type: 'post',
      data: {
        id: "get_spname"
      },
      dataType: 'json',
      success: function (output) {
        optionspname += "<option disabled='disabled' selected='selected'>กรุณาเลือกตระกูล</option>";

        $.each(output.spname,
          function(index,value) {
            optionspname += "<option value='"+value.spname_id+"'>"+value.spname_name+"</option>";
        });
      }
    });

    return optionspname;
  }

  function sptypeHtml() {
    var optionsptype;

    $.ajax({
      url: 'control/ajax/ajax_store.php',
      async: false,
      type: 'post',
      data: {
        id: "get_sptype"
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

  function categoryHtml() {
    var optionsptype;

    $.ajax({
      url: 'control/ajax/ajax_store.php',
      async: false,
      type: 'post',
      data: {
        id: "get_category"
      },
      dataType: 'json',
      success: function (output) {
        optionsptype += "<option disabled='disabled' selected='selected'>กรุณาเลือกประเภท</option>";

        $.each(output.category,
          function(index,value) {
            optionsptype += "<option value='"+value.spcategory_id+"'>"+value.spcategory_name+"</option>";
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



  function menu(topic,list) {
    var text="";

  $.ajax({
    url: 'control/topic_menu.php',
    async: false,
    data: {ID:"menu"},
    type: 'post',
    dataType: 'json',
    success: function(output) {

      menu = output.menu;

      text=menu[topic][list];
    }
  });

    return text;
  }

});
