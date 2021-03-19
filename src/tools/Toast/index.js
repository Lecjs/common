import Vue from "vue";
import app from "./index.vue";

const Toast = Vue.extend(app);
// new Vue
export default function({ msg, type }) {
  const vm = new Toast({
    el: document.createElement("div"),
    data() {
      return {
        msg,
        type,
        life: true,
        animate: "fade-in",
      };
    },
  });
  document.body.appendChild(vm.$el);
  setTimeout(function() {
    vm.animate = "fade-out";
  }, 1200);
  setTimeout(function() {
    vm.life = false;
  }, 2000);
}
