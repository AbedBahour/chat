<template>
    <NavBar/>
    <DashChat/>
</template>
<script setup>
import NavBar from './Components/NavBar.vue'
import DashChat from './Components/DashChat/DashChat.vue'
</script>
<style>
    *{
            font-family: 'Barlow', sans-serif;
            box-sizing: border-box;
            padding: 0;
            margin: 0;
        }
        ul{
            list-style-type: none;
        }
        a{
            text-decoration: none;
        }
</style>