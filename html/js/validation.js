$(document).ready(function() {

  $("#password-confirm-form").validate({

      rules: {
        password_cf:{
          required:true
        }
      },
      messages:{
        password_cf:{
          required:"รหัสผ่าน ต้องไม่ว่างเปล่า"
        }
      },
      errorElement: 'span',
      errorPlacement: function (error, element) {
        error.addClass('invalid-feedback');
        element.closest('.form-group').append(error);
      },
      highlight: function (element, errorClass, validClass) {
        $(element).addClass('is-invalid');
      },
      unhighlight: function (element, errorClass, validClass) {
        $(element).removeClass('is-invalid');
      }
  });

  $("#category_add-form").validate({
    rules: {
      category:{
        required:true
      }
    },
    messages:{
      category:{
        required:"ประเภท ต้องไม่ว่างเปล่า"
      }
    },
    errorElement: 'span',
    errorPlacement: function (error, element) {
      error.addClass('invalid-feedback');
      element.closest('.form-group').append(error);
    },
    highlight: function (element, errorClass, validClass) {
      $(element).addClass('is-invalid');
    },
    unhighlight: function (element, errorClass, validClass) {
      $(element).removeClass('is-invalid');
    },
    onsubmit:false

  });


  $("#member_add-form").validate({

      rules: {
        username_member:{
          required:true          
        },
        password_member:{
          required:true,
          minlength:6
        },
        name_member:{
          required:true
        },
        lastname_member:{
          required:true
        },
        rank_select:{
          required:true
        },
        position_select:{
          required:true
        },
        phonenumber_member:{
          required:true,
          maxlength:10,
          minlength:10,
          digits:true
        },
        department_select:{
          required:true
        },
        permiss_select:{
          required:true
        }
      },
      messages:{
        username_member:{
          required:"ชื่อผู้ใช้ ต้องไม่ว่างเปล่า"
        },
        password_member:{
          required:"รหัสผ่าน ต้องไม่ว่างเปล่า",
          minlength:"รหัสผ่าน อย่างน้อย 6 ตัว"
        },
        name_member:{
          required:"ชื่อ ต้องไม่ว่างเปล่า"
        },
        lastname_member:{
          required:"นามสกุล ต้องไม่ว่างเปล่า"
        },
        rank_select:{
          required:"ยศ ต้องไม่ว่างเปล่า"
        },
        position_select:{
          required:"ตำแหน่ง ต้องไม่ว่างเปล่า"
        },
        phonenumber_member:{
          required:"เบอร์โทรศัพท์ ต้องไม่ว่างเปล่า",
          maxlength:"เบอร์โทรศัพท์ ไม่เกิน 10 หลัก",
          minlength:"เบอร์โทรศัพท์ รูปแบบไม่ถูกต้อง",
          digits:"ตัวเลขเท่านั้น"
        },
        department_select:{
          required:"หน่วย ต้องไม่ว่างเปล่า"
        },
        permiss_select:{
          required:"สิทธิ์การเข้าถึง ต้องไม่ว่างเปล่า"
        }
      },
      errorElement: 'span',
      errorPlacement: function (error, element) {
        error.addClass('invalid-feedback');
        element.closest('.form-group').append(error);
      },
      highlight: function (element, errorClass, validClass) {
        $(element).addClass('is-invalid');
      },
      unhighlight: function (element, errorClass, validClass) {
        $(element).removeClass('is-invalid');
        $(element).addClass('is-valid');
      }
  });

  $("#store_add-form").validate({

      rules: {
        serial_number:{
          required:true
        },
        spname_select:{
          required:true
        },
        sptype_select:{
          required:true
        },
        part_detail:{
          required:true
        },
        category_select:{
          required:true
        },
        purchasing_amount_number:{
          required:true
        },
        budget_select:{
          required:true
        },
        dump:{
          required:true
        }
      },
      messages:{
        serial_number:{
          required:"Part Number ต้องไม่ว่างเปล่า"
        },
        spname_select:{
          required:"ตระกูล ต้องไม่ว่างเปล่า"
        },
        sptype_select:{
          required:"ชนิด ต้องไม่ว่างเปล่า"
        },
        part_detail:{
          required:"รายละเอียด ต้องไม่ว่างเปล่า"
        },
        category_select:{
          required:"ประเภท ต้องไม่ว่างเปล่า"
        },
        purchasing_amount_number:{
          required:"จำนวน ต้องไม่ว่างเปล่า"
        },
        budget_select:{
          required:"ปีงบประมาณ ต้องไม่ว่างเปล่า"
        },
        dump:{
          required:"ที่เก็บ ต้องไม่ว่างเปล่า"
        }
      },
      errorElement: 'span',
      errorPlacement: function (error, element) {
        error.addClass('invalid-feedback');
        element.closest('.form-group').append(error);
      },
      highlight: function (element, errorClass, validClass) {
        $(element).addClass('is-invalid');
      },
      unhighlight: function (element, errorClass, validClass) {
        $(element).removeClass('is-invalid');
        $(element).addClass('is-valid');
      }
  });


  $("#tools_add-form").validate({

      rules: {
        spname_select:{
          required:true
        },
        sptype_select:{
          required:true
        },
        part_detail:{
          required:true
        },
        category_select:{
          required:true
        },
        purchasing_amount_number:{
          required:true
        },
        budget_select:{
          required:true
        },
        dump:{
          required:true
        }
      },
      messages:{
        spname_select:{
          required:"ตระกูล ต้องไม่ว่างเปล่า"
        },
        sptype_select:{
          required:"ชนิด ต้องไม่ว่างเปล่า"
        },
        part_detail:{
          required:"รายละเอียด ต้องไม่ว่างเปล่า"
        },
        category_select:{
          required:"ประเภท ต้องไม่ว่างเปล่า"
        },
        purchasing_amount_number:{
          required:"จำนวน ต้องไม่ว่างเปล่า"
        },
        budget_select:{
          required:"ปีงบประมาณ ต้องไม่ว่างเปล่า"
        },
        dump:{
          required:"ที่เก็บ ต้องไม่ว่างเปล่า"
        }
      },
      errorElement: 'span',
      errorPlacement: function (error, element) {
        error.addClass('invalid-feedback');
        element.closest('.form-group').append(error);
      },
      highlight: function (element, errorClass, validClass) {
        $(element).addClass('is-invalid');
      },
      unhighlight: function (element, errorClass, validClass) {
        $(element).removeClass('is-invalid');
        $(element).addClass('is-valid');
      }
  });



});
