<script setup>
import {ref} from "vue";
import Modal from '@/components/Modal.vue'
const showModal=ref(false)

</script>

<template>
  <p>Hello Modal</p>
  <button @click="showModal=!showModal">Click me for a Modal!</button>
  <Modal :show="showModal" @close="showModal=false"/>
</template>

<style scoped>

</style>