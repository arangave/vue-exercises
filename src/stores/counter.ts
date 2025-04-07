import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
  }),
  getters: {
    doubleCounter: (state) => state.count * 2,
    message: (state) => {
      if (state.count === 0) return 'Estás en el valor mínimo';
      if (state.count === 10) return 'Estás en el valor máximo';
      return 'Estás en los parámetros adecuados';
    },
  },
  actions: {
    increment() {
      if (this.count < 10) this.count++;
    },
    decrement() {
      if (this.count > 0) this.count--;
    },
  },
});
