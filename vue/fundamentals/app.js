const vm = Vue.createApp({
data() {
    return {
        firstName : 'Nimit',
        lastName: 'Trevadiya'
    }
},
methods: {
    fullName(){
        return this.firstName +" "+ this.lastName
    }
},

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