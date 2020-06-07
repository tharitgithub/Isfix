<!-- แสดงรายการอะไหล่ -->
<?php session_start() ?>
<div class="row">
  <div class="col-12">
    <div class="card card-primary card-outline p-0">
      <div class="card-header p-1">
        
        <div class="card-tile">
          <div class="row">
            <div class="col-6">
              <div class="form-group row">
                <label class="col-sm-2 col-form-label">ประเภท</label>
                <div class="col-sm-10">
                  <select class="form-control" name="category_select" id="category-select" style="width: 100%;">

                  </select>
                </div>
              </div>
            </div>
            <div class="col-6">
              <button class='btn btn-success mr-1' href='#' id='storeAdd_button'><i class='fas fa-plus mr-1'></i>เพิ่มรายการ</button>
            </div>
          </div>
        </div>

      </div>
      <div class="card-body table-responsive p-0" id="table_store">

      </div>
      <!-- /.card-body -->
    </div>
    <!-- /.card -->
  </div>
  <!-- /.col-12 -->
</div>
<!-- /.row  -->

<script src="js/store.js" type="text/javascript"></script>
