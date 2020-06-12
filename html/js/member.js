$(document).ready(function() {

  showMember();

  $("#rank-select").html(rankOptionHtml());
  $("#position-select").html(positionOptionHtml());
  $("#department-select").html(departmentOptionHtml());

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

  $("#member-add").click(function() {
    link('control/member_add.php', '#home', '#topic', menu("member","l1"), '#bread');
  });


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

  $(document).on("click", "#permise_Not", function() {
    var user_id = $(this).attr("data-id");

    Swal.fire({
      title: 'ระงับสิทธิ์ !',
      text: "คุณต้องการระงับสิทธิ์ของผู้ใช้งาน ?",
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: 'ยกเลิก',
      confirmButtonText: 'ระงับ',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33'
    }).then((result) => {
      if (result.value) {
        $.post("control/ajax/ajax_member.php", {
            id: "update_permission",
            user_id: user_id,
            status: "not_active"
          },
          function(data) {

          });
        Swal.fire({
          title: 'กำลังดำเนินการ',
          timer: 1000,
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

          showMember();

          Swal.fire({
            title: 'ระงับสิทธิ์สำเร็จ',
            icon: 'success',
            timer: 1500,
            showConfirmButton: false
          })


        })

      }

    })

  });

  $(document).on("click", "#permise_Back", function() {

    var user_id = $(this).attr("data-id");

    Swal.fire({
      title: 'คืนสิทธิ์ !',
      text: "คุณต้องการคืนสิทธิ์ให้ผู้ใช้งาน ?",
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: 'ยกเลิก',
      confirmButtonText: 'คืนสิทธิ์',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33'
    }).then((result) => {
      if (result.value) {
        $.post("control/ajax/ajax_member.php", {
            id: "update_permission",
            user_id: user_id,
            status: "active"
          },
          function(data) {

          });
        Swal.fire({
          title: 'กำลังดำเนินการ',
          timerProgressBar: true,
          timer: 2000,
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

          showMember();

          Swal.fire({
            title: 'คืนสิทธิ์สำเร็จ',
            icon: 'success',
            timer: 1500,
            showConfirmButton: false
          })


        })

      }

    })


  });


  $(document).on("click","#permise_change",function () {
      var user_id = $(this).attr("data-id");
      var level,lebel;
      var optionhtml;

      $.ajax({
        url: 'control/ajax/ajax_member.php',
        async: false,
        type: 'post',
        data: {
          id: "get_level",
          user_id:user_id
        },
        dataType: 'json',
        success: function (output) {
          level = output.level;
          level = level[0].level;
          if (level=="ADMIN") {
            label = "ผู้ดูแลระบบ";
          }else {
            label = "เจ้าหน้าที่";
          }
        }
      });

      optionhtml += "<option value='OFFICER' ";
          if (level=="OFFICER") {
              optionhtml+="selected";
          }
      optionhtml += ">เจ้าหน้าที่</option>";
      optionhtml +="<option value='ADMIN' ";
          if (level=="ADMIN") {
              optionhtml+="selected";
          }
      optionhtml +=">ผู้ดูแลระบบ</option>";

      $("#permise_new").html(optionhtml);
      $("#level").val(label);
      $("#user_id").val(user_id);

  });

  $("#save_permise_Change").click(function (e) {
    e.preventDefault();
       var user_id = $("#user_id").val();
       var level = $("#level").val();
       var permise_new = $("#permise_new").val();

       if (level=="ผู้ดูแลระบบ") {
          level="ADMIN";
       }else {
          level="OFFICER";
       }

       if (permise_new==level) {

         Swal.fire({
           title: 'ดำเนินการสำเร็จ',
           icon: 'success',
           timer: 1500,
           showConfirmButton: false
          })
          $("#permise_Change").modal("toggle");
       }else {
         $.post("control/ajax/ajax_member.php", {
             id: "update_level",
             user_id: user_id,
             permise_new: permise_new
           },
           function(data) {

           });

           Swal.fire({
             title: 'กำลังดำเนินการ',
             timerProgressBar: true,
             timer: 2000,
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

             showMember();
             Swal.fire({
               title: 'เปลี่ยนสิทธิ์สำเร็จ',
               icon: 'success',
               timer: 1500,
               showConfirmButton: false
             })

             $("#permise_Change").modal("toggle");
           })

       }

  });

  $(document).on("click","#approve",function() {
    var user_id = $(this).attr("data-id");

    Swal.fire({
      title: 'อนุมัติ !',
      text: "คุณยืนยันที่จะอนุมัติสิทธิให้ผู้ใช้งาน ?",
      icon: 'question',
      showCancelButton: true,
      cancelButtonText: 'ยกเลิก',
      confirmButtonText: 'อนุมัติ',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33'
    }).then((result) => {
      if (result.value) {
        $.post("control/ajax/ajax_member.php", {
            id: "update_permission",
            user_id: user_id,
            status: "active"
          },
          function(data) {

          });
        Swal.fire({
          title: 'กำลังดำเนินการ',
          timerProgressBar: true,
          timer: 2000,
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

          showMember();

          Swal.fire({
            title: 'อนุมัติสำเร็จ',
            icon: 'success',
            timer: 1500,
            showConfirmButton: false
          })


        })

      }

    })

  });

  $(document).on("click","#not_approve",function() {
    var user_id = $(this).attr("data-id");

    Swal.fire({
      title: 'ไม่อนุมัติ !',
      text: "คุณไม่อนุมัติสิทธิ์ให้ผู้ใช้งาน ?",
      icon: 'question',
      showCancelButton: true,
      cancelButtonText: 'ยกเลิก',
      confirmButtonText: 'ไม่อนุมัติ',
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6'
    }).then((result) => {
      if (result.value) {
        $.post("control/ajax/ajax_member.php", {
            id: "update_permission",
            user_id: user_id,
            status: "not_active"
          },
          function(data) {

          });
        Swal.fire({
          title: 'กำลังดำเนินการ',
          timerProgressBar: true,
          timer: 2000,
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

          showMember();

          Swal.fire({
            title: 'ดำเนินการสำเร็จ',
            icon: 'success',
            timer: 1500,
            showConfirmButton: false
          })


        })

      }

    })
  });

  $(document).on("click","#member_data",function (e) {
      e.preventDefault();
      var user,permiss="",status="";
      var user_id = $(this).attr("data-id");
      $.ajax({
        url: 'control/ajax/ajax_member.php',
        async: false,
        type: 'post',
        data: {
          id: "get_userData",
          user_id:user_id
        },
        dataType: 'json',
        success: function (response) {
          user = response.userdata;
        }
      });

      $("#username-view").val(user[0].username);
      $("#rank-view").val(user[0].rank_name);
      $("#name-view").val(user[0].firstname);
      $("#lastname-view").val(user[0].lastname);
      $("#position-view").val(user[0].pos_name);

      if (user[0].level == "ADMIN") {
        permiss += "ผู้ดูแลระบบ";
      } else {
        permiss += "เจ้าหน้าที่";
      }
      $("#permiss-view").val(permiss);

      if (user[0].status == "active") {
        status += "<td><span class='badge badge-success'>ปกติ</span></td>";
      } else if (user[0].status == "not_active") {
        status += "<td><span class='badge badge-danger'>ระงับ</span></td>";
      } else {
        status += "<td><span class='badge badge-warning'>รอการอนุมัติ</span></td>";
      }

      $("#status-view").html(status);



    });

  $(document).on("click","#delete",function () {
      var user_id = $(this).attr("data-id");
      $("#user_id").val(user_id);
    });

  $(document).on("submit","#password-confirm-form",function(e) {
    e.preventDefault();
    var user_id = $("#user_id").val();
    var password = $("#password-confirm").val();
    Swal.fire({
      title: "กำลังดำเนินการ",
      timerProgressBar: true,
      timer: 2000,
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
      //if(result.value){
        var result;

        $.post("control/ajax/ajax_member.php",
        {
          id:"password_confirm",
          password:password
        },function(response) {

          if (response==1) {
            $.post("control/ajax/ajax_member.php",
            {
              id:"user_delete",
              user_id:user_id
            },function(data) {


              Swal.fire({
                title: "ดำเนินการสำเร็จ",
                icon: 'success',
                timer: 1500,
                showConfirmButton: false
              })

              $("#password_confirm").modal("toggle");

              showMember();

            });
          }else {
            Swal.fire({
              title: 'รหัสผ่านไม่ถูกต้อง',
              icon: 'error',
              timer: 1500,
              showConfirmButton: false
            })
          }

        });

      //}

    })

    //return false;

  });


  $(document).on("submit","#member_add-form",function(e) {
    e.preventDefault();
     var usermame = $("#username-member").val();
     var password = $("#password-member").val();
     var rank = $("#rank-select").val();
     var name = $("#name-member").val();
     var lastname = $("#lastname-member").val();
     var phonenumber = $("#phonenumber-member").val();
     var position = $("#position-select").val();
     var department = $("#department-select").val();
     var permiss = $("#permiss-select").val();

     $.post("control/ajax/ajax_member.php",
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

     //return false;
  });


  function getUserData(user_id) {
    var user;


    return user;
  }

  function rankOptionHtml() {
    var optionrank;

    $.ajax({
      url: 'control/ajax/ajax_member.php',
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
      url: 'control/ajax/ajax_member.php',
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
    var optiondepartment;

    $.ajax({
      url: 'control/ajax/ajax_member.php',
      async: false,
      type: 'post',
      data: {
        id: "get_department"
      },
      dataType: 'json',
      success: function (output) {
        optiondepartment += "<option disabled='disabled' selected='selected' value='0'>กรุณาเลือกหน่วย</option>";

        $.each(output.department,
          function(index,value) {
            optiondepartment += "<option value='"+value.dep_id+"'>"+value.dep_short+value.org_short+"</option>";
        });
      }
    });

    return optiondepartment;
  }

  function showMember() {

    $.post("control/ajax/ajax_member.php",
      function(data) {
        var tmember;
        var no = 1;

        $.each(data.member,
          function(index, value) {

            tmember += "<tr>";
            tmember += "<td>" + (no++) + "</td>";
            tmember += "<td>" + value.rank_name + "</td>";
            tmember += "<td>" + value.firstname +"</td>";
            tmember += "<td>" + value.lastname + "</td>";
            tmember += "<td>" + value.pos_name + "</td>";

            tmember += "<td class='project-actions text-center'>";
            tmember += "<a class='btn btn-primary btn-sm' href='#' id='member_data'  data-toggle='modal' data-target='#member_view'  data-id='" + value.user_id + "'><i class='fas fa-folder'></i></a>";
            tmember += "</td>"

            if (value.level == "ADMIN") {
              tmember += "<td><b>ผู้ดูแลระบบ</b></td>";
            } else {
              tmember += "<td><b>เจ้าหน้าที่</b></td>";
            }

            if (value.status == "active") {
              tmember += "<td><span class='badge badge-success'>ปกติ</span></td>";
            } else if (value.status == "not_active") {
              tmember += "<td><span class='badge badge-danger'>ระงับ</span></td>";
            } else {
              tmember += "<td><span class='badge badge-warning'>รอการอนุมัติ</span></td>";
            }

            if (value.status == "pending") {

              tmember += "<td class='project-actions text-center'>";
              tmember += "<a class='btn btn-success btn-sm mr-1' href='#' id='approve' data-id='" + value.user_id + "'><i class='fas fa-check mr-1'></i>อนุมัติ</a>";
              tmember += "<a class='btn btn-secondary btn-sm' href='#' id='not_approve' data-id='" + value.user_id + "'><i class='fas fa-trash mr-1'></i>ไม่อนุมัติ</a>";
              tmember += "</td>";

            } else {



              tmember += "<td class='project-actions text-center'>";

              if (value.status == "active") {

                tmember += "<button class='btn btn-outline-primary btn-sm mr-1' href='#' id='permise_change' data-toggle='modal' data-target='#permise_Change' data-id='"+value.user_id+"'><i class='fas fa-sync-alt mr-1'></i>เปลี่ยนสิทธิ์</button>";
                tmember += "<a class='btn btn-warning btn-sm' href='#' id='permise_Not' data-id='" + value.user_id + "'><i class='fas fa-ban mr-1'></i>ระงับสิทธิ์</a>";

              } else {
                tmember += "<a class='btn btn-success btn-sm' href='#' id='permise_Back' data-id='" + value.user_id + "'><i class='fas fa-check mr-1'></i>คืนสิทธิ์</a>";
              }
              tmember += "</td>";
            }

            tmember += "<td class='project-actions text-center'>";
            tmember += "<button class='btn btn-danger btn-sm' href='#' id='delete' data-toggle='modal' data-target='#password_confirm' data-id='" + value.user_id + "'><i class='fas fa-trash'></i></button>";
            tmember += "</td>";


            tmember += "</tr>";
          });


        $("#member_tbody").html(tmember);
        datatable();


      }, "JSON");
  }

  function datatable() {
    $("#member").DataTable({
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





});
