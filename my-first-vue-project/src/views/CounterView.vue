<script setup>
import { useCounterStore } from "@/stores/CounterStore";

const counter = useCounterStore();
</script>

<template>
  <div>
    <p class="my-2 text-center uppercase">Pinia Counter</p>
    <div
      class="m-2 grid grid-cols-2 grid-rows-2 rounded-xl border border-slate-300 py-2"
    >
      <p class="col-span-2 my-auto text-center">Count : {{ counter.count }}</p>
      <div class="row-span-1 mx-auto grid items-center">
        <p class="w-10 text-center">{{ counter.remainingIncrementRange }}</p>
        <button
          class="w-10 rounded-full bg-slate-300 p-2 text-slate-800 duration-500 hover:scale-105 active:scale-90 disabled:text-transparent disabled:scale-150 disabled:opacity-0"
          @click="counter.increment()"
          :disabled="counter.hasRemainingIncrementRange"
        >
          &#8593;
        </button>
      </div>
      <div class="mx-auto grid items-center">
        <p class="w-10 text-center">{{ Math.abs(counter.remainingDecrementRange) }}</p>
        <button
          class="w-10 rounded-full bg-slate-300 p-2 text-slate-800 duration-500 hover:scale-105 active:scale-90 disabled:text-transparent disabled:scale-150 disabled:opacity-0"
          :disabled="counter.hasRemainingDecrementRange"
          @click="counter.decrement()"
        >
          &#8595;
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
