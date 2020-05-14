
<!-- แสดงรายการอะไหล่ -->
<div class="row">
  <div class="col-12">
    <div class="card card-primary card-outline">
      <div class="card-header">
        <h3 class="card-title mr-1" id="member_add_button">
          <i class="nav-icon fas fa-users"></i>
          ผู้ใช้งาน
        </h3>
        <div class="card-tools">
          <div class="input-group">
              <a class='btn bg-gradient-success mr-2' href="#" id="member-add"><i class="fas fa-plus mr-1"></i>เพิ่มผู้ใช้งาน</a>
          </div>
        </div>



      </div>
      <!-- /.card-header -->
      <div class="card-body">
        <table id="member" class="table table-bordered table-hover table-show">
          <thead>
          <tr>
            <th>#</th>
            <th>ชั้นยศ</th>
            <th>ชื่อ</th>
            <th>นามสกุล</th>
            <th>ตำแหน่ง</th>
            <th class="text-center">ข้อมูล</th>
            <th>สิทธิ์การเข้าถึง</th>
            <th>สถานะผู้ใช้งาน</th>
            <th class="text-center">จัดการสิทธิ์</th>
            <th class="text-center" width="4%">ลบ</th>

          </tr>
          </thead>
          <tbody id="member_tbody">

          </tbody>
          <tfoot>
            <tr>
              <th>#</th>
              <th>ชั้นยศ</th>
              <th>ชื่อ</th>
              <th>นามสกุล</th>
              <th>ตำแหน่ง</th>
              <th class="text-center">ข้อมูล</th>
              <th>สิทธิ์การเข้าถึง</th>
              <th>สถานะผู้ใช้งาน</th>
              <th class="text-center">จัดการสิทธิ์</th>
              <th class="text-center" width="4%">ลบ</th>

            </tr>
          </tfoot>
        </table>
      </div>
      <!-- /.card-body -->
    </div>
    <!-- /.card -->
  </div>
  <!-- /.col-12 -->
</div>
<!-- /.row  -->

<?php include '../js/modal/permise_Change.php';
      include '../js/modal/password_confirm.php';
?>

<script src="js/member.js"></script>
<script src="js/validation.js"></script>
<script src="js/sweetalert/dist/sweetalert2.all.min.js"></script>
