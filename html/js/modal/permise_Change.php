
  <div class="modal fade" id="permise_Change" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  <i class="nav-icon fas fa-users"></i>
                  เปลี่ยนแปลงสิทธิ์การเข้าถึง
                </h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="form-group" hidden>
                    <label for="recipient-name" class="col-form-label">ID:</label>
                    <input type="text" class="form-control" id="user_id" hidden disabled>
                </div>

                <div class="form-group">
                    <label for="recipient-name" class="col-form-label">สิทธิ์การเข้าถึงปัจจุบัน</label>
                    <input type="text" class="form-control" id="level" disabled>
                </div>

                <div class="form-group">
                    <label for="recipient-name" class="col-form-label">สิทธิ์การเข้าถึงใหม่</label>
                    <select class="custom-select" id="permise_new" required>

                    </select>
                </div>

            </div>

            <div class="modal-footer">
                <button type="button" class="btn btn-primary" id="save_permise_Change"><i class="fas fa-save mr-1"></i>บันทึก</button>
                <!--<button type="button" class="btn btn-secondary" data-dismiss="modal">ยกเลิก</button>-->
            </div>
        </div>
    </div>
</div>
