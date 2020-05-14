$(document).ready(function() {

    $("#rank-select").html(rankOptionHtml());
    $("#password_visibility").click(function(){

  // Check the checkbox state
  if($(this).is(':checked')){
   // Changing type attribute
   $("#password-member").attr("type","text");

  }else{
   // Changing type attribute
   $("#password-member").attr("type","password");
  }
 });

 $("#position-select").html(positionOptionHtml());
 $("#department-select").html(departmentOptionHtml());


 $(document).on("submit","#member_add-form",function() {
    var usermame = $("#username-member").val();
    var password = $("#password-member").val();
    var rank = $("#rank-select").val();
    var name = $("#name-member").val();
    var lastname = $("#lastname-member").val();
    var phonenumber = $("#phonenumber-member").val();
    var position = $("#position-select").val();
    var department = $("#department-select").val();
    var permiss = $("#permiss-select").val();

    $.post("control/ajax/ajax_memberadd.php",
    {
      id:"member_add",
      username:usermame,
      password:password,
      rank:rank,
      name:name,
      lastname:lastname,
      phonenumber:phonenumber,
      position:position,
      department:department,
      permiss:permiss
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

});

function rankOptionHtml() {
  var optionrank;

  $.ajax({
    url: 'control/ajax/ajax_memberadd.php',
    async: false,
    type: 'post',
    data: {
      id: "get_rank"
    },
    dataType: 'json',
    success: function (output) {
      optionrank += "<option disabled='disabled' selected='selected' value='0'>กรุณาเลือกยศ</option>";

      $.each(output.rank,
        function(index,value) {
          optionrank += "<option value='"+value.rank_id+"'>"+value.rank_name+"</option>";
      });
    }
  });

  return optionrank;
}


function positionOptionHtml() {
  var optionrank;

  $.ajax({
    url: 'control/ajax/ajax_memberadd.php',
    async: false,
    type: 'post',
    data: {
      id: "get_position"
    },
    dataType: 'json',
    success: function (output) {
      optionrank += "<option disabled='disabled' selected='selected' value='0'>กรุณาเลือกตำแหน่ง</option>";

      $.each(output.position,
        function(index,value) {
          optionrank += "<option value='"+value.pos_id+"'>"+value.pos_name+"</option>";
      });
    }
  });

  return optionrank;
}

function departmentOptionHtml() {
  var optionrank;

  $.ajax({
    url: 'control/ajax/ajax_memberadd.php',
    async: false,
    type: 'post',
    data: {
      id: "get_department"
    },
    dataType: 'json',
    success: function (output) {
      optionrank += "<option disabled='disabled' selected='selected' value='0'>กรุณาเลือกหน่วย</option>";

      $.each(output.department,
        function(index,value) {
          optionrank += "<option value='"+value.dep_id+"'>"+value.dep_short+value.org_short+"</option>";
      });
    }
  });

  return optionrank;
}


function link(file, area1, area2, text, bread) {
  $(area2).text(text);
  $(area1).empty();
  $(area1).html('');
  $(bread).text(text);
  $(area1).load(file, function(response, status, xhr) {
    if (status == "error") {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: xhr.statusText
      })
    }
  });
}
