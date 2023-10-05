<template>
  <div id="addTodo">
    <div class="container">
      <h1>Welcome</h1>
      <div class="input">
        <input
          id="newTodo"
          type="text"
          v-model="todoText"
          v-on:keyup.enter="addItem"
        />
        <button v-on:click.prevent="addItem">Add</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AddTodo",
  data() {
    return {
      todoText: "",
    };
  },
  methods: {
    addItem() {
      if (this.todoText.trim() == "") {
        return;
      }
      const item = {
        todo: this.todoText,
        completed: false,
        id: this.$store.state.items.length + 1,
      };
      this.$store.commit("addItem", item);

      console.log(item);
      this.todoText = "";
    },
  },
};
</script>
<style scoped>
*{
    color: #3F1D38;
}
#addTodo {
  background-color: #E19898;
  width: 100vw;
  height: 30vh;
  top: 0;
  /* position: fixed; */
  overflow-y: hidden;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 30vh;
  justify-content: center;
}

input {
  width: 400px;
  height: 30px;
  background-color: #FFDBC3;
}

button {
  height: 35px;
  width: 70px;
  background-color: #A2678A;
}
h1{
    font-size: 3.5vw;
    font-weight: 400;
    letter-spacing: 0.7vw;
    transition: transform 0.3s;
}

h1:hover{
    transform:  scale(1.3);
}
</style>
