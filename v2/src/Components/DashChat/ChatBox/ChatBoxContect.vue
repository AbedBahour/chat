<template>
    <div class="chat-box-content">
        <ChatDetails v-for="msg of messeges" :key="msg.id" :msg="msg"/>
    </div>
</template>
<script setup>
import ChatDetails from '../ChatBox/ChatDetails.vue'
import ChatMessage from '../../Api/ChatMessage'

import { ref } from 'vue'
const messeges = ref();
messeges.value = ChatMessage.sort(function(a, b) {
    return new Date(a.created_at) - new Date(b.created_at);
})
</script>
<style scoped>
.avatar-image{
    width: 40px;
    height: 40px;
    line-height: 40px;
    overflow: hidden;
    margin-right: 18px;
}
.avatar-image img{
    display: block;
    margin: auto;
    max-width:100% ;
    border-radius: 50% ;
}
.chat-box-content{
    padding: 20px 60px;
    flex-grow: 1;
    overflow-y: auto;
    margin-bottom: 15px;
}
.chat-box-content > *{
    margin-bottom: 40px;
}
.chat-box-sender , .chat-box .chat-box-reciver{
    display: flex;
    justify-content: flex-start;
}
.chat-box .chat-box-reciver {
    direction: rtl;
}
.chat-box-reciver > * {
    direction: ltr;
}
.chat-box-reciver .avatar-image{
    margin-left: 18px;
    margin-right: initial;
}
.chat-box-reciver .send-message-time{
    margin-right: 10px;
    margin-left: initial;
}
.content-order-details , .chat-box .content-chat-text{
    background: #FFF;
    padding: 25px 20px;
    border-radius: 20px;
    max-width: 575px;
}
.chat-box-reciver .content-order-details , .chat-box .chat-box-reciver .content-chat-text{
    background: #C9C9C9;
}
.content-order-details , .chat-box  .content-chat-text{
    border-top-left-radius: 0px;
}
.chat-box-reciver .content-order-details , .chat-box  .chat-box-reciver .content-chat-text{
    border-top-left-radius: 20px;
    border-top-right-radius: 0px;
}
.send-message-time{
    font-size: 14px;
    color: #9B9B9B;
    margin-left: 10px;
}
.content-order-details .order-details-summary{
    font-size: 18px;
    font-weight: bold;
    color: #040506;
    margin-bottom: 20px;
}
.content-order-details .order-details{
    max-width: 500px;
    margin: auto;
}
.content-order-details .order-details-list{
    margin-bottom: 30px;
}
.content-order-details  .product-with-price{
    display: flex;
    border-bottom: 1px solid #EEE;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
    color: #040506;
    padding: 8px 0px;
}
.content-order-details .product-with-price.total{
    border-bottom: none;
}
.content-order-details .payment-method{
    border-bottom: 1px solid rgba(201, 201, 201, 25%);
    border-top:  1px solid rgba(201, 201, 201, 25%);
    padding:12px 0px;
    margin-bottom:10px;
}
.content-order-details .payment-method .key{
    font-size: 20px;
    color: #040506;
    margin-right: 12px;
}
.content-order-details .payment-method .value{
    color: #9D9D9D;
}

.content-order-details .notes{
    font-size: 18px;
    color: #9D9D9D;
    margin-bottom: 62px;
}

.content-order-details .status-order{
    font-size: 20px;
    color: #040506;
    padding: 10px 0px;
    border-top: 1px solid #C9C9C9;
    border-bottom: 1px solid #C9C9C9;
    text-align: center;
}
@media(max-width:750px){
    .chat-box .chat-box-content{
        padding: 10px;
    }
    .chat-box-sender , .chat-box .chat-box-reciver{
        flex-wrap: wrap;
    }
    .content-order-details , .chat-box .content-chat-text{
        flex-grow: 1;
        width: 100%;
        margin: 10px 0;
        border-radius: 4px;
    }
    .send-message-time{
        flex-basis: 100%;
        text-align: right;
    }
}
</style>