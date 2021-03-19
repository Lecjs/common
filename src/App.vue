<template>
  <div id="app" class="wrapper">
    <sys-header></sys-header>
    <left-menu></left-menu>
    <div class="right-content">
      <router-view></router-view>
      <!-- 学生列表 -->
      <!-- 新增学生表单 -->
    </div>
  </div>
</template>

<script>
import sysHeader from "@/components/sysHeader";
import leftMenu from "@/components/leftMenu";

export default {
  components: {
    sysHeader,
    leftMenu
  }
};
</script>  

<style>
@import "./index.css";
</style>
