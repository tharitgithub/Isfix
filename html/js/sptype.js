$(document).ready(function() {

  onSelect();

});

function onSelect() {
  $("#category-select").html(categoryHtml());
  $("#category-select").change(function() {
      var spcategory_id = $("#category-select option:selected").val();
      $("#spname-select").html(spnameHtml(spcategory_id));
      //$("#spname-select").empty();
      $("#add_table_sptype").empty();
      //$("#add_table_sptype").append(spnameHtml(spcategory_id,"table"));
  });

  $("#spname-select").change(function() {
      var spname_id = $("#spname-select option:selected").val();
      $("#add_table_sptype").empty();
      $("#add_table_sptype").append(sptypeHtml(spname_id,"table"));
      $("#sptype_table").DataTable();

  });


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
      spnameHtml += "<option disabled='disabled' selected='selected'>กรุณาเลือกตระกูล</option>";

      $.each(output.spname,
        function(index,value) {
          spnameHtml += "<option value='"+value.spname_id+"'>"+value.spname_name+"</option>";
      });

    }
  });

  return spnameHtml;
}

function sptypeHtml(spname_id,code) {
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
      if (code=="option") {
        sptypeHtml += "<option disabled='disabled' selected='selected'>กรุณาเลือกชนิด</option>";

        $.each(output.sptype,
          function(index,value) {
            sptypeHtml += "<option value='"+value.sptype_id+"'>"+value.sptype_name+"</option>";
        });
      }else {

        sptypeHtml+="<table id='sptype_table' class='table table-bordered table-hover table-show'>"+
              "<thead class='highlight'>"+
              "<tr>"+
              "<th class='text-center'>#</th>"+
              "<th class='text-left'>รายการ</th>"+
              "<th class='text-center'>จัดการ</th>"+
              "</tr>"+
              "</thead>"+

              "<tbody>";

              $.each(output.sptype,
                function(index,value) {
                  sptypeHtml += "<tr>"+
                                 "<td class='text-center' width='5%'>"+ (no++) +"</td>"+
                                 "<td class='text-left'>"+value.sptype_name+"</td>"+
                                 "<td class='text-center' width='20%'>"+
                                 "<button class='btn btn-primary btn-sm mr-1' href='#' data-id='" + value.sptype_id + "'><i class='fas fa-edit mr-1'></i>แก้ไข</a>"+
                                 "<button class='btn btn-danger btn-sm' href='#' data-id='" + value.sptype_id + "'><i class='fas fa-trash mr-1'></i>ลบ</a>"+
                                 "</td>"+
                                "</tr>";
              });

        sptypeHtml+="</tbody>";


        sptypeHtml+="<tfoot>"+
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

  return sptypeHtml;
}
