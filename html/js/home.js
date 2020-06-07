$(document).ready(function() {

  menu();

  $('#store_js').click(function() {

    link('control/store.php', '#home', '#topic', menu["store"]["header"], "<i class='nav-icon fas fa-store mr-1'></i>"+menu["store"]["header"], '#bread');

  });


  $('#parts_js1').click(function() {

    link('control/category.php', '#home', '#topic', menu["parts"]["l1"], "<i class='nav-icon fas fa-layer-group mr-1'></i>"+menu["parts"]["l1"], '#bread');

  });

  $('#parts_js2').click(function() {

    link('control/spname.php', '#home', '#topic', menu["parts"]["l2"], "<i class='nav-icon fas fa-layer-group mr-1'></i>"+menu["parts"]["l2"],'#bread');

  });

  $('#parts_js3').click(function() {

    link('control/sptype.php', '#home', '#topic', menu["parts"]["l3"], "<i class='nav-icon fas fa-layer-group mr-1'></i>"+menu["parts"]["l3"], '#bread');

  });


  $('#parts_js4').click(function() {

    link('control/brand.php', '#home', '#topic', menu["parts"]["l4"], "<i class='nav-icon fas fa-band-aid mr-1'></i>"+menu["parts"]["l4"],'#bread');

  });

  $('#parts_js5').click(function() {

    link('control/dump.php', '#home', '#topic', menu["parts"]["l5"], "<i class='nav-icon fas fa-th-list mr-1'></i>"+menu["parts"]["l5"],'#bread');

  });

  $('#parts_js6').click(function() {

    link('control/budget_year.php', '#home', '#topic', menu["parts"]["l6"], "<i class='nav-icon fas fa-calendar-alt mr-1'></i>"+menu["parts"]["l6"], '#bread');

  });

  $('#member_js').click(function() {

    link('control/member.php', '#home', '#topic', menu["member"]["header"], "<i class='nav-icon fas fa-users mr-1'></i>"+menu["member"]["header"],'#bread');

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
      $("#take_pay_topic").text(menu["take_pay"]["header"]);

      $("#store_header").text(menu["store"]["header"]);

      $("#parts_topic").text(menu["parts"]["header"]);
      $("#parts_topic1").text(menu["parts"]["l1"]);
      $("#parts_topic2").text(menu["parts"]["l2"]);
      $("#parts_topic3").text(menu["parts"]["l3"]);
      $("#parts_topic4").text(menu["parts"]["l4"]);
      $("#parts_topic5").text(menu["parts"]["l5"]);
      $("#parts_topic6").text(menu["parts"]["l6"]);

      $("#member_header").text(menu["member"]["header"]);
    }
  });
}

function link(file, area1, area2, text, htmlIcon, bread) {
  $(area2).empty();
  $(area2).append(htmlIcon);
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
