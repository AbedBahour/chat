<template>
    <div class="dash-chat">
        <SideBar/>
        <ChatBox/>
    </div>
</template>
<script setup>
import SideBar from '../SideBar.vue'
import ChatBox from './ChatBox/ChatBox.vue'
</script>
<style scoped>
.dash-chat{
    display: flex;
    justify-content: space-between;
    align-items:stretch ;   
    position: relative;
    overflow: hidden;
}
@media(max-width:639px){ 
    .dash-chat .chat-attachment{
        position: absolute;
        top: 0;
        bottom: 0;
        right: -100%;
    }
    .dash-chat #open-agreements{
        display: block;
    }

    .dash-chat .chat-attachment{
        padding-top: 60px;
    }
}


@media(max-width:400px){
    .dash-chat .chat-attachment{
        max-width: 100vw;
    }
}
</style>