<template>
  <button @click="flag=!flag"> toggle</button>
  <transition name="fade" mode="out-in">
    <h2 v-if="flag"> Hello World</h2>
    <h2 v-else="flag"> Changed animation</h2>
  </transition>
</template>

<script>


export default {
  name: "App",
  

  data() {
    return {
      flag:false,
    };
  },
};
</script>

<style>

.fade-enter-from{
  opacity: 0;
}

.fade-enter-active{
  transition: all 0.75s linear;
}

.fade-leave-to{
  color: rgb(80, 80, 80);
  transition: all 0.75s linear;
  opacity: 0;
}
</style>
