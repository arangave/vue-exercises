
import { ref } from 'vue';

export function useCounter() {
  const counter = ref(0);

  const increment = () => {
    if (counter.value < 10) counter.value++;
  };

  const decrement = () => {
    if (counter.value > 0) counter.value--;
  };

  return {
    counter,
    increment,
    decrement,
  };
}
