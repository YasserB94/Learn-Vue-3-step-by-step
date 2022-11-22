<script setup>
import {counter} from "../stores/counterStore";


</script>

<template>
  <div>
    <p>
      Counter View
    </p>
    <div class="grid grid-cols-2 grid-rows-2 border border-slate-300 rounded-xl py-2 m-2">
    <p class="col-span-2 text-center">Count : {{counter.count}}</p>
    <button
        class="p-2 m-1 bg-slate-300 duration-500 text-slate-800 w-10 mx-auto rounded-full hover:scale-105 active:scale-90"
        @click="counter.increment()">&#8593;</button>
    <button
        class="p-2 m-1 bg-slate-300 duration-500 text-slate-800 w-10 mx-auto rounded-full hover:scale-105 active:scale-90"
        @click="counter.decrement()">&#8595;</button>
    </div>
  </div>
</template>

<style scoped>

</style>