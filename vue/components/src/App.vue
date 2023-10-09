<template>
  <!-- <button @click="age++">Increment Age</button> -->
  <!-- <greeting :age="age"></greeting>
  <user :age="age" @age-change="ageUpdate"></user> -->
  <api-call/>
  <hooks></hooks>
</template>


<script >
import Greeting from '@/components/Greeting.vue';
import User from './components/User.vue';
import ApiCall from './components/ApiCall.vue';
import Hooks from './components/Hooks.vue';

  export default{
    name:'App',
    components:{
      Greeting,
      User,
      ApiCall,
      Hooks,
    },
    data(){
      return{
        age:20,
      }
    },
    methods: {
      ageUpdate(){
        this.age++;
        // console.log(x,y,z);
      },
      ageTrigger(a){
        
        console.log(a);
        }
    },
  }
</script>

