(function($) {
  "use strict";

  /*==================================================================
  [ Validate ]*/
  var input = $('.validate-input .input100');

  $('.validate-form').on('submit', function(e) {
    var check = true;

    for (var i = 0; i < input.length; i++) {
      if (validate(input[i]) == false) {
        showValidate(input[i]);
        check = false;
      }
    }
    if (check == false) {
      return check;
    }
    e.preventDefault();


    var username = $("#username").val();
    var password = $("#password").val();
    var error = "";
    $.post("html/control/ajax/check_login.php", {
        username: username,
        password: password
      },
      function(data) {

        if (data == 1) {
          error = "one";
          $.ajax({
            type: "POST",
            url: "html/control/messageshow.php",
            data: {
              PAGE: "login",
              ERROR: error
            },

            success: function(response) {

                Swal.fire({
                  icon: 'warning',
                  title: 'โปรดติดต่อหัวหน้าแผนก',
                  text: response,
                  showConfirmButton: false,
                  showCloseButton: true,
                  footer: 'ผ.ซ่อมระบบคอมพิวเตอร์ กซร.สปก.สสท.ทร.'
                })

            }
          });
        } else {


          if (data == 0) {
            error = "zero";
            $.ajax({
              type: "POST",
              url: "html/control/messageshow.php",
              data: {
                PAGE: "login",
                ERROR: error
              },

              success: function(response) {

                  Swal.fire({
                    icon: 'warning',
                    title: 'เกิดความผิดพลาด',
                    text: response,
                    showCloseButton: true,
                    showConfirmButton: false

                  })
              }
            });
          } else {
            if (data == 2) {
              error = "two";
              $.ajax({
                type: "POST",
                url: "html/control/messageshow.php",
                data: {
                  PAGE: "login",
                  ERROR: error
                },

                success: function(response) {

                    Swal.fire({
                      icon: 'error',
                      title: 'โปรดติดต่อหัวหน้าแผนก',
                      text: response,
                      showCloseButton: true,
                      showConfirmButton: false,
                      footer: 'ผ.ซ่อมระบบคอมพิวเตอร์ กซร.สปก.สสท.ทร.'

                    })

                }
              });
            } else {
                location.href = "html/home";            
            }
          }
        }

      }
    );
  });


  $('.validate-form .input100').each(function() {
    $(this).focus(function() {
      hideValidate(this);
    });
  });

  function validate(input) {
    if ($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
      if ($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
        return false;
      }
    } else {
      if ($(input).val().trim() == '') {
        return false;
      }
    }
  }

  function showValidate(input) {
    var thisAlert = $(input).parent();

    $(thisAlert).addClass('alert-validate');
  }

  function hideValidate(input) {
    var thisAlert = $(input).parent();

    $(thisAlert).removeClass('alert-validate');
  }


})(jQuery);
