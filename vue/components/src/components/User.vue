<template>
    <button @click="onChange">Increment Age</button>
    <p>the users is {{ age }} years old</p>
</template>

<script>
    export default {
        name:"User",
        props: ["age"],
        methods:{
            onChange(){
                this.$emit('age-change')
            }
        }
    }
</script>