<template>
  <div :class="[type, animate]" class="toast" v-if="life">{{ msg }}</div>
</template>

<script>
export default {
    
};
</script>

<style>
      .toast {
        width: 200px;
        height: 60px;
        line-height: 60px;
        text-align: center;
        position: fixed;
        top: 60px;
        left: calc(50% - 100px);
      }
      .suc {
        background-color: #f0f9eb;
        color: #67c23a;
      }
      .err {
        background-color: #fef0f0;
        color: #f56c6c;
      }
      @keyframes fadeIn {
          0% {
              top: 0;
              opacity: 0;
          }
          100% {
            top: 60px;
            opacity: 1;
          }
      }
      @keyframes fadeOut {
          100% {
              top: 0;
              opacity: 0;
          }
          0% {
            top: 60px;
            opacity: 1;
          }
      }
      .fade-in {
        animation: fadeIn forwards .7s;
      }

      .fade-out {
        animation: fadeOut forwards .7s;
      }
    </style>