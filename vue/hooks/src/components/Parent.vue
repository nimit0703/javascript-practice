<template>
  <p>Parent</p>
  <input type="radio" name="opt" v-model="selectedOpt" value="A" /> A
  <input type="radio" name="opt" v-model="selectedOpt" value="B" /> B
  <keep-alive>
    <child-a v-if="selectedOpt === 'A'" />
  </keep-alive>
  <child-b v-if="selectedOpt === 'B'" />
</template>

<script>
import ChildA from "./ChildA.vue";
import ChildB from "./ChildB.vue";
import  defaultConsoleLogs from '../mixins/logHooks';

export default {
  data() {
    return {
      selectedOpt: "",
      loggerName:"Parent",

    };
  },
  components: {
    ChildA,
    ChildB,
  },
  mixins:[defaultConsoleLogs],

};
</script>
