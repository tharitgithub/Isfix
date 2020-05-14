
<div class="modal fade" id="password_confirm" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" role="document">
      <div class="modal-content">
          <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                <i class="nav-icon fas fa-lock"></i>
                ยืนยันรหัสผ่าน
              </h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
              </button>
          </div>

          <form id="password-confirm-form" action="">
          <div class="modal-body">

            <div class="callout callout-danger">
              <h6><i class="icon fas fa-exclamation-triangle mr-1"></i>การเปลี่ยนการตั้งค่านี้ คุณต้องยืนยันรหัสผ่าน</h6>

            </div>
              <div class="form-group" hidden>
                  <label for="recipient-name" class="col-form-label">ID:</label>
                  <input type="text" class="form-control" id="user_id" hidden disabled>
              </div>

              <div class="form-group">
                  <label for="recipient-name" class="col-form-label">รหัสผ่านของคุณ</label>
                  <input type="password" autofocus="autofocus" name="password_cf" class="form-control" id="password-confirm" placeholder="รหัสผ่าน" />
              </div>


          </div>

          <div class="modal-footer">
              <button class="btn btn-primary" id="password-check"><i class="fas fa-check-circle mr-1"></i>ตกลง</button>
              <!--<button type="button" class="btn btn-secondary" data-dismiss="modal">ยกเลิก</button>-->
          </div>
          </form>
      </div>
  </div>
</div>
