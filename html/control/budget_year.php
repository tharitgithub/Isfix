<!-- แสดงรายการอะไหล่ -->
<?php session_start() ?>
<div class="row">
  <div class="col-12">
    <div class="card card-primary card-outline p-0">
      <div class="card-header p-2">
        <h3 class="card-title mr-1">
          <i class="nav-icon fas fa-calendar-alt"></i>
          ปีงบประมาณ
        </h3>
        <div class="card-tools">
          <div class="input-group">
              <a class='btn bg-gradient-success mr-2' href="#" id="budget_yearAdd_button"><i class="fas fa-plus mr-1"></i>เพิ่มรายการ</a>
          </div>
        </div>

      </div>
      <div class="card-body table-responsive p-0" id="table_budget_year">

      </div>
      <!-- /.card-body -->
    </div>
    <!-- /.card -->
  </div>
  <!-- /.col-12 -->
</div>
<!-- /.row  -->

<script src="js/budget_year.js" type="text/javascript"></script>
