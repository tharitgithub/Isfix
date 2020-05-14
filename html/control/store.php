<!-- แสดงรายการอะไหล่ -->
<?php session_start() ?>
<div class="row">
  <div class="col-12">
    <div class="card card-primary card-outline">
      <div class="card-header">
        <h3 class="card-title mr-1">
        <a class='btn btn-success mr-1' href='#' id='storeAdd_button'><i class='fas fa-plus mr-1'></i>เพิ่มรายการ</a>
        </h3>
      </div>
      <div class="card-body">
        <div class="row ml-3">
          <div class="col-6">
            <div class="form-group">
              <label>ประเภท</label>
              <select class="form-control" name="category_select" id="category-select" style="width: 100%;">

              </select>
            </div>
          </div>
        </div>


        <hr>
        <div class="row">
          <div class="col-sm-12" id="table_store">

          </div>
        </div>
      </div>
      <!-- /.card-body -->
    </div>
    <!-- /.card -->
  </div>
  <!-- /.col-12 -->
</div>
<!-- /.row  -->

<script src="js/store.js" type="text/javascript"></script>
