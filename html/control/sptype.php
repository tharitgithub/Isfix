
<!-- แสดงรายการอะไหล่ -->
<div class="row">
  <div class="col-12">
    <div class="card card-primary card-outline">
      <div class="card-header p-1">
        <div class="card-tile">
          <div class="row">
            <div class="col-6">
              <div class="form-group row">
                <label class="col-sm-2 col-form-label">ประเภท</label>
                <div class="col-sm-4">
                  <select class="form-control" name="category_select" id="category-select" style="width: 100%;">

                  </select>
                </div>

                <label class="col-sm-2 col-form-label">หมวดหมู่</label>
                <div class="col-sm-4">
                  <select class="form-control" name="spname_select" id="spname-select" style="width: 100%;">
                    <option disabled='disabled' selected='selected'>กรุณาเลือกหมวดหมู่</option>
                  </select>
                </div>
              </div>

            </div>
            <div class="col-6">
              <button class='btn btn-success mr-1' href='#' id='sptypeAdd_button'><i class='fas fa-plus mr-1'></i>เพิ่มรายการ</button>
            </div>
          </div>
        </div>
      </div>
      <!-- /.card-header -->
      <div class="card-body table-responsive p-0" id="table_sptype">

      </div>

      </div>
      <!-- /.card-body -->
    </div>
    <!-- /.card -->
  </div>
  <!-- /.col-12 -->
</div>
<!-- /.row  -->

<script src="js/sptype.js"></script>
