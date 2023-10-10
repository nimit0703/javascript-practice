<template>
  <p>This is Child B</p>
</template>
<script>
import defaultConsoleLogs from "../mixins/logHooks";

export default {
  data() {
    return {
      loggerName: "Child-B",
    };
  },
  mixins: [defaultConsoleLogs],
  //added bcz beforeCreate in Mixins use data proparty which can't be use in before create.

  beforeCreate() {
    console.log("beforeCreate :: Child-B");
  },
};
</script>
