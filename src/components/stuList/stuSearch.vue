<template>
  <div class="search">
    <label for="search-word">关键字搜索:</label>
    <input type="text" id="search-word" v-model="keywords" />
    <button id="search-submit" @click="search">搜索</button>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      keywords: ""
    };
  },
  methods: {
    ...mapMutations(["setSearchValue"]),
    ...mapActions(["searchStu", 'getStuList']),
    search() {
      this.setSearchValue(this.keywords);
      if (this.keywords === "") {
        this.getStuList(1);
      } else {
        this.searchStu(1);
      }
    }
  }
};
</script>

<style>
</style>