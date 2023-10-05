<template>
    <div id="addTodo">
        <div class="container">
            <input  id="newTodo" type="text" v-model="todoText" v-on:keyup.enter="addItem"/>
            <button v-on:click.prevent="addItem">Add</button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'AddTodo',
    data(){
        return{
            todoText:''
        }
    },
    methods: {
        addItem(){
            if(this.todoText.trim() == ""){
                return;
            }
            const item = {
                todo:this.todoText,
                completed:false,
                id:this.$store.state.items.length +1,
            }
            this.$store.commit('addItem',item);

            console.log(item);
            this.todoText = '';
        }
    },
}

</script>
<style>

#addTodo{
    background-color: aliceblue;
    width: 100vw;
    height:30vh;
    top: 0;
    /* position: fixed; */
    overflow-y: hidden;

}
.container{
    display: flex;
    align-items: center;
    width: 100vw;
    height:30vh;
    justify-content: center;
}

input{
    width: 400px;
    height: 30px;
}

button{
    height: 35px;
    width: 70px;
}

</style>