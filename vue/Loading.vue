<template>
  <div class="dots">
    <div :style="`background-color: ${color}`"></div>
    <div :style="`background-color: ${color}`"></div>
    <div :style="`background-color: ${color}`"></div>
  </div>
</template>

<script>
export default {
    name: 'Loading',
    props:{
      color:{
        type: String,
        default: '#18191A',
      },
    }
}
</script>

<style>
    .dots {
        width: 3.5em;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: space-between;
    }

    .dots div {
        width: 0.8em;
        height: 0.8em;
        border-radius: 50%;
        animation: fade 0.8s ease-in-out alternate infinite;
    }

    .dots div:nth-of-type(1) {
        animation-delay: -0.4s;
    }

    .dots div:nth-of-type(2) {
        animation-delay: -0.2s;
    }

    @keyframes fade {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
</style>