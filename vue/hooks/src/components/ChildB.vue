<template>
  <p>This is Child B</p>
</template>
<script>
export default {
  beforeCreate() {
    console.log("beforeCreate :: Child-B");
  },
  created() {
    console.log("created :: Child-B");
  },
  beforeMount() {
    console.log("beforeMount :: Child-B");
  },
  mounted() {
    console.log("mounted :: Child-B");
  },
  beforeUpdate() {
    console.log("beforeUpdate :: Child-B");
  },
  updated() {
    console.log("updated :: Child-B");
  },
  beforeUnmount() {
    console.log("beforeUnmount :: Child-B");
  },
  unmounted() {
    console.log("unmounted :: Child-B");
  },
};
</script>
