<template>
    <div class="dash-dailog">
        <div class="dash-dailog-box voice-call-box">
            <div class="voice-call">
                <div class="avatar">
                    <img src="../../../images/chat-avatar-lg.png">
                </div>
                <div class="contact">Hilda Hansen</div>
                <div class="status">Call you</div>
                <div class="time">01:02:00</div>
                <div class="call-actions">
                    <button class="close"><i class="fa fa-times"></i></button>
                    <button class="mute"><i class="fa fa-microphone-slash"></i></button>
                    <button class="video"><i class="fa fa-video"></i></button>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.dash-dailog{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(201,201,201,20%);
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
}

.dash-dailog .dash-dailog-box{
    background: #FFF;
    border-radius: 20px;
    padding: 50px 70px;
    min-width: 750px;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
}
.dash-dailog .dash-dailog-box > *:not(:last-child) , .dash-form > *:not(:last-child){
    margin-bottom: 15px;
}

.dash-dailog .icon{
    max-width: 70px;
}
.dash-dailog .icon img{
    max-width: 100%;
    display: block;
    margin: auto;
}

.dash-dailog .title{
    font-size: 28px;
    color: #040506;
    font-weight: bold;
}
.dash-dailog .description {
    font-size: 24px;
    color: #C9C9C9;
    text-align: center;
}

.dash-dailog .description.thanks{
    max-width: 420px;
}

.dash-dailog .dash-form{
    width: 100%;
}

.dash-form textarea , .dash-form input , .dash-form select {
    color: rgba(157, 157, 157, 23%);
    padding: 14px 30px;
    border:1px solid rgba(157, 157, 157, 23%);
    border-radius: 5px;
    display: block;
    width: 100%;
    font-size: 20px;
}
.dash-form textarea {
    min-height: 160px;
}

.dash-form button[type=submit] , .dash-form input[type="submit"]{
    width: 100%;
    padding: 16px;
    border-radius: 5px;
    background-color: #4E1B56;
    color: #FFF;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    border: none;
}

button.files-uploader{
    width: 100%;
    padding: 16px;
    border-radius: 5px;
    background-color: rgba(201, 201, 201, 23%);
    cursor: pointer;
    border: none;
}
button.files-uploader img{
    width: 24px;
}

.dash-form button[type=submit].pelorous , .dash-form input[type="submit"].pelorous{
    background-color: #3EADB7;   
}

.dailog-buttons-actions{
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
    width: 100%;
    flex-wrap: wrap;
}
.dailog-buttons-actions button{
    padding: 15px;
    text-align: center;
    border-radius: 5px;
    font-size: 20px;
    font-weight: bold;
    color: #FFF;
    border: none;
    width: calc(50% - (15px / 2));
    flex-grow: 1;

}
.dailog-buttons-actions button.ending{
    background-color: #FB5B5B;
}

.dailog-buttons-actions button.back-conversation{
    background-color: #3EADB7;
}


@media(max-width:800px){
    .dash-dailog .dash-dailog-box{
        min-width: calc(100% - 20px);
        padding: 40px 10px;
    }

    .dash-dailog .title{
        font-size: 22px;
    }
    
    .dash-dailog .description , .dash-form textarea , .dash-form input , .dash-form select {
        font-size: 18px;
    }
}

@media (max-width:500px) {
    .dash-dailog .icon{
        max-width: 50px;
    }

    .dailog-buttons-actions button{
        width: 100%;
    }
}

.dash-dailog .dash-dailog-box.voice-call-box{
    min-width: auto;
}

.dash-dailog .voice-call{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-size: 18px;
}
.dash-dailog .voice-call .avatar{
    max-width: 136px;
}

.dash-dailog .voice-call img{
    max-width: 100%;
    margin: auto;
}

.dash-dailog .voice-call > *:not(:last-child){
    margin-bottom: 15px;
}

.dash-dailog .voice-call .contact{
    color: #101B4F;
}

.dash-dailog .voice-call .time , .dash-dailog .voice-call .status{
    color: #3EADB7;
}
.dash-dailog  .call-actions{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 18px;
    
}
.dash-dailog  .call-actions button{
    text-align: center;
    width: 35px;
    height: 35px;
    line-height: 35px;
    color: #FFF;
    overflow: hidden;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    font-size: 18px;
}
.dash-dailog  .call-actions button.close{background-color: #FB5B5B;}
.dash-dailog  .call-actions button.mute ,.dash-dailog  .call-actions button.video {background-color: #E590B5;
}
</style>