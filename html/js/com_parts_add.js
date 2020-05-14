$(document).ready(function() {

$("#spname-select").html(spnameOptionHtml());

$("#sptype-select").html(sptypeOptionHtml());

$("#category-select").html(categoryOptionHtml());

$("#budget-select").html(budgetOptionHtml());


$(document).on("submit","#com_parts_add-form",function() {

   var serial_number = $("#serial-number").val();
   var spname_select = $("#spname-select").val();
   var sptype_select = $("#sptype-select").val();
   var part_detail = $("#part-detail").val();
   var category_select = $("#category-select").val();
   var purchasing_amount_number = $("#purchasing_amount-number").val();
   var budget = $("#budget-select").val();
   var dump = $("#dump").val();

   $.post("control/ajax/ajax_com_parts_add.php",
   {
     id:"com_parts_add",
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

   return false;
});

  function spnameOptionHtml() {
    var optionspname;

    $.ajax({
      url: 'control/ajax/ajax_com_parts_add.php',
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
      url: 'control/ajax/ajax_com_parts_add.php',
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
      url: 'control/ajax/ajax_com_parts_add.php',
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
      url: 'control/ajax/ajax_com_parts_add.php',
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

});
