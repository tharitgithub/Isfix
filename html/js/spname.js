$(document).ready(function() {

  onSelect();

});

function onSelect() {
  $("#category-select").html(categoryHtml());
  $("#category-select").change(function() {
      var spcategory_id = $("#category-select option:selected").val();
      $("#spname-select").html(spnameHtml(spcategory_id,"option"));
      $("#add_table_spname").empty();
      $("#add_table_spname").append(spnameHtml(spcategory_id,"table"));
      $("#spname_table").DataTable();
  });

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

function spnameHtml(spcategory_id,code) {
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
      if (code=="option") {
      spnameHtml += "<option disabled='disabled' selected='selected'>กรุณาเลือกตระกูล</option>";

      $.each(output.spname,
        function(index,value) {
          spnameHtml += "<option value='"+value.spname_id+"'>"+value.spname_name+"</option>";
      });
    }else {

         spnameHtml+="<table id='spname_table' class='table table-bordered table-hover table-show'>"+
               "<thead>"+
               "<tr>"+
               "<th class='text-center'>#</th>"+
               "<th class='text-left'>รายการ</th>"+
               "<th class='text-center'>จัดการ</th>"+
               "</tr>"+
               "</thead>"+

               "<tbody>";

               $.each(output.spname,
                 function(index,value) {
                   spnameHtml += "<tr>"+
                                  "<td class='text-center' width='0%'>"+ (no++) +"</td>"+
                                  "<td class='text-left'>"+value.spname_name+"</td>"+
                                  "<td class='text-center' width='0%'>"+
                                  "<button class='btn btn-primary btn-sm mr-1' href='#' data-id='" + value.spname_id + "'><i class='fas fa-edit mr-1'></i>แก้ไข</a>"+
                                  "</td>"+
                                  "<td>"+
                                  "<button class='btn btn-danger btn-sm' href='#' data-id='" + value.spname_id + "'><i class='fas fa-trash mr-1'></i>ลบ</a>"+
                                  "</td>"+
                                 "</tr>";
               });

         spnameHtml+="</tbody>";


         spnameHtml+="<tfoot>"+
                      "<tr>"+
                      "<th class='text-center'>#</th>"+
                      "<th class='text-left'>รายการ</th>"+
                      "<th class='text-center'>จัดการ</th>"+
                      "</tr>"+
                    "</tfoot>"+
             "</table>";
    }
    }
  });

  return spnameHtml;
}
