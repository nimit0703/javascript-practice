<template>
  <p>This is Child A, {{ greet }}</p>
</template>
<script>
export default {
  data() {
    return {
      // greet:"",
    };
  },
  beforeCreate() {
    console.log("beforeCreate :: Child-A");
    // this.greet= "Hello I'm A beforeCreate";
    /**
     *  can not access data property but can create new properties that other hooks can use
     */
  },
  created() {
    console.log("created :: Child-A");
    // this.greet= "Hello I'm A created";
  },
  beforeMount() {
    console.log("beforeMount :: Child-A");
    this.greet= "Hello I'm A beforeMount";
  },
  mounted() {
    console.log("mounted :: Child-A");
    // this.greet= "Hello I'm A mounted";
  },
  beforeUpdate() {
    console.log("beforeUpdate :: Child-A");
    // this.greet= "Hello I'm A beforeUpdate";
  },
  updated() {
    console.log("updated :: Child-A");
    // this.greet= "Hello I'm A Updated";
  },
  beforeUnmount() {
    console.log("beforeUnmount :: Child-A");
    // this.greet= "Hello I'm A beforeUnmount";
  },
  unmounted() {
    console.log("unmounted :: Child-A");
    // this.greet= "Hello I'm A unmounted";
  },
};
</script>
