let vm = Vue.createApp({
    data() {
        return {
            isPurple:false,
            selectColor:'',
            size:150,
        }
    },
    computed:{
        circle_classes(){
            return {purple:this.isPurple}
        }
    }
}).mount('#app')