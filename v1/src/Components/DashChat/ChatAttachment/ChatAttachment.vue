<template>
    <div class="chat-attachment" style="right: 0px;">
            <span id="close-agreements"><i class="fa fa-times"></i></span>
            <div class="chat-product">
                <div class="product-info">
                    <div class="product-title-and-price">
                        <div class="product-title">Name Product ..........T</div>
                        <div class="product-price-discount">
                            <span class="product-price">200$</span>
                            <span class="product-old-price">350$</span>
                        </div>
                    </div>
                    <div class="product-action-and-order">
                        <button class="dash-btn product-btn">Stop Selling</button>
                        <span class="product-order">#3123</span>
                    </div>
                </div>
                <div class="product-details">
                    Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore
                </div>
            </div>
            <div class="chat-attachment-tabs">
                <ul class="tabs-links">
                    <li><a class="link active" href="javascript:void(0)">Agreemnts</a></li>
                    <li><a class="link" href="javascript:void(0)">Files</a></li>
                    <li><a class="link" href="javascript:void(0)">Rules</a></li>
                </ul>
                <div class="agreemet-tab">
                    <div class="dash-agreement">
                        <div class="agreement-title">Agreement Details</div>
                        <p class="agreement-details">
                                Lorem Ipsum Dolor Sit 
                                Amet, Consetetur 
                                Sadipscing Elitr, 
                            <button class="dash-btn read-agreement-btn">Read Agreement</button>
                        </p>
                    </div>
                    <div class="dash-agreement">
                        <div class="agreement-title">Agreement Details</div>
                        <p class="agreement-details">
                                Lorem Ipsum Dolor Sit 
                                Amet, Consetetur 
                                Sadipscing Elitr, 
                            <button class="dash-btn read-agreement-btn">Read Agreement</button>
                        </p>
                    </div>
                    <div class="dash-agreement">
                        <div class="agreement-title">Agreement Details</div>
                        <p class="agreement-details">
                                Lorem Ipsum Dolor Sit 
                                Amet, Consetetur 
                                Sadipscing Elitr, 
                            <button class="dash-btn read-agreement-btn">Read Agreement</button>
                        </p>
                    </div>
                </div>
            </div>
            <div class="dash-hsitory-calls">
                <div class="history-call missed">
                    <div class="image">
                        <img src="../../../images/chat-avatar.png">
                    </div>
                    <div class="history-call-info">
                        <div class="history-call-contact">Hilda Hansen</div>
                        <div class="history-call-status">
                            <span class="history-call-text">Missed Call From You</span>
                            <span class="history-call-time">08:43 Am</span>
                        </div>
                    </div>
                    <div class="history-call-icon">
                        <i class="fa fa-phone-slash"></i>
                    </div>
                </div>
                <div class="history-call">
                    <div class="image">
                        <img src="../../../images/chat-avatar.png">
                    </div>
                    <div class="history-call-info">
                        <div class="history-call-contact">Hilda Hansen</div>
                        <div class="history-call-status">
                            <span class="history-call-text">Missed Call From You</span>
                            <span class="history-call-time">08:43 Am</span>
                        </div>
                    </div>
                    <div class="history-call-icon">
                        <i class="fa fa-phone"></i>
                    </div>
                </div>
                <div class="history-call">
                    <div class="image">
                        <img src="../../../images/chat-avatar.png">
                    </div>
                    <div class="history-call-info">
                        <div class="history-call-contact">Hilda Hansen</div>
                        <div class="history-call-status">
                            <span class="history-call-text">Missed Call From You</span>
                            <span class="history-call-time">08:43 Am</span>
                        </div>
                    </div>
                    <div class="history-call-icon">
                        <i class="fa fa-phone"></i>
                    </div>
                </div>
            </div>
            <div class="ringing-call">
                <div class="avatar-image lg">
                    <img src="../../../images/chat-avatar.png">
                </div>
                <div class="ringing-info">
                    <div class="contact-name">Hilda Hansen</div>
                    <div class="call-status">Call you</div>
                </div>
                <div class="ringing-actions">
                    <a href="javascript:void(0)" class="action action-close"><i class="fa fa-times"></i></a>
                    <a href="javascript:void(0)" class="action action-answer"><i class="fa fa-phone"></i></a>
                </div>
            </div>
        </div>
