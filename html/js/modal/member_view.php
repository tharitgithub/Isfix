
  <div class="modal fade" id="member_view" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  <i class="nav-icon fas fa-users"></i>
                  ข้อมูลผู้ใช้งาน
                </h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="row p-0">
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label for="username_member">ชื่อผู้ใช้</label>
                      <input type="text" class="form-control" name="username_member" id="username-view" disabled="disabled">
                    </div>
                  </div>
                </div>

                <div class="row p-0">
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label>ยศ</label>
                      <input class="form-control" name="rank_select" id="rank-view" disabled="disabled">
                    </div>
                  </div>
                </div>

                <div class="row p-0">
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label for="name-member">ชื่อ</label>
                      <input type="text" class="form-control" name="name_member" id="name-view" disabled="disabled">
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label for="lastname-member">นามสกุล</label>
                      <input type="text" class="form-control" name="lastname_member" id="lastname-view" disabled="disabled">
                    </div>
                  </div>
                </div>


                <div class="row p-0">
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label>ตำแหน่ง</label>
                      <input class="form-control" name="position_member" id="position-view"  disabled="disabled"/>
                    </div>
                  </div>

                  <div class="col-sm-6">
                    <div class="form-group">
                      <label>สิทธิ์การเข้าถึง</label>
                      <input class="form-control" id="permiss-view" disabled="disabled">
                    </div>
                  </div>

                </div>


                <div class="row p-0">
                  <div class="col-sm-6">
                    <div class="form-group row">
                      <label class="col-sm-4 col-form-label">สถานะผู้ใช้งาน : </label>
                      <div class="col-sm-2" id="status-view">

                      </div>
                    </div>
                  </div>
                </div>



            </div>

            <div class="modal-footer">
                <button type="button" class="btn btn-primary" id="save_permise_Change"><i class="fas fa-save mr-1"></i>บันทึก</button>
                <!--<button type="button" class="btn btn-secondary" data-dismiss="modal">ยกเลิก</button>-->
            </div>
        </div>
    </div>
</div>
