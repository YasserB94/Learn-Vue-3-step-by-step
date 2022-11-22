import { defineStore } from "pinia";
const MAX_COUNT_VALUE = 3;
const MIN_COUNT_VALUE = -3;
export const useCounterStore = defineStore("counter", {
  state() {
    return {
      count: 0,
    };
  },
  actions: {
    increment() {
      if (this.count + 1 > MAX_COUNT_VALUE) return;
      this.count++;
    },
    decrement() {
      if (this.count - 1 < MIN_COUNT_VALUE) return;
      this.count--;
    },
  },
  getters: {
    remainingIncrementRange() {
      return MAX_COUNT_VALUE - this.count;
    },
    hasRemainingIncrementRange(){
      return (this.count===MAX_COUNT_VALUE)
    },
    remainingDecrementRange() {
      return MIN_COUNT_VALUE - this.count;
    },
    hasRemainingDecrementRange(){
      return (this.count===MIN_COUNT_VALUE)
    }
  },
});