</template>
<style scoped>
.chat-attachment{
    max-width: 390px;
    padding: 20px 35px;
    background-color: #FFF;
    position: relative;
}
.chat-product{
    margin-bottom: 10px;
    padding-bottom:25px ;
    border-bottom: 1px solid rgba(16, 27, 79, 10%);
}

.chat-product .product-info{
    display: flex;
    justify-content: space-between;
}
.chat-product .product-action-and-order {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}
.chat-product .product-title{
    color: #040506;
    font-size: 20px;
    margin-bottom: 5x;
    font-weight: bold;
}
.chat-product .product-price-discount{
    display: flex;
}
.chat-product .product-price{
    color: #3EADB7;
    font-weight: bold;
    font-size: 20px;
    display: inline-block;
    margin-right: 8px;
}
.chat-product .product-old-price{
    font-size: 16px;
    text-decoration: line-through;
}

.chat-product .product-btn.dash-btn{
    padding: 7px;
    background: none;
    border: 1px solid #3EADB7;
    color: #3EADB7;
    margin-bottom: 5px;
    font-weight: 400;
}

.chat-product .product-order{
    font-size: 20px;
    color: #9B9B9B;
}

.chat-product .product-details{
    font-size: 18px;
    margin-bottom: 15px;
}

.chat-attachment-tabs{
    margin-bottom: 20px;
}

.chat-attachment .tabs-links{
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(16, 27, 79, 10%);
    margin-bottom: 15px;
}

.chat-attachment .tabs-links .link{
    font-size: 18px;
    color: #040506;
    text-align: center;
}
.chat-attachment .tabs-links .link.active{
    color: #E590B5;
    border-bottom:1px solid #E590B5;
}
        .dash-agreement {
    border-bottom: 1px solid rgba(16, 27, 79, 10%);
    padding: 15px 0px;
}

.dash-agreement .agreement-title{
    font-size: 16px;
    font-weight: bold;
    color: #040506;
}
.dash-agreement .agreement-details{
    font-size: 18px;
    color: #9B9B9B;
}
.dash-agreement .agreement-details .read-agreement-btn{
    padding: 10px;
    cursor: pointer;
    color: #3EADB7;
    border:1px solid #3EADB7;
    font-weight: bold;
    font-size: 16px;
    flex-grow: 1;
    display: inline-block;
    margin-left: 10px;
    background-color: #FFF;
}

.dash-history-calls{
    position: relative;
}

.history-call{
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(16, 27, 79, 10%);
    padding: 10px 0px ;
}
.history-call .image{
    width: 40px;
    height: 40px;
    overflow: hidden;
}
.history-call .image img{
    display: block;
    margin: auto;
    border-radius: 50%;
    max-width: 100%;
}
.history-call .history-call-info{
    flex-grow: 1;
    margin: 0px 5px;
}
.history-call .history-call-contact{
    font-size: 18px;
}
.history-call .history-call-status{
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    color: #3EADB7;
}
.history-call.missed .history-call-status{
    color: #FB5B5B;
}

.history-call .history-call-time{
    font-size: 14px;
}
.history-call .history-call-icon{
    width: 35px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    border-radius: 50%;
    font-size: 20px;
    color: #FFF;
    background-color: #3EADB7;
}
.history-call.missed .history-call-icon{
    background-color: #FB5B5B;
}
    .ringing-call{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 25px;
    background-color: #3EADB7;
    color: #FFF;
    font-size: 18px;
    gap: 12px;
    border-radius: 20px;
}

.chat-attachment .ringing-call{
    position: absolute;
    bottom: 0;
    left: 20px;
    right: 20px;
}
.avatar-image.lg{
    width: 78px;
    height: 78px;
    line-height: 78px;
}
.ringing-call .ringing-actions{
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap:18px;
}

.ringing-call .ringing-actions .action{
    width: 35px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    border-radius: 50%;
    font-size: 18px;
}
.ringing-call .ringing-actions .action-close{
    background-color: #FB5B5B;
    color: #FFF;
}
.ringing-call .ringing-actions .action-answer{
    background-color: #FFFFFF;
    color: #3EADB7;
}
        .chat-attachment #close-agreements{
    right: initial;
    left: 10px;
}
.dash-btn{
    cursor: pointer;
    color: #86CBD2;
}
@media(max-width:640px){
    .chat-attachment{
        position: absolute;
        top: 0;
        bottom: 0;
        right: -100%;
        padding-top: 60px;
    }
}
@media(max-width:400px){
    .chat-attachment{
        max-width: 100vw;
    }
}
</style>