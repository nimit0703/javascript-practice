<template>
  <p>This is Child B</p>
</template>
<script>
import  defaultConsoleLogs from '../mixins/logHooks';


export default {
  data() {
    return {
      loggerName:"Child-B",
    }
  },
  mixins:[defaultConsoleLogs],
  
};
</script>
