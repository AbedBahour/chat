<template>
    <div v-bind:class="msg.type">
        <div class="avatar-image">
            <img :src="msg.image">
        </div>
        <TextContent :msg="msg"/>
        <ImageContent :msg="msg"/>
        <TextImageContent :msg="msg"/>
        <AgreementContent :msg="msg"/>
        <div class="send-message-time">{{msg.messageTime}}</div>
    </div>
</template>
<script setup>
import TextContent from '../ChatBox/ChatContent/TextContent.vue'
import ImageContent from '../ChatBox/ChatContent/ImageContent.vue'
import TextImageContent from '../ChatBox/ChatContent/TextImageContent.vue'
import AgreementContent from '../ChatBox/ChatContent/AgreementContent.vue'
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
</style>