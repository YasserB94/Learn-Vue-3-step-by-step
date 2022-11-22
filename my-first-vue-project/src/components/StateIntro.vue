<script setup>

import {state} from "@/stores/quizStore";


const changeState = ()=>{
  state.name += "+";
}

</script>

<template>
  <p>{{state.name}}</p>
  <button @click="changeState"
  class="bg-slate-100 rounded-md text-slate-800 py-1 px-2 active:scale-95"
  >Add a +</button>
</template>

<style scoped>

</style>