<script setup>
  defineProps({
    show:Boolean
  })
</script>

<template>
  <div class="modal-container"
  v-if="show">
    <div class="modal">
      <header>
        <h2>Modal Header!</h2>
        <button @click="$emit('close')">X</button>
      </header>
      <main>
        <p>Modal Content!</p>
      </main>
      <footer>
        <p>Modal Footer!</p>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.modal-container,.modal{
  @apply duration-1000
}
.modal-container {
  @apply fixed grid items-center justify-center text-slate-50 top-0 left-0 h-screen w-screen bg-slate-900 bg-opacity-40;
}

.modal {
  @apply bg-slate-800 p-20 rounded-xl bg-opacity-80 text-center
}
</style>
