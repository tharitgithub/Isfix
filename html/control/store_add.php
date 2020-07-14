
<div class="row">

<div class="col-12">
<div class="card card-primary ml-5 mr-5">
  <div class="card-header">
    <h3 class="card-title"><i class="fas fa-laptop mr-1"></i>เพิ่มรายการคลัง</h3>
  </div>
  <!-- /.card-header -->
  <!-- form start -->
  <form id="store_add-form" autocomplete="off">
    <div class="card-body p-2">
      <div class="row">

      <div class="col-sm-12">

      <div class="row">
        <div class="col-sm-6">
          <div class="form-group">
            <label>Part Number</label>
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fas fa-layer-group"></i>
                </span>
              </div>
              <input type="text" class="form-control" data-inputmask='"mask": "(999) 999-9999"' data-mask name="serial_number" id="serial-number">
            </div>
          </div>
        </div>

        <div class="col-sm-6">
          <div class="form-group">
            <label>ประเภท</label>
            <select class="form-control" name="category_select" id="category-select" style="width: 100%;">

            </select>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-6">
          <div class="form-group">
            <label>หมวดหมู่</label>
            <select class="form-control" name="spname_select" id="spname-select" style="width: 100%;">
              <option disabled='disabled' selected='selected'>กรุณาเลือกหมวดหมู่</option>
            </select>

          </div>
        </div>

        <div class="col-sm-6">
          <div class="form-group">
            <label>ชนิด</label>
            <select class="form-control" name="sptype_select" id="sptype-select" style="width: 100%;">
              <option disabled='disabled' selected='selected'>กรุณาเลือกชนิด</option>
            </select>
          </div>
        </div>
      </div>

      <div class="form-group">
        <label>รายละเอียด</label>
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <i class="fas fa-file-alt"></i>
            </span>
          </div>
          <textarea rows="3" class="form-control" name="part_detail" id="part-detail" placeholder="รายละเอียด"></textarea>
        </div>

      </div>

      <div class="row">
        <div class="col-sm-6">
          <div class="form-group">
            <label>จำนวน</label>
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fas fa-file-alt"></i>
                </span>
              </div>
              <input type="number" class="form-control" name="purchasing_amount_number" id="purchasing_amount-number" min="1" placeholder="จำนวน">
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="form-group">
            <label>ปีงบประมาณ</label>
            <select class="form-control" name="budget_select" id="budget-select" style="width: 100%;">

            </select>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-6">
          <div class="form-group">
            <label>ที่เก็บ</label>
            <select class="form-control" name="dump" id="dump-select" style="width: 100%;">

            </select>
          </div>
        </div>
      </div>

      </div>
      </div>
    </div>
    <!-- /.card-body -->

    <div class="card-footer">
      <div class="row">
        <div class="col-sm-6">
          <button id="store_add-submit" class="btn btn-primary"><i class="fas fa-check-circle mr-1"></i>ตกลง</button>
      </div>
      </div>
    </div>
</form>
</div>
<!-- /.card -->

</div>
</div>

<script src="js/store.js"></script>
<script src="js/validation.js"></script>
