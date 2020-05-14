
<div class="row">
  <div class="col-md-12">
    <div class="card card-primary">
      <div class="card-header">
        <h3 class="card-title">
          <i class="fas fa-users"></i>
          เพิ่มผู้ใช้งาน
        </h3>
      </div>
      <!-- /.card-header -->
      <!-- form start -->
      <form action="" id="member_add-form" autocomplete="off" action="">
        <div class="card-body">

          <div class="row">

            <div class="col-sm-6">
              <div class="form-group">
                <label for="username_member">ชื่อผู้ใช้ (สำหรับเข้าสู่ระบบ)</label>
                <button type="button" class="btn bg-gradient-danger btn-xs" id="save_permise_Change"><i class="fas fa-user-check mr-1"></i>ตรวจสอบชื่อผู้ใช้</button>
                <input type="text" class="form-control" autofocus="autofocus" name="username_member" id="username-member" placeholder="ชื่อผู้ใช้">
              </div>
            </div>

            <div class="col-sm-6">
              <div class="form-group">
                <label for="password_member">รหัสผ่าน</label>
                <input type="password" class="form-control" name="password_member" id="password-member" placeholder="รหัสผ่าน">
                <div class="custom-control custom-checkbox">
                  <input class="custom-control-input" type="checkbox" id="password_visibility" value="option1">
                  <label for="password_visibility" class="custom-control-label">แสดงรหัสผ่าน</label>
                </div>
              </div>
            </div>

          </div>

          <div class="row">
            <div class="col-sm-6">
              <div class="form-group">
                <label>ยศ</label>
                <select class="form-control select2" name="rank_select" id="rank-select" style="width: 50%;">


                </select>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6">
              <div class="form-group">
                <label for="name-member">ชื่อ</label>
                <input type="text" class="form-control" name="name_member" id="name-member" placeholder="ชื่อ">
              </div>
            </div>
            <div class="col-sm-6">
              <div class="form-group">
                <label for="lastname-member">นามสกุล</label>
                <input type="text" class="form-control" name="lastname_member" id="lastname-member" placeholder="นามสกุล">
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-6">
              <div class="form-group">
                <label for="phonenumber_member">เบอร์โทรศัพท์</label>
                <input type="text" class="form-control" name="phonenumber_member" id="phonenumber-member" placeholder="เบอร์โทรศัพท์">
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-6">
              <div class="form-group">
                <label>ตำแหน่ง</label>
                <select class="form-control select2" name="position_select" id="position-select" style="width: 100%;">

                </select>
              </div>
            </div>

            <div class="col-sm-6">
              <div class="form-group">
                <label>หน่วย</label>
                <select class="form-control select2" name="department_select" id="department-select" style="width: 100%;">

                </select>
              </div>
            </div>

          </div>

          <div class="row">
            <div class="col-sm-6">
              <div class="form-group">
                <label>สิทธิ์การเข้าถึง</label>
                <select class="form-control select2" name="permiss_select" id="permiss-select" style="width: 50%;">
                  <option disabled='disabled' selected='selected'>กรุณาเลือกสิทธิ์การเข้าถึง</option>
                  <option value="ADMIN">ผู้ดูแลระบบ</option>
                  <option value="OFFICER">เจ้าหน้าที่</option>
                </select>
              </div>
            </div>
          </div>





        </div>
        <!-- /.card-body -->

        <div class="card-footer">
          <button class="btn btn-primary"><i class="fas fa-check-circle mr-1"></i>ตกลง</button>
        </div>
      </form>
    </div>
    <!-- /.card -->
  </div>
  <!-- /.col-12 -->
</div>
<!-- /.row  -->

<script src="js/member.js"></script>
<script src="js/validation.js"></script>
