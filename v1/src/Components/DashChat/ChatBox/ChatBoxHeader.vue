<template>
    <div class="chat-box-header">
        <button id="open-contacts" class="dash-btn sm"> <span>Contacts</span> </button>
        <div class="avatar-image">
            <img src="../../../images/chat-avatar.png">
        </div>
        <div class="chat-box-contact">Hilda Hansen</div>
        <div class="chat-box-order">#123456</div>
        <div class="break"></div>
        <div class="chat-box-menu dash-has-menu" @click="handleClick">
            <div class="chat-box-icon">
                <i class="fas fa-ellipsis-v"></i>
                <ul class="dash-sub-menu" :style="{display: active ? '' : 'none',}">
                    <li class="dash-sub-menu-item"><router-link :to="{name:'Agreement'}">Create An Agreement</router-link></li>
                    <li class="dash-sub-menu-item"><router-link :to="{name:'SendFile'}">Send File </router-link></li>
                    <li class="dash-sub-menu-item"><router-link :to="{name:'Reporting'}">Reporting</router-link></li>
                </ul>
            </div>
        </div>
        <button id="open-agreements" class="dash-btn sm"> <span>Attachments</span> </button>
    </div>
</template>
<script setup>
import { ref } from 'vue'
const active = ref('false')
function handleClick(){
    active.value = !active.value
}
</script>
<style scoped>
.chat-box-header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 60px;
    background-color: #FFF;
}
.chat-box-header .chat-box-order{
    margin-left: 25px;
    font-size: 18px;
    color: #040506;
    flex-grow: 1;
}

.chat-box-header .chat-box-icon{
    width: 24px;
    height: 24px;
    line-height: 22px;
    text-align:center;
    font-size: 14px;
    border: 1px solid #040506;
    border-radius: 50%;
    cursor: pointer;
}
.chat-box-menu.dash-has-menu .dash-sub-menu{
    left: initial;
    right: 0;
    max-width: 220px;
}
.chat-box-header .dash-sub-menu{
    text-align: left;
}
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
#open-contacts{
    margin-right: 15px;
}
#open-agreements{
    margin-left:15px
}
#open-contacts , #open-agreements{
    border: none;
    padding: 10px 20px;
    font-weight: bold;
    cursor: pointer;
}
.chat-box-icon{
    position: relative;
}
.dash-sub-menu{
    width: 200px;
    height: auto;
    background-color: #fff;
    position: absolute;
    padding: 10px;
}
.dash-sub-menu-item{
    margin: 10px 0;
}
.dash-sub-menu-item a{
    color:black;
}
.chat-box-contact{
    font-size: 18px;
    color: #040506;
    padding-right: 55px;
    border-right:1px solid rgba(201, 201, 201, 25%) ;
}
@media(max-width:639px){ 
    #open-contacts{
        display: block;
    }
}
@media screen and (max-width:750px) {
    .chat-box-header{
        flex-wrap: wrap;
    }
    .chat-box-header .avatar-image{
        order: 1;
    }
    .chat-box-header .chat-box-contact{
        order: 2;
    }
    .chat-box-header .chat-box-order{
        order: 3;
    }
    .chat-box-contact{
        padding-right: 15px;
    }
    .chat-box-header .break{
        flex-basis: 100%;
        order: 4;
        margin-bottom: 10px;
    }
    .chat-box-header #open-contacts{
        order: 5;   
    }
    
    .chat-box-header #open-agreements{
        order: 6;
    }
    .chat-box-header .dash-has-menu{
        order: 7;
    }
        .chat-box-header .dash-btn.sm {
        padding: 12px 12px;
    }
    .chat-box-header{
        padding: 10px;
    }
}
@media(max-width:400px){
    .chat-box-header .chat-box-order{
        margin-left: 0px;
    }
}
</style>