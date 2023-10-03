<template>
  <p v-if="age>25">{{ msg }}</p>
  <p v-else>you must be 25 year or older to see this message</p>
</template>

<script>
export default {
  name: "Greeting",
  props: ["age"],
  data() {
    return {
      msg: "hello World",
    };
  },
};
</script>

<style scoped lang="scss">
p:hover{
  color: darken(red,15%)
}
p{
  color: red;
}

</style>
