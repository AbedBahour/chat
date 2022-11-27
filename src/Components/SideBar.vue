<template>
          <div class="dash-contacts">
            <span id="close-contacts"><i class="fa fa-times"></i></span>
            <div class="dash-contacts-search">
                <div class="icon"><i class="fa fa-search"></i></div>
                <input placeholder="Search Message">
            </div>
            <ul class="dash-list-contacts">
                <MsgDetails/>
            </ul>
        </div>
</template>
<script setup>
import MsgDetails from './Messge/MsgDetails.vue'
</script>
<style scoped>
        .dash-btn{
            padding: 15px 72px;
            border-radius: 5px;
            border: none;
            font-size: 20px;
            font-weight: bold;
            cursor: pointer;
        }

        .dash-profile-details .dash-profile-bio , .dash-profile-details .dash-profile-address , .dash-profile-details .dash-profile-email,
        .dash-product-order , .dash-product-details , .dash-product .dash-old-price
        {
            color:#9D9D9D;
        }

        .dash-btn.edit-btn{
            background-color: #4E1B56;
            color: #FFF;
        }
        .dash-btn.chat-btn{
            background-color: #3EADB7;
            color: #FFF;
            margin-bottom: 25px;
        }
        .dash-chat .dash-contacts{
            max-width: 350px;
            padding: 20px;
            background-color: #FFF;
        }

        .dash-chat .dash-contacts-search{
            position: relative;
        }
        .dash-contacts-search input{
            display: block;
            width: 100%;
            border: none;
            color: #9D9D9D;
            font-size: 12px;
            padding: 12px;
            padding-left: 24px;
            background-color: rgba( 62, 173, 183, 5%);
            border-radius: 4px;
        }
        .dash-contacts-search .icon{
            color: #9D9D9D;
            font-size: 24px;
            position: absolute;
            top:calc(50% - 12px);
            left:0px;
        }
@media(max-width:639px){
    .dash-contacts{
        position: absolute;
        top: 0;
        bottom: 0;
        left: -100%;
        padding-top: 60px;
    }
    #close-contacts{
        display: block;
    }
}
</style>