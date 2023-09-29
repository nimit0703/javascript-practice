const vm = Vue.createApp({
data() {
    return {
        firstName : 'Nimit',
        middleName : "",
        lastName: 'Trevadiya',
        url : 'https://github.com/nimit0703',
        raw_url : '<a href="https://github.com/nimit0703" target="_blank">Github</a>',
        age : 20,

    }
},
methods: {
    decrement(){
        this.age--;
    },
    updateLastName(message,event){
        console.log(message);
        this.lastName = event.target.value;
    },
    updateMiddleName(event){
        this.middleName = event.target.value;
    }
},
computed:{
    fullName(){
        console.log("fullName computed called");
        return `${this.firstName} ${this.middleName} ${this.lastName}`
    },
},
watch:{
    age(newVal,oldVal){
        setTimeout(() => {
            this.age = 20
        }, 3000);

    }
}

}).mount('#app1')

// setTimeout(() => {
//     vm.firstName = 'Dilip';
// }, 2000);

// Vue.createApp({
// data() {
//     return {
//         firstName : 'Rahul',
//         lastName: 'K L'
//     }
// },

// }).mount('#app2')