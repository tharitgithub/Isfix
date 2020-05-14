<!-- แสดงรายการอะไหล่ -->
<?php session_start() ?>
<div class="row">
  <div class="col-12">
    <div class="card card-primary card-outline">
      <div class="card-header" id="com_parts_button">
        
          <!--
          <i class="nav-icon fas fa-laptop"></i>รายการอะไหล่
          <a class='btn bg-gradient-success btn-sm' href="#" id="member-add">+เพิ่มอะไหล่คอมพิวเตอร์</a>
        -->

      </div>
      <!-- /.card-header -->
      <div class="card-body">
        <table id="com_parts" class="table table-bordered table-hover ">
          <thead id="com_parts_thead">

          </thead>
          <tbody id="com_parts_tbody">


          </tbody>
          <tfoot id="com_parts_tfoot">

          </tfoot>
        </table>
      </div>
      <!-- /.card-body -->
    </div>
    <!-- /.card -->
  </div>
  <!-- /.col-12 -->
</div>
<!-- /.row  -->

<script src="js/com_parts.js" type="text/javascript"></script>
