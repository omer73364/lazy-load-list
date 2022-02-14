<template>
  <div class="dots">
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
  </div>
</template>

<style>
    .dots {
        width: 3.5em;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: space-between;
    }

    .dot{
        background-color: #18191A;
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