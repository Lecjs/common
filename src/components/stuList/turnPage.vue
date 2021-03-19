<template>
  <ul id="turn-page">
    <li class="prev-page" @click="turnPage('prev')">上一页</li>
    <template v-if="totalPage<8">
      <li
        v-for="i in totalPage"
        :key="i"
        :class="{active: i === nowPage}"
        @click="turnPage(i)"
      >{{ i }}</li>
    </template>
    <template v-else>
      <!-- n <= 4 -->
      <!-- 1~6 -->
      <template v-if="nowPage <= 4">
        <li v-for="i in 6" 
        :key="i" 
        :class="{active: nowPage == i}" 
        @click="turnPage(i)"
        >{{i}}</li>
      </template>
      <!-- n>4 -->
      <!-- 1 ... -->
      <template v-if="nowPage > 4">
        <li @click ="turnPage(1)">1</li>
        <li>...</li>
      </template>
      <!-- n>4 && n<=t-4 -->
      <!--  n-3+1, n-3+2, n-3+3, n-3+4, n-3+5   -->
      <template v-if="nowPage > 4 && nowPage <= totalPage -4">
        <li
        v-for="i in 5" 
        :key="nowPage-3+i"
        :class="{active: 3 == i}"
        @click="turnPage(nowPage-3+i)">{{nowPage-3+i}}</li>
      </template>
      <!-- n<=t-4 -->
      <!-- ... t -->
       <template v-if="nowPage <= totalPage - 4">
        <li>...</li>
        <li @click ="turnPage(totalPage)">{{ totalPage }}</li>
      </template>
      <!-- n > t-4 -->
      <!--  t-6+1 ~ t -->
      <template v-if="nowPage > totalPage - 4">
        <li v-for="i in 6" 
        :key="totalPage - 6 + i" 
        :class="{active: nowPage == totalPage - 6 + i}" 
        @click="turnPage(totalPage - 6 + i)"
        >{{totalPage - 6 + i}}</li>
      </template>
    </template>
    <li class="next-page" @click="turnPage('next')">下一页</li>
  </ul>
  <!-- ------4-------------t-4----- -->
</template>

<script>
export default {
  props: {
    totalPage: Number,
    nowPage: Number,
  },
  data() {
    return {
      nPage: 1,
    };
  },
  methods: {
    turnPage(i) {
      if (i === "next") {
        if (this.nowPage !== this.totalPage) {
          this.nPage = this.nowPage + 1;
        }
      } else if (i === "prev") {
        if (this.nowPage !== 1) {
          this.nPage = this.nowPage - 1;
        }
      } else {
        this.nPage = i;
      }
      // this.nPage
      if(this.nPage === this.nowPage) {
        return ;
      }
      this.$emit("currentPage", this.nPage);
    }
  }
};
</script>

<style>
#turn-page {
  user-select: none;
}
#turn-page .active {
  color: white;
  background: lightblue;
}
</style>