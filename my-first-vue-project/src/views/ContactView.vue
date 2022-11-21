<script setup>
import {ref} from "vue";
const greeting = ref("Hello Composition API - Ref")
let i;
const resetInputOnInterval = () => {
  if (i != null) {
    return;
  }
  i = setInterval(() => {
    greeting.value = 'Hello Composition API - Ref'
  }, 3000)
}


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
</template>

<style scoped>

</style>
