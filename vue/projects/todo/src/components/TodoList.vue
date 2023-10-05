<template>
  <div id="todoList">
    <div class="todos">
      <div class="todo" v-for="(item, i) in items" :key="i">
        <input
          class="todo-text"
          v-on:dblclick="startEditing(i)"
          v-model="item.todo"
          :disabled="!item.isEditing"
          @keyup.enter="editItem(i)"
        />
        <div class="option">
          <div class="edit" @click.prevent="startEditing(i)">edit</div>
          <div class="delete" @click.prevent="deleteTodo(i)">delete</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  computed: {},
  data() {
    return {
      items: this.$store.state.items,
    };
  },
  methods: {
    startEditing(i) {
      // Set isEditing property of the selected item to true
      this.items[i].isEditing = true;
    },
    editItem(i) {
      console.log(this.items[i].todo);
      this.items[i].isEditing = false;
      this.$store.commit("updateItem", this.items[i]);
    },
    deleteTodo(index) {
      this.$store.commit("deleteItem", index);
    },
  },
};
</script>

<style>
#todoList {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  /* justify-content: center; */
  padding-top: 5vw;
  color: #fff;
  font-size: 1.5vw;
  font-weight: 200;
}
.todoes {
  display: flex;
  flex-direction: column;
}
.todo {
  display: flex;
  width: 60vw;
  background-color: rgb(193, 193, 193);
  margin: 10px;
}
.todo-text {
  padding: 0 9px;
  font-family: sans-serif;
  font-size: 1.3vw;
  color: #000000;
  font-weight: 100;
  text-transform: capitalize;
  width: 50vw;
  /* border: 1px solid red; */
}
.option {
  display: flex;
  justify-content: space-between;
}
.edit {
  cursor: pointer;
  text-align: center;
  background-color: blue;
  padding: 0 0.7vw;
}
.delete {
  cursor: pointer;
  text-align: center;
  background-color: red;
  padding: 0 1vw;
}
</style>
