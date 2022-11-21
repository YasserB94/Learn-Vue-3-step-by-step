<script setup>
import {ref} from "vue";
import IndentableTextarea from "@/components/IndentableTextarea.vue"
const comment = ref('Test')
</script>
<template>
  <div>
    <h1>This is an about page</h1>
    <IndentableTextarea
        v-model="comment"
        class="bg-white w-full h-40 resize-none rounded p-2 m-2 text-slate-800 font-mono text-xs"
    ></IndentableTextarea>
  </div>
</template>

<style>

</style>
