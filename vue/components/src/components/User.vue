<template>
    <button @click="onChange">Increment Age</button>
    <p>the users is {{ age }} years old</p>
</template>

<script>
    export default {
        name:"User",
        props: {
            age: {
                type:Number,
            },
            validator(value){
                return value<=130;

            }
        },
        methods:{
            onChange(){
                this.$emit('age-change')
            }
        }
    }
</script>