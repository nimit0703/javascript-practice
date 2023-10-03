<template>
    <p>the users is {{ age }} years old</p>
</template>

<script>
    export default {
        name:"User",
        props: ["age"]
    }
</script>