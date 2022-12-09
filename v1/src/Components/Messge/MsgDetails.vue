<template>
    <li v-for="m of msg" :key="m.id" class="dash-contact-item">
        <a href="javascript:void(0)" class="contanct">
        <div class="dash-contact-image">
            <img :src="m.src">
        </div>
        <div class="contact-name-message">
            <div class="contact-name">{{m.contactName}}</div>
            <div class="contact-last-message">{{m.lastMsgDatails.lastMsg}}</div>
        </div>
        <div class="contact-time-count">
            <div class="contact-last-messages-time">{{m.lastMsgDatails.lastDate}}</div>
            <div class="contact-last-messages-count">{{m.lastMsgDatails.lastMsgCount}}</div>
        </div>
    </a>
</li>
</template>
<script setup>
import msg from '../Messge/MsgData'
</script>
<style scoped>
.dash-contact-item{
    padding: 18px 0px ;
    border-bottom: 1px solid rgba(16, 27, 79, 10%);
    margin-bottom: 20px;
}
.dash-contact-item a{
    display: flex;
    justify-content: space-between;
}
.dash-contact-item .dash-contact-image{
    width: 40px;
    height: 40px;
    overflow: hidden;
    margin-right: 16px;
}
.dash-contact-item .dash-contact-image img{
    border-radius: 50%;
    max-width: 100%;
    display: block;
    margin: auto;
}
.dash-contact-item .contact-name{
    padding-top: 8px;
    font-size: 16px;
    color: #4E1B56;
    margin-bottom: 14px;
}
.dash-contact-item .contact-last-message{
    font-size: 12px;
    color: #9B9B9B;
}
.dash-contact-item .contact-time-count{
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.dash-contact-item .contact-last-messages-time{
    font-size: 12px;
    color: #9D9D9D;
}
.dash-contact-item .contact-last-messages-count{
    width: 22px;
    height: 22px;
    line-height: 22px;
    background-color: #3EADB7;
    border-radius: 50%;
    color: #FFF;
    text-align: center;
}
</style>