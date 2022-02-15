# Lazy Load List

### Lazy Load List is a lightweight web package that loads items in lazy way to achieve high performance and better UX in large lists.

Rendering large lists makes the first load slow especially if items contain images, so this package split the list to small lists then it renders them one by one when scrolling to the end of the list..

you can notice the deference here:

![loading performance deference](https://lh3.googleusercontent.com/pw/AM-JKLXhB1jRKtOi4OhwEfINuYPKGD0LF4XBoQa0XbFoH9jUPQGW0GsOEl-cgnGzIrutEarCEwIDfV23jpI80P-xtIsgmv9oJD2KfImErE66p-5EukjEPCSVefObsHcS7FvZXnjSqC-MpnCpa-Vywq61KvGb=w1280-h720-no?authuser=0)
## Features

 - Fast Loading 🚀
 - Lightweight package
 - Better user experience 
 - Supports most loved JS frameworks

 

## Supported Frameworks
<pre>
| <img width="14" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/1200px-Svelte_Logo.svg.png" alt="svelte logo"/> | Svete js     | ✅
| <img width="14" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png" alt="svelte"/> | Vue js (2,3) | ✅
| <img width="14" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/640px-React.svg.png" alt="svelte"/> | React js     | coming soon..
</pre>

## Installation

install the package using npm or yarn:

install using npm

`  $ npm i lazy-load-list `

or using yarn

`  $ yarn add lazy-load-list `

## Usage

> ⚠  you must wrap the list by div and specify the height and width in the wrapper div.

- <img width="14" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/1200px-Svelte_Logo.svg.png" alt="svelte logo"/> svelte js:

> 
	import LazyList from 'lazy-load-list/svelte'

	<div  class="container">
		<LazyList
			data={colors}
			itemsPerRender={15}
			containerClasses="list"
			defaultLoadingColor="#222"
			let:item={item}
		>
			<h1>{ item }<h1>
		</LazyList>
	</div>

- <img width="14" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png" alt="svelte"/> vue js:

> 
	<div class="container">
		<LazyList
			:data="items"
			:itemsPerRender="15"
			containerClasses="list"
			defaultLoadingColor="#222"
		>
			<template v-slot="{item}">
			    <h1>{{ item }}<h1>
			</template>
		</LazyList>
	</div>

	// script
	import LazyList from 'lazy-load-list/vue'
	..
	components: { LazyList } // don't forget to define it in the components
	

## Props

<table>
	<tr>
		<td>prop</td>
		<td>description</td>
		<td>required</td>
		<td>default value</td>
	</tr>
	<tr>
		<td>data</td>
		<td>the item array</td>
		<td>yes</td>
		<td>[]</td>
	</tr>
	<tr>
		<td>itemsPerRender</td>
		<td>items to be rendered per load</td>
		<td>yes</td>
		<td>3</td>
	</tr>
	<tr>
		<td>containerClasses</td>
		<td>list container classes for CSS</td>
		<td>no</td>
		<td>''</td>
	</tr>
	<tr>
		<td>defaultLoading</td>
		<td>to show the default loading or not</td>
		<td>no</td>
		<td>true</td>
	</tr>
	<tr>
		<td>defaultLoadingColor</td>
		<td>color of the default loading </td>
		<td>no</td>
		<td>'#18191A'</td>
	</tr>
</table>

## Examples

-  [Simple example in Svelte js](https://lazy-load-svelte-example.netlify.com)
-  [Simple example in Vue js](https://lazy-load-vue-example.netlify.com)

you can find the source code of examples in [examples](https://github.com/omer73364/lazy-load-list/tree/main/examples) folder


