$(document).ready(function() {

  menu();

  $('#parts_js1').click(function() {

    link('control/store.php', '#home', '#topic', menu["parts"]["l1"], '#bread');

  });

  $('#parts_js2').click(function() {

    link('control/spname.php', '#home', '#topic', menu["parts"]["l2"], '#bread');

  });

  $('#parts_js3').click(function() {

    link('control/sptype.php', '#home', '#topic', menu["parts"]["l3"], '#bread');

  });
  $('#parts_js4').click(function() {

    link('control/category.php', '#home', '#topic', menu["parts"]["l4"], '#bread');

  });

  $('#parts_js5').click(function() {

    link('control/dump.php', '#home', '#topic', menu["parts"]["l5"], '#bread');

  });

  $('#parts_js6').click(function() {

    link('control/brand.php', '#home', '#topic', menu["parts"]["l6"], '#bread');

  });

  $('#parts_js7').click(function() {

    link('control/budget_year.php', '#home', '#topic', menu["parts"]["l7"], '#bread');

  });

  $('#member_js').click(function() {

    link('control/member.php', '#home', '#topic', menu["member"]["l1"], '#bread');

  });


  $('#logout').click(function() {
    Swal.fire({
      title: 'ตรวจสอบ',
      text: "คุณยืนยันที่จะออกระบบ ?",
      icon: 'question',

      showCancelButton: true,
      cancelButtonText: 'ยกเลิก',
      confirmButtonText: 'ตกลง',
      confirmButtonColor: '#009900',
      cancelButtonColor: '#d33'

    }).then((result) => {
      if (result.value) {
        location.href = "control/logout.php";
      }
    })
  });

});

function menu() {
  $.ajax({
    url: 'control/topic_menu.php',
    async: false,
    data: {ID:"menu"},
    type: 'post',
    dataType: 'json',
    success: function(output) {
      menu = output.menu;
      $("#take_pay_topic").text(menu["take_pay"]["topic"]);
      $("#take_pay_topic1").text(menu["take_pay"]["l1"]);


      $("#parts_header").text(menu["parts"]["header"]);
      $("#parts_topic").text(menu["parts"]["topic"]);
      $("#parts_topic1").text(menu["parts"]["l1"]);
      $("#parts_topic2").text(menu["parts"]["l2"]);
      $("#parts_topic3").text(menu["parts"]["l3"]);
      $("#parts_topic4").text(menu["parts"]["l4"]);
      $("#parts_topic5").text(menu["parts"]["l5"]);
      $("#parts_topic6").text(menu["parts"]["l6"]);
      $("#parts_topic7").text(menu["parts"]["l7"]);

      $("#member_header").text(menu["member"]["header"]);
      $("#member_topic1").text(menu["member"]["l1"]);
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
