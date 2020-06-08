
<!-- แสดงรายการอะไหล่ -->
<div class="row">
  <div class="col-12">
    <div class="card card-primary card-outline">
      <div class="card-header p-1">
        <div class="card-tile">
          <div class="row">
            <div class="col-10">
              <div class="form-group row">
                <label class="col-sm-2 col-form-label text-right">ประเภท</label>
                <div class="col-sm-10">
                  <select class="form-control" name="category_select" id="category-select" style="width: 100%;">

                  </select>
                </div>
              </div>
            </div>
            <div class="col-2">
              <button class='btn btn-success mr-1' href='#' id='spnameAdd_button'><i class='fas fa-plus mr-1'></i>เพิ่มรายการ</button>
            </div>
          </div>
        </div>
      </div>
      <!-- /.card-header -->
      <div class="card-body table-responsive p-0" id="table_spname">

      </div>
      <!-- /.card-body -->
    </div>
    <!-- /.card -->
  </div>
  <!-- /.col-12 -->
</div>
<!-- /.row  -->

<script src="js/spname.js"></script>
