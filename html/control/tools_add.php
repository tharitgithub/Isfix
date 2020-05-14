
<div class="row">

<div class="col-12">
<div class="card card-primary">
  <div class="card-header">
    <h3 class="card-title"><i class="fas fa-tools mr-1"></i>เพิ่มเครื่องมือ</h3>
  </div>
  <!-- /.card-header -->
  <!-- form start -->
  <form id="tools_add-form" autocomplete="off">
    <div class="card-body">
      <div class="row">

      <div class="col-sm-6 ml-5">

      <div class="row">
        <div class="col-sm-5">
          <div class="form-group">
            <label>Part Number</label>
            <input type="text" class="form-control" name="serial_number" id="serial-number" disabled="disabled">
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-6">
          <div class="form-group">
            <label>ตระกูล</label>
            <select class="form-control" name="spname_select" id="spname-select" style="width: 100%;">

            </select>
          </div>
        </div>

        <div class="col-sm-6">
          <div class="form-group">
            <label>ชนิด</label>
            <select class="form-control" name="sptype_select" id="sptype-select" style="width: 100%;">

            </select>
          </div>
        </div>
      </div>

      <div class="form-group">
        <label>รายละเอียด</label>
        <input type="text" class="form-control" name="part_detail" id="part-detail" placeholder="รายละเอียด">
      </div>


      <div class="row">
        <div class="col-sm-3">
          <div class="form-group">
            <label>จำนวน</label>
              <input type="number" class="form-control" name="purchasing_amount_number" id="purchasing_amount-number" min="1" placeholder="จำนวน">
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
            <input type="text" class="form-control" name="dump" id="dump" placeholder="ที่เก็บ">
          </div>
        </div>
      </div>

      </div>
      </div>
    </div>
    <!-- /.card-body -->

    <div class="card-footer">
      <div class="row">
        <div class="col-sm-6 ml-3">
          <button class="btn btn-primary"><i class="fas fa-check-circle mr-1"></i>ตกลง</button>
      </div>
      </div>
    </div>
  </form>
</div>
<!-- /.card -->

</div>
</div>

<script src="js/tools.js"></script>
<script src="js/validation.js"></script>
