export default {
    data() {
      return {
        loggerName:"componentName",
      }
    },

    // commenting bcz can't use data property in beforeCreate hook
    // beforeCreate() {
    //   console.log("beforeCreate ::",this.loggerName);
    // },
    created() {
      console.log("created ::",this.loggerName);
    },
    beforeMount() {
      console.log("beforeMount ::",this.loggerName);
    },
    mounted() {
      console.log("mounted ::",this.loggerName);
    },
    beforeUpdate() {
      console.log("beforeUpdate ::",this.loggerName);
    },
    updated() {
      console.log("updated ::",this.loggerName);
    },
    beforeUnmount() {
      console.log("beforeUnmount ::",this.loggerName);
    },
    unmounted() {
      console.log("unmounted ::",this.loggerName);
    },
  };