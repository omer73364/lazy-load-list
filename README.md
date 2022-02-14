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

> ⚠  you must specify the height in containerClasses 
> e.g:  height: 320px;
> 
> or the list will not work

- <img width="14" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/1200px-Svelte_Logo.svg.png" alt="svelte logo"/> svelte js:

> 
	import LazyList from 'lazy-load-list/svelte'

	<LazyList
		data={[1,2,3,4,5,6,7,8]}
		itemsPerRender={4}
		containerClasses="container" // must specify height in this class
	>
		<h1 let:item={category}> { item } </h1>
	</LazyList>

- <img width="14" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png" alt="svelte"/> vue js:

> 
	<LazyList
		:data="[1,2,3,4,5,6,7,8]"
		:itemsPerRender="4"
		containerClasses="container" // must specify height in this class
	>
		<template slot-scope="{item}">
			<h1> {{ item }} </h1>
		</template>
	</LazyList>
	
	// script
	import LazyList from 'lazy-load-list/vue'
	..
	components: { LazyList } // don't forget to define it in the components
	

## Examples

-  [Simple example in Svelte js](https://codesandbox.io)

-  [Simple example in Vue js](https://codesandbox.io)


