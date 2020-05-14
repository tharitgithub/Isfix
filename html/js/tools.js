$(document).ready(function() {

  showTools();

  $(document).on("click","#tools_add",function () {
    link('control/tools_add.php', '#home', '#topic', "เพิ่มเครื่องมือ", '#bread');
  });

  $("#spname-select").html(spnameOptionHtml());

  $("#sptype-select").html(sptypeOptionHtml());

  $("#category-select").html(categoryOptionHtml());

  $("#budget-select").html(budgetOptionHtml());


  function showTools() {

    $.post("control/ajax/ajax_tools.php",
    {
      id:"get_loginlevel"
    },
    function(level) {

        button(level);

    $.post("control/ajax/ajax_tools.php",
      function(data) {
        var table="";
        var i = 1;

        $.each(data.tools, function(index, value) {

          if (level!="OFFICER") {
            table += "<tr class='text-left'>";
            table += "<td class='text-center'>" + (i++) + "</td>";
            table += "<td class='text-left'>"+value.part_detail+"</td>";
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
            table += "<td class='text-left'>"+value.part_detail+"</td>";
            table += "<td>" +value.spn_partnumber+"-"+value.spt_partnumber+"-"+value.spp_partnumber+"</td>";
            table += "<td class='text-right'>" +value.purchasing_amount+ "</td>";
            table += "<td class='text-right'>" +value.part_qty+ "</td>";
            table += "<td></td>";
            table += "<td class='text-center'>" +value.status+ "</td>";
            table += "</tr>";
          }

        });
        thead_tfoot(level);
        $("#tools_tbody").html(table);
        $('#tools').DataTable();
      },"JSON");

      });
  }

  function button(level) {
    button="";
    button += "<h3 class='card-title mr-1'><i class='nav-icon fas fa-laptop mr-1'></i>รายการเครื่องมือ</h3>";
    if (level!="OFFICER") {
      button += "<div class='card-tools'>"+
                  "<div class='input-group'>"+
                    "<a class='btn bg-gradient-success mr-2' href='#' id='tools_add'><i class='fas fa-plus mr-1'></i>เพิ่มเครื่องมือ</a>"+
                  "</div>"+
                "</div>";
    }
    $("#tools_button").html(button);
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


      $("#tools_thead").html(thead_tfoot);
      $("#tools_tfoot").html(thead_tfoot);
  }


  function spnameOptionHtml() {
    var optionspname;

    $.ajax({
      url: 'control/ajax/ajax_tools.php',
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

  function sptypeOptionHtml() {
    var optionsptype;

    $.ajax({
      url: 'control/ajax/ajax_tools.php',
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

  function categoryOptionHtml() {
    var optionsptype;

    $.ajax({
      url: 'control/ajax/ajax_tools.php',
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

  function budgetOptionHtml() {
    var optionsptype;

    $.ajax({
      url: 'control/ajax/ajax_tools.php',
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



  $(document).on("submit","#tools_add-form",function() {
     var serial_number = $("#serial-number").val();
     var spname_select = $("#spname-select").val();
     var sptype_select = $("#sptype-select").val();
     var part_detail = $("#part-detail").val();
     var category_select = $("#category-select").val();
     var purchasing_amount_number = $("#purchasing_amount-number").val();
     var budget = $("#budget-select").val();
     var dump = $("#dump").val();

     $.post("control/ajax/ajax_tools.php",
     {
       id:"tools_add",
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

            $("#serial-number").val("");
            $("#spname-select").val("");
            $("#sptype-select").val("");
            $("#part-detail").val("");
            $("#category-select").val("");
            $("#purchasing_amount-number").val("");
            $("#budget-select").val("");
            $("#dump").val("");

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

});
