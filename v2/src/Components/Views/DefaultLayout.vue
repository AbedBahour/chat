<template>
    <div>
        <NavBar/>
        <DashChat/>
        <router-view/>
    </div>
</template>
<script setup>
import NavBar from '../NavBar.vue'
import DashChat from '../DashChat/DashChat.vue'
</script>