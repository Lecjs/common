 <template>
  <div class="left-menu">
    <dl id="menu">
      <dt>学生管理</dt>
      <router-link to="/stulist" tag="dd">学生列表</router-link>
      <router-link to="/addstu" tag="dd">新增学生</router-link>
      <!-- <dd class="active" data-id="student-list">学生列表</dd>
      <dd data-id="add-student">新增学生</dd> -->
    </dl>
  </div>
</template>
 
 <script>
export default {};
</script>
 
 <style>
</style>