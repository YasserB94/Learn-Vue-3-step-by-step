<script setup>
import {ref} from "vue";
import IndentableTextarea from "@/components/IndentableTextarea.vue";
const comment = ref('Test')


import StateIntro from '@/components/StateIntro.vue';
</script>
<template>
<!--  <div>-->
<!--    <h1>This is an about page</h1>-->
<!--    <IndentableTextarea-->
<!--        v-model="comment"-->
<!--        class="bg-amber-50 w-full h-40 resize-none rounded p-2 m-2 text-amber-900 font-mono text-xs"-->
<!--    ></IndentableTextarea>-->
<!--  </div>-->
<StateIntro />
</template>
<style>

</style>
