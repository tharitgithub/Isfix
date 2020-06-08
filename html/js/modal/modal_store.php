<div class="modal fade" id="modal_store" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
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
            <div class="row">

            <div class="col-sm-12">

            <div class="row">
              <div class="col-sm-6">
                <div class="form-group">
                  <label>Part Number</label>
                  <input type="text" class="form-control form-control" name="serial_number" id="serial-number" disabled="disabled">
                </div>
              </div>

              <div class="col-sm-6">
                <div class="form-group">
                  <label>ประเภท</label>
                  <input type="text" class="form-control form-control" name="category_select" id="category-select1" disabled="disabled">
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-sm-6">
                <div class="form-group">
                  <label>หมวดหมู่</label>
                  <input type="text" class="form-control form-control" name="spname_select" id="spname-select" disabled="disabled">
                </div>
              </div>

              <div class="col-sm-6">
                <div class="form-group">
                  <label>ชนิด</label>
                  <input type="text" class="form-control" name="sptype_select" id="sptype-select" disabled="disabled">
                </div>
              </div>
            </div>

            <div class="form-group">
              <label>รายละเอียด</label>
              <input type="text" class="form-control" name="part_detail" id="part-detail" placeholder="รายละเอียด" disabled="disabled">
            </div>

            <div class="row">
              <div class="col-sm-6">
                <div class="form-group">
                  <label>จำนวน</label>
                    <input type="number" class="form-control" name="purchasing_amount_number" id="purchasing_amount-number" min="1" disabled="disabled" placeholder="จำนวน">
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <label>ปีงบประมาณ</label>
                  <input type="text" class="form-control" name="budget_select" id="budget-select" disabled="disabled">
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-sm-6">
                <div class="form-group">
                  <label>ที่เก็บ</label>
                  <input type="text" class="form-control" name="dump" id="dump" placeholder="ที่เก็บ" disabled="disabled">
                </div>
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
