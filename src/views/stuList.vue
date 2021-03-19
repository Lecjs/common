<template>
  <div class="student-list content" id="student-list">
    <stu-search></stu-search>
    <stu-table></stu-table>
    <turn-page :totalPage="totalPage" :nowPage="nowPage" @currentPage="turnPage"></turn-page>
    <transition>
      <show-modal v-if="$store.state.showModal"></show-modal>
    </transition> 
  </div>
</template>

<script>
import stuSearch from "@/components/stuList/stuSearch";
import stuTable from "@/components/stuList/stuTable";
import turnPage from "@/components/stuList/turnPage";
import showModal from "@/components/stuList/showModal";
import { mapState, mapActions } from 'vuex';
export default {
  components: {
    stuSearch,
    stuTable,
    turnPage,
    showModal
  },
  computed: {
    ...mapState({
      nowPage: state => state.nowPage,
      totalPage: state => state.totalPage,
      searchValue: state => state.searchValue,
    }), 
  },
  methods: {
    ...mapActions(['getStuList', 'searchStu', 'turnPage']),
    // turnPage(i) {
    //   if(this.searchValue === '') {
    //     this.getStuList(i);
    //   } else {
    //     this.searchStu(i);
    //   }
      
    // }
  },
  created() {
    this.getStuList(1);
  }
};
</script>

<style>
/* .v-enter, .v-enter-active, .v-enter-to */
/* .v-leave, .v-leave-active, .v-leave-to */
.v-enter, .v-leave-to {
  top: -100%;
  opacity: 0;
}
.v-enter-to, .v-leave {
  top: 0;
  opacity: 1;
}
.v-enter-active, .v-leave-active {
  transition: all .3s;
}
</style>