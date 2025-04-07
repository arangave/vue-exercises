Ejercicio 15 Vue, Soluciona los errores
En estos fragmentos de código puede que encuentres algún error, solucionalos y justifica el cambio.

// 1.composables/useCounter.ts
import { ref } from "vue";

export function useCounter() {
const count = ref(0);

function increment() {
count.value++;
}
}

//No se devuleve ni el contador ni la función de incremento: impidiendo su accesibilidad desde otros componentes.
Hay que añadir return { count, increment };
// 1.composables/useCounter.ts
import { ref } from "vue";

export function useCounter() {
const count = ref(0);

function increment() {
count.value++;
}

return { count, increment };
}

//2.?

<script setup>
import { ref } from "vue";

const items = ref(["Apple", "Banana", "Cherry"]);
</script>
<template>
  <ul>
    <li v-for="(item, index) in items" :key="index">
      {{ item }}
    </li>
  </ul>
</template>
<template>
  <ul>
    <TheComponent v-for="item in items" :key="item.id" :dataUser="item" />
  </ul>
</template>
<script setup lang="ts">
import TheTitle from "@/components/TheTitle.vue";
import TheButton from "@/components/TheButton.vue";
import { useCounterStore } from "@/stores/counter";

//2.?esto. tiene que pasarse como item no como index, dandole un valor único.

<template>
  <ul>
    <li v-for="item in items" :key="item">
      {{ item }}
    </li>
  </ul>
</template>

//3.
<template>

  <ul>
    <TheComponent v-for="item in items" :key="item.id" :dataUser="item" />
  </ul>
</template>

//3. debería estar dentro de un li, según el orden de html
<template>

  <ul>
    <li v-for="item in items" :key="item.id">
      <TheComponent :dataUser="item" />
    </li>
  </ul>
</template>

//4.

<script setup lang="ts">
import TheTitle from "@/components/TheTitle.vue";
import TheButton from "@/components/TheButton.vue";
import { useCounterStore } from "@/stores/counter";

const { count, message, incrementCounter, decrementCounter, doubleCounter } =
  useCounterStore();
</script>
<template>
  <TheTitle :class="count === 10 ? 'active' : 'inactive'"
    >Contador: {{ count }} - {{ message }}</TheTitle
  >
  <TheTitle>Contador doble: {{ doubleCounter }}</TheTitle>

<TheButton
v-if="count < 10"
aria-label="Incrementar contador"
@click="incrementCounter" >Increase</TheButton

> <TheButton

    v-if="count > 0"
    aria-label="Decrementar contador"
    @click="decrementCounter"
    >Decrease</TheButton

> </template>

//4. El problema es que estaba intentando desestructurar el objeto devuelto por el composable useCounterStore() fuera del bloque setup. Esto no funciona porque Pinia necesita que los composables se llamen dentro del setup para que la reactividad funcione.
Si se desectructurea el store fuera de setup, se pierde a reactividad, y por tanto los valores no se actualizan automáticamente.
Para arreglarlo deberíamos en vez de desectructurarlo, guardarlo en una constante en setup y lueggo entrar a sus propiedades usando la constante y así se mantiene la reactividad. Siempre que se use Store de Pinea hya uq ellamarlo dentro del setup para mantener la reactividad.

<script setup lang="ts">
import TheTitle from "@/components/TheTitle.vue";
import TheButton from "@/components/TheButton.vue";
import { useCounterStore } from "@/stores/counter";


const counterStore = useCounterStore();
</script>

<template>
  <TheTitle :class="counterStore.count === 10 ? 'active' : 'inactive'">
    Contador: {{ counterStore.count }} - {{ counterStore.message }}
  </TheTitle>

<TheTitle>Contador doble: {{ counterStore.doubleCounter }}</TheTitle>

<TheButton
v-if="counterStore.count < 10"
aria-label="Incrementar contador"
@click="counterStore.incrementCounter"

>

    Increase

  </TheButton>

<TheButton
v-if="counterStore.count > 0"
aria-label="Decrementar contador"
@click="counterStore.decrementCounter"

>

    Decrease

  </TheButton>
</template>
