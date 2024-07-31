<template>
    <section class="text-center flex flex-col justify-center items-center h-96">
      <i class="fas fa-exclamation-triangle text-yellow-400 fa-4x mb-4"></i>
      <h1 class="text-6xl font-bold mb-4">{{notFound}}</h1>
      <p class="text-xl mb-5">{{notExist}}</p>
      <RouterLink
        to="/"
        class="text-white bg-green-700 hover:bg-green-900 rounded-md px-3 py-2 mt-4"
        >Go Back</RouterLink
      >
    </section>
</template>

<script setup>
    import { RouterLink } from "vue-router";
    import {defineProps} from "vue"
    defineProps({
        notFound:{
            type:String,
            default:"404 Not Found"
        },
        notExist:{
                type:String,
                default:"This Page does not exist"
            }
    })
</script>

