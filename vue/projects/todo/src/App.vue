<template>
  
  <add-Todo/>
  <todo-list/>
</template>
<script>
import AddTodo from './components/AddTodo.vue'
import TodoList from './components/TodoList.vue'
export default {


  name:'App',
  components:{
    AddTodo,
    TodoList,
  }
}
</script>