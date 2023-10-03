<template>
  <select v-model="onSelectComponent">
    <option value="Home">Home</option>
    <option value="About">About</option>
  </select>
  <keep-alive>
    <component :is="onSelectComponent"></component>
  </keep-alive>
</template>

<script>
import Home from "./components/Home.vue";
import About from "./components/About.vue";

export default {
  name: "App",
  components: {
    Home,
    About,
  },

  data() {
    return {
      onSelectComponent: "Home",
    };
  },
};
</script>
