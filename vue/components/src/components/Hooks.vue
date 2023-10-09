<template>
    <div>
        <button @click="add">click</button>
    </div>
</template>

<script>
export default {
    methods: {
        add() {
            alert("ddc");
        },
    },
    beforeCreate() {
        // Code here runs before the component is fully created
    },
    created() {
        // Code here runs after the component is created
    },
    beforeMount() {
        // Code here runs before the component is mounted to the DOM
    },
    mounted() {
        // alert("mounted");
        // this.add();
        // Code here runs after the component is mounted to the DOM
    },
    beforeDestroy() {
        // Code here runs before the component is destroyed
    },
    destroyed() {
        // Code here runs after the component is destroyed
    },
}
</script>
