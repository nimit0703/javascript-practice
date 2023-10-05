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
      if (confirm("sure you want to delete??")) {
        this.$store.commit("deleteItem", index);
      }
    },
  },
};
</script>

<style scoped>
#todoList {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
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
  background-color: #fcbaad;
  color: #fff;
  margin: 15px;
}
.todo-text {
  padding: 0 9px;
  font-family: sans-serif;
  font-size: 1.3vw;
  color: #e48586;
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
  background-color: #9d44c0;
  padding: 0 0.7vw;
}
.delete {
  cursor: pointer;
  text-align: center;
  background-color: #ec53b0;
  padding: 0 1vw;
}
</style>
