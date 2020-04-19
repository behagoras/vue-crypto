# Vue

## Framework progresivo

Vue es un **framework progresivo** para construir **interfaces de usuario**. 

A diferencia de otros frameworks monolíticos, Vue está diseñado desde el inicio para ser adoptado **incrementalmente**. 

La biblioteca principal se enfoca solo en la **capa de la vista**, y es muy simple de utilizar e integrar con otros proyectos o bibliotecas existentes. 

Por otro lado, Vue también es perfectamente capaz de soportar **aplicaciones sofisticadas** single page applications (**SPA**) cuando se utiliza en combinación con herramientas modernas y librerías compatibles.

Mas información en este link

https://es-vuejs.github.io/vuejs.org/v2/guide/

Código semántico

Fácil de mantener y leer



## Mi primer app en Vue

Tenemos que envolver nuestro html en un selector que luego vamos a utilizar

```html
<div id="app">
  <h2>{{ title }}</h2>
</div>
```

Para crear una app la inicalizamos creando una `new Vue` teniendo como argumento un objeto con el elemento `el` que es el elemento html al que hace referencia y la `data` que es la información que puede utilizar.

```javascript
const app = new Vue({
  el:'#app',
  data () {
      return {title:'Hola Vue'}
  },
})
```

Para este caso nuestra aplicación regresará un:

## Hola Vue

Pero resulta que creamos una variable con nuestra app, y le podemos cambiar el valor:

```javascript
app.title = "Adios Vue"
```

Si hacemos ésto nos cambiaría el contenido html al valor `Adios Vue`

## Adiós Vue





# Expresiones javascriot

Podemos correr código js en el html de los templates `{{ codigo javascript }}

## Directivas

`<img v-bind:src="btc.img" v-bind:alt="btc.name">`

Obtiene la data desde btc.img

## Control de Flujo con Directivas

**Directivas para mostrar según booleanos**

**v-bind:src="" -->**Para las imágenes 

**v**-***\*if\****="condición" --> para poner una condició**n** 

- v-if="changePercent > 0" 
- v-else-if="sino se cumple la condición" --> cuando **no****se** cumple el v-***\*if\**** Ej: v-***\*else\****-***\*if\****="changePercent < 0" **v**-***\*else\**** --> tambien puede **ir** solo el ***\*else\**** sin una condicion **v**-show -->igual **que** un ***\*if\****, **la** unica diferencia es **que** me muestra las etiquetas pero **en****display** none.

La principal diferencia entre v-if y v-show es que v-if renderiza el elemento en el DOM solo si se cumple la expresión y v-show renderiza todos los elementos en el DOM y luego utiliza la propiedad display de CSS para ocultarlo si no cumple con la expresión.

v-show se utiliza preferentemente si el elemento cambia frecuentemente y v-if cuando no cambia a lo largo del tiempo

## Render declarativo

### Two way data binding

Two-way data binding es un patrón MVVM (model -> view -> view -> model) donde se enlazan 2 elementos en 2 direcciones (cuando cambia uno cambia el otro)

Sirve para mantener sincronizados los datos con el DOM sin esfuerzos adicionales

Two-way data binging  y en vue pasa de la siguiente manera:

El estado comunica a la vista qué es lo que va a modificar y la vista (donde el usuario interactúa con la app) responde con los cambios provocados por el usuario para que el estado vuelva a empezar con el proceso.







O definido de otra manera, como si nombre lo indica *“Two-way data binding”* o enlace de datos bidireccional, específicamente la directiva v-model, permite enlazar bidireccionalmente un modelo a la vista, de sufrir cambios, ambos se actualizan.

![](https://static.platzi.com/media/user_upload/Screen%20Shot%202020-03-22%20at%2012.45.58-80640343-48b6-40c5-addd-6c163f9a533d.jpg)

https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram

Me permite tener sincronizados lo que pasa en la vista, en el Browser, con lo que tengo en memoria en el Estado, es decir, que si el usuario, por alguna razón hace un cambio dentro de lo que es la vista, voy a actualizar mi estado y si mi estado, cambia por alguna cosa de JS. por alguna función, o lo que sea, también se va a sincronizar y va a disparar una nueva vista. Se va a lograr un linkeo en tiempo real con lo que se tiene en el HTML y JavaScript.

## Template synax

Vue.js utiliza una sintaxis de plantilla basada en HTML (Template Syntax) que le permite vincular declarativamente el DOM representado a los datos de la instancia de Vue. 

Todas las plantillas de Vue.js son HTML válidos que pueden ser analizados por navegadores y analizadores HTML que cumplan con las especificaciones.

Por lo tanto podemos utilizar todas las funcionalidades de javascript que tengan un retorno explícito, tales como **variables**, **progrmación funcional**, **expresiones lógicas**, **llamadas de funciones**, **if ternarios**, **métodos** y **atributos** de objetos, etc, pero no podemos hacer uso de if, else, while porque éstos no tienen un retorno.

Por debajo, Vue compila las plantillas en funciones de su Virtual DOM. Ésto es porque funciona mediante programación reactiva (cuando un elemento se modifica, lanza un evento).

Lo que hace Vue es calcular los cambios y lanzar funciones de javascript para modificar el DOM de manera eficiente (progressive web apps).

## [Binding de Atributos html](https://es.vuejs.org/v2/guide/class-and-style.html)

Los atributos en html son las propiedades que puede tener una etiqueta, mismos que se pueden vincular (bind) a variables javascript con directivas.

Las directivas nos permiten vincular el dom con javascript de manera declarativa, para hacer un data binding podemos utilizar la directiva **`v-bind:`atributo**="valor" vinculando el atributo a nuestro objeto de vue, creando en `data()`, recordando que dentro del valor podemos poner código js.

## Directivas

Control de flujo

### `v-bind` `:`

### `v-if`

### `v-else`

### `v-else-if`

### `v-bind`

### `v-show`

Muestra si se cumple la condición y no tiene else, además se muestra en el dom, se recomienda para elementos que tienen muchas mutaciones.

### `v-for`

Genera iteraciones pora cada uno de los elementos dentro de un arreglo

```html
<div v-for="(element, i) in elements" v-bind:key="element">{{ i }}{{ element }}</div>
```

Por cada elemento dentro del array te va a imprimir la etiqueta y se generará una variable local con la que podrás interactuar.

- element hace referencia al elemento en sí
- i al índice del elemento.

### `v-on`  `@`

Llama un evento

```html
<button v-on:click="function">
  ...
