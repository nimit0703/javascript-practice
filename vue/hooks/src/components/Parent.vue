<template>
  <p>Parent</p>
  <input type="radio" name="opt" v-model="selectedOpt" value="A" /> A
  <input type="radio" name="opt" v-model="selectedOpt" value="B" /> B

  <child-a v-if="selectedOpt === 'A'" />
  <child-b v-if="selectedOpt === 'B'" />
</template>

<script>
import ChildA from "./ChildA.vue";
import ChildB from "./ChildB.vue";

export default {
  data() {
    return {
      selectedOpt: "",
    };
  },
  components: {
    ChildA,
    ChildB,
  },
  beforeCreate() {
    console.log("beforeCreate :: Parent");
  },
  created() {
    console.log("created :: Parent");
  },
  beforeMount() {
    console.log("beforeMount :: Parent");
  },
  mounted() {
    console.log("mounted :: Parent");
  },
  beforeUpdate() {
    console.log("beforeUpdate :: Parent");
  },
  updated() {
    console.log("updated :: Parent");
  },
};
</script>
