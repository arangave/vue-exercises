
Ejercicio 11, preguntas sorpresa
¿Qué es un linter?
Herramienta que analiza el codigo fuente para identificar problemas o errores en su sintaxis, estructurra
o estilo. Ayudan a matener el codigo limpio y consistente, siguiento reglas prefefinidas o configuradas por 
el equipo de desarrollo.

¿Qué es Husky?
Permite gestionar ganchos (hooks) de Git de manera facil en proyectos de JavaScript o TypeScript. 
Se utiliza para ejecutar scripts automaticamente antes de realizar ciertas acciones, como hacer un commit o un push.


¿Qué es la reactividad?
Los cambias cambian automáticamente cuando su estado cambia, sin necesidad de actualizarlos manualmente.. 
En viu SE CONSIGUE USANDO PROPIEDADES COMO REF O REACTIVE, PERMITIENDO QUE LA INTERFAZ DE USUARIO SE
ACTUALICE AUTOMÁTICAMENTE CUANDO LOS DATOS CAMBIAN.

¿Desde dónde hay que crear todas las ramas para los desarrollos?
Todas las ramas se crean desde la rama principal, generalmente desde main, 
asegurando que las ramas se actualicen 
con la ultima versión del proyecto. Estás ramas se crearán a través de git, 
mediante, issus, donde se cerara una rama por cada ussues.

¿Cuándo se puede utilizar la rama main?
La rama main se utiliza para almacenar el codigo en produccion o o versiones estabñes.
 Los desarrolladores no deben realizar cambios directos en main. 
Se utilizan PulRequests para fusionar el codigo desde ramas de desarrollo a main despues de sus revisiones y pruebas.

¿Qué son las custom properties?
Son propiedades personalizadas en css, permiten definir valores reutilizables . se definen usando:--nombre-propiedad y
se usan con: var(--nombre-propiedad). Ayudan a mantener la consistencia del proyecto.

Diferencias entre v-if y v-show
v-if:
-Renderiza el elemento sollo si la consicion es verdader.
-Elimina el elemento del DOM si la condición es falsa.
-Ideal para contenido que cambia raramente.

v-show:
-Siempre renderiza el elemento pero controla su visibilidad mediante display: none.
-Ideal para contenido que cambia frecuentemente.


¿Cuáles son los valores de falsy?
En JavaScript, los valores falsy son aquellos que al evaluarse en un contexto booleano resultan en false.

Valores falsy:false, 0 , "" (cadena vacía), null, undefined, NaN

¿Qué es Nullish Coalescing Operator?
El Nullish Coalescing Operator (??) en JavaScript devuelve el valor
de la derecha solo si el valor de la izquierda es null o undefined.
const name = null;
const greeting = name ?? "Hola, Anónimo";
console.log(greeting); // "Hola, Anónimo"
A diferencia de ||, solo considera null y undefined como valores falsos, mientras que || considera todos los valores falsy.

¿Para que se utiliza TypeScript?
TypeScript deriva de JavaScript agregando tipado estático y caracteristicas de orientación a objetos:
-Ayuda a detectar errores.
-Mejora la manttenibilidad y ecalabilidad.
-Facilita el uso de biliotecas y frameworks proporcionando autocompletado y docuemntación.
-Se transpila a JavaScript permitiendo su ejecución en cualquier entorno donde se ejecuto JS.