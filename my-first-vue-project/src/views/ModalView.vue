<script setup>
import { ref } from "vue";
import Modal from "@/components/Modal.vue";
const showModal = ref(false);
</script>

<template>
  <p>Hello Modal</p>
  <button @click="showModal = !showModal">Click me for a Modal!</button>
  <Teleport to="body">
    <!--    TELEPORT APPENDS TO CERTAIN ELEMETN-->
    <!--      TRANSITION CONTENT-->
    <Transition
      name="modal"
      enter-from-class="opacity-0 scale-0"
      enter-to-class="opacity-100 scale-100"
      enter-active-class="duration-300 transition-all"
      leave-active-class="duration-1000 transition-all"
      leave-from-class="opacity-100 scale-125"
      leave-to-class="opacity-0 scale-0"
    >
      <Modal :show="showModal" @close="showModal = false" />
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-enter-from {
}
</style>