</button>
```

### `v-model`

O definido de otra manera, como si nombre lo indica *“Two-way data binding”* o enlace de datos bidireccional, específicamente la directiva v-model, permite enlazar bidireccionalmente un modelo a la vista, de sufrir cambios, ambos se actualizan.



### condicional

El uso de **`v-bind:class`** es completamente combinable con **`class`**, por lo tanto puedes tener un v-bind:class junto con una clase y no genera error.

```html
<li
	v-bind:class="{orange: p.price === price, red: p.price < price, green: p.price > price}"
    v-for="(p, i) in pricesWithDay" 
    v-bind:key="p.day">

	{{ i }} - {{ p.day }} - {{ p.price }}
</li>
```

## Propiedades computadas (Computed)

**Propiedades computadas (Computed) =** propiedades que se calculan en tiempo real en base a los valores de otras propiedades.

**Watcher =** Funciones que ejecutan un código es decir que por medio de un cambio de la observación de una variable se puede disparar determinado código o ejecutar una función.
Podemos pensarlo como **un Disparador de código.**

También la computadas tienen la ventaja de que almacena la data en el cache del navegador mientras que el watcher (observadores) no. Igual dejo la documentación oficial acá en español para los que deseen ampliar el tema o les quede difuso.

https://es.vuejs.org/v2/guide/computed.html

Al final hay un buen ejemplo sobre el watcher (observadores)

Si bien entendí el concepto de las propiedades computadas, aún se me hacen borrosas las diferencias con methods, que también podemos tener funciones que calculen valores en función a otras propiedades.

Hay algunas diferencias, si bien las metodos pueden cumplir el mismo rol, un metodo se va a ejecutar SIEMPRE que cambia CUALQUIER propiedad para generar un valor nuevo. La propiedad computada solo se ejecuta cuando cambia alguno de los valores que se utilizan internamente, por otro lado las computed tienen un cache interno que las hace mas performante.

En definitiva podrias usar metodos tambien pero en terminos de performance y practicidad es mejor una computed.

### methods

### data

# Components

Instancia reutilizable de Vue que permiten extender elementos HTML básicos para encapsular código re utilizable. Son **elementos personalizados** a los que el compilador de Vue les añade comportamiento

El sistema de componentes nos ayuda poder secciones de la web q pueden ser reutizado facilmente.

la ventaja de trabajar con componentes es que cada componente puede manejar su propia data individual

para crear un componente se utiliza la propiedad component de Vue, la cual tiene casi los mismos metodos que la instancia de Vue donde veniamos haciendo todo, nada mas que este tiene el metodo template donde va a ir el “html” de nuestro componente

Los componentes son instancias de Vue con un nombre, cuyo formato es kebab-case, por ejemplo `'button-counter'`. Siendo reusables, al ser instancias de Vue, presentan las mismas opciones como `data`, `computed`, `watch`,`methods`, y los hooks presentes en el ciclo de vida, salvo la especificación root `el`.

 ‘Vue.component’ se puede utilizar en forma de etiqueta para nuestro html. Con ello podemos tener varios componentes para poder utilizar mas de una vez en nuestro código de manera sencilla.

Archivos .vue

```vue
<template>
	...
</template>

<script>
export default {
  name: 'ComponentName',
  components: [],
  props: {},
};
</script>

<style scoped>
  ...
</style>
```





## vue-cli

````bash
vue cli
````

````bash
vue create project-name
````

Agrega un plugin

```bash
vue add @ianaya89/tailwind
```















# crypto-exchange

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
