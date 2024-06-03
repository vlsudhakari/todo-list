// stores/counter.js
import { defineStore } from 'pinia';

export const counterStore = defineStore('counter', {
  state: () => ({
    count: 0,
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
    tripleCount: (state) => state.count * 3,
  },
  actions: {
    increment() {
      this.count++;
    },
    reset() {
      this.count = 0;
    },
  },
});
