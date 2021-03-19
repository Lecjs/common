import Vue from 'vue'
import Vuex from 'vuex'
import api from '../api'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    stuList: [],
    nowPage: 1,
    totalPage: 1,
    size: 3,
    count: 1,
    showModal: false,
    activeStu: {},
    searchValue: ''
  },
  mutations: {
    setSearchValue(state, val) {
      state.searchValue = val;
    },
    setStuList(state, list) {
      state.stuList = list;
    },
    setModal(state, bool) {
      state.showModal = bool;
    },
    setStu(state, stu) {
      state.activeStu = stu;
    },
    setPage(state, count) {
      state.count = count;
      // 11 5 3
      state.totalPage = Math.ceil(count/state.size);
    },
    setNowPage(state, page) {
      state.nowPage = page;
    }
  },
  actions: {
    async getStuList({commit, state}, page) {
      try {
        commit('setNowPage', page);
        const {cont, findByPage} = await api.findByPage(page, state.size);
        commit('setStuList', findByPage);
        commit('setPage', cont);
      } catch (error) {
        console.log(error);
      }
    },
    async updateStu({commit, state}, options) {
      const data = await api.updateStu(options);
      if(data.status == 'success') {
        commit('setModal', false);
        Object.assign(state.activeStu, options);
      }
      return data;
    },
    async searchStu({state, commit}, page) {
      try {
        commit('setNowPage', page);
        const {cont, searchList} = await api.searchStu(state.searchValue, page, state.size);
        commit('setStuList', searchList);
        commit('setPage', cont);
      } catch (error) {
        console.log(error);
      }
    },
    async delStuBySNo({state, dispatch}, sNo) {
      try {
        const value = await api.delStu(sNo);
        console.log(value);
        // 一般情况，重新当前页的数据（普通，搜索）
        // 特殊情况，需要判断临界条件（最后一页有且只有一个数据）
        if (Math.ceil( (state.count - 1) / state.size) < state.totalPage && state.nowPage === state.totalPage) {
          // 根据
          dispatch('turnPage', state.nowPage-1);
        } else {
          dispatch('turnPage', state.nowPage);
        }
      } catch (error) {
        
      }
    },
    turnPage({ state, dispatch }, page) {
      if(state.searchValue === '') {
        dispatch('getStuList', page);
      } else {
        dispatch('searchStu', page);
      }
    }
  },
  modules: {
  }
})
