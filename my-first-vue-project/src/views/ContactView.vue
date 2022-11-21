<script setup>
import {onUnmounted, ref, watch} from "vue";
import {useFlash} from "../composables/useFlash";
import {useStorage} from "../composables/useStorage";
const {flash} = useFlash();
const greeting = ref("Hello Composition API - Ref");
let i;
const resetInputOnInterval = () => {
  if (i != null) {
    return;
  }
  i = setInterval(() => {
    greeting.value = 'Hello Composition API - Ref'
  }, 3000)
}
const favouriteFood = ref('');
const food=useStorage('food')

// watch(favouriteFood,(value)=>{
//   localStorage.setItem('food',value)
// })

// const writeToLocalStorage = (key,value) => {
//   localStorage.setItem(key,value);
// }

</script>
<template>
  <h1>Hello Contact</h1>
  <p className="text-3xl font-bold underline">Hello Tailwind!</p>
  <div class="my-2 border p-2 rounded w-fit space-y-2">
    <p>{{ greeting }}</p>
    <input class="p-1 text-slate-800"
           type="text"
           @change="resetInputOnInterval"
           v-model="greeting"
    >
  </div>
  <button @click="flash('Composable Modal','Hello Modal!','success')">Click me for a Modal</button>
  <div class="my-2 border p-2 rounded w-fit space-y-2">
    <p>What is your favourite food ? </p>
    <input class="p-1 text-slate-800"
           type="text"
           v-model="favouriteFood"
    >
  </div><div class="my-2 border p-2 rounded w-fit space-y-2">
    <p>What is  food ? </p>
    <input class="p-1 text-slate-800"
           type="text"
           v-model="food"
    >
  </div>
</template>
<!--           @input="writeToLocalStorage('food',favouriteFood)"-->
<style scoped>

</style>
