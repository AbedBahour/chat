<template>
    <div class="chat-time-line">
        <span>{{new Date(msg.created_at).getDate()}}-{{new Date(msg.created_at).getMonth()+1}}-{{new Date(msg.created_at).getFullYear()}}</span>
    </div>
    <div v-bind:class="msg.from === 1 ? 'sender' : 'receiver'" :style="{display: msg.type === 'call' ? 'flex' : '',flexDirection: msg.type === 'call' ? 'column' : ''}">
        <div class="avatar-image" :style="{display: msg.type === 'call' ? 'none' : ''}">
            <img src="https://pickaface.net/gallery/avatar/20151205_194059_2696_Chat.png">
        </div>
        <TextContent :msg="msg"/>
        <ImageContent :msg="msg"/>
        <TextImageContent :msg="msg"/>
        <AgreementContent :msg="msg"/>
        <CallMessage :msg="msg"/>
        <div class="send-message-time">{{new Date(msg.created_at).getHours()}}:{{new Date(msg.created_at).getMinutes()}}</div>
    </div>
</template>
<script setup>
import TextContent from '../ChatBox/ChatContent/TextContent.vue'
import ImageContent from '../ChatBox/ChatContent/ImageContent.vue'
import TextImageContent from '../ChatBox/ChatContent/TextImageContent.vue'
import AgreementContent from '../ChatBox/ChatContent/AgreementContent.vue'
import CallMessage from '../ChatBox/ChatContent/CallMessage.vue'
// eslint-disable-next-line vue/no-setup-props-destructure, no-undef
const { msg } = defineProps({
    msg: {
        required: true,
        type: Object,
    },
})
</script>
<style scoped>
.sender , .receiver{
    display: flex;
    justify-content: flex-start;
}
.receiver {
    direction: rtl;
}
.receiver > * {
    direction: ltr;
}
.receiver .avatar-image{
    margin-left: 18px;
    margin-right: initial;
}
.receiver .avatar-image img{
    margin-left: 5px;
}
.sender .avatar-image img {
    margin-right: 5px;
}
.avatar-image img{
    width: 30px;
    border-radius: 50%;
}
.receiver .send-message-time{
    margin-right: 10px;
    margin-left: initial;
}
.content-order-details , .content-chat-text{
    background: #FFF;
    padding: 25px 20px;
    border-radius: 20px;
    max-width: 575px;
}
.receiver .content-order-details , .receiver .content-chat-text{
    background: #C9C9C9;
}
.content-order-details , .content-chat-text{
    border-top-left-radius: 0px;
}
.receiver .content-order-details , .receiver .content-chat-text{
    border-top-left-radius: 20px;
    border-top-right-radius: 0px;
}
.send-message-time{
    font-size: 14px;
    color: #9B9B9B;
    margin-left: 10px;
}
.chat-box-content .chat-time-line{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 37px;
    margin-top: 20px;
}
.chat-box-content .chat-time-line span{
    font-size: 14px;
    color: #9B9B9B;
}
.chat-box-content .chat-time-line::after, .chat-box-content .chat-time-line::before{
    content: "";
    height: 1px;
    background-color: #9D9D9D;
    flex-grow: 1;
}
.chat-box-content .chat-time-line::after{
    margin-left: 100px;
}
.chat-box-content .chat-time-line::before{
    margin-right: 100px;
}
</style>