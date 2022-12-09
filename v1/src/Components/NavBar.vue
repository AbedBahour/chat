<template>
        <nav>
        <div class="logo">
            <img src="../images/logo.png"/>
        </div>
        <div class="nav-content">
            <div class="dash-nav-links">
                <ul class="dash-menu-links">
                    <li class="dash-menu-item"><a href="javascript:void(0)" class="dash-menu-link active">Home</a></li>
                    <li class="dash-menu-item dash-has-menu">
                        <a href="javascript:void(0)" class="dash-menu-link">Categories</a>
                        <ul class="dash-sub-menu">
                            <li class="dash-sub-menu-item"><a href="javascript:void(0)">App</a></li>
                            <li class="dash-sub-menu-item"><a href="javascript:void(0)">Software</a></li>
                            <li class="dash-sub-menu-item"><a href="javascript:void(0)">Subscription</a></li>
                            <li class="dash-sub-menu-item"><a href="javascript:void(0)">Website</a></li>
                            <li class="dash-sub-menu-item"><a href="javascript:void(0)">Socail Media Accounts</a></li>
                            <li class="dash-sub-menu-item"><a href="javascript:void(0)">Digital Product Listing</a></li>
                            <li class="dash-sub-menu-item"><a href="javascript:void(0)">Game</a></li>
                            <li class="dash-sub-menu-item"><a href="javascript:void(0)">Other</a></li>
                        </ul>
                    </li>
                    <li class="dash-menu-item"><a href="javascript:void(0)" class="dash-menu-link">Request A Product</a></li>
                    <li class="dash-menu-item"><a href="javascript:void(0)" class="dash-menu-link">Blog</a></li>
                </ul>
            </div>
            <div class="dash-search">
                <input placeholder="Search" />
                <i class="fas fa-search serach-icon"></i>
            </div>
            <ul class="dash-right-menu">
                <li id="dash-notifications-toggle">
                    <a href="javascript:void(0)" class="icon-menu">
                        <span class="dash-count">1</span>
                        <i class="fas fa-bell"></i>
                    </a>
                    <ul id="dash-notifications-menu">
                        <li class="dash-notification-item">
                            <a class="" href="javascript:void(0)">
                                <span class="order-number">#32123</span>
                                <span class="order-status">Correspondence Request</span>
                                <span class="order-icon"><i class="fa fa-arrow-right"></i></span>
                            </a>
                        </li>
                        <li class="dash-notification-item">
                            <a class="" href="javascript:void(0)">
                                <span class="order-number">#32123</span>
                                <span class="order-status">Correspondence Request</span>
                                <span class="order-icon"><i class="fa fa-arrow-right"></i></span>
                            </a>
                        </li>
                        <li class="dash-notification-item">
                            <a class="" href="javascript:void(0)">
                                <span class="order-number">#32123</span>
                                <span class="order-status">Correspondence Request</span>
                                <span class="order-icon"><i class="fa fa-arrow-right"></i></span>
                            </a>
                        </li>
                        <li class="dash-notification-item">
                            <a class="" href="javascript:void(0)">
                                <span class="order-number">#32123</span>
                                <span class="order-status">Correspondence Request</span>
                                <span class="order-icon"><i class="fa fa-arrow-right"></i></span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="javascript:void(0)" class="icon-menu">
                        <span class="dash-count">1</span>
                        <i class="fas fa-envelope"></i>
                    </a>
                </li>
                <li class=" dash-has-menu">
                    <a href="javascript:void(0)" class="avatar-menu">
                        <img src="../images/nav-avatar.png" />
                    </a>
                    <ul class="dash-sub-menu">
                        <li class="dash-sub-menu-item"><a class="" href="javascript:void(0)">Dashboard</a></li>
                        <li class="dash-sub-menu-item"><a class="" href="javascript:void(0)">See Profile</a></li>
                        <li class="dash-sub-menu-item"><a class="" href="javascript:void(0)">Affiliate links</a></li>
                        <li class="dash-sub-menu-item"><a class="" href="javascript:void(0)">Logoff</a></li>
                    </ul>
                </li>
                <li class="dash-has-menu">
                    <a href="javascript:void(0)" class="dash-menu-terms "><i class="fas fa-bars"></i></a>
                    <ul class="dash-sub-menu">
                        <li class="dash-sub-menu-item"><a class="" href="javascript:void(0)">Terms of Use</a></li>
                        <li class="dash-sub-menu-item"><a class="" href="javascript:void(0)">Subscription Packages</a></li>
                        <li class="dash-sub-menu-item"><a class="" href="javascript:void(0)">About Us</a></li>
                        <li class="dash-sub-menu-item"><a class="" href="javascript:void(0)">Common Questions</a></li>
                        <li class="dash-sub-menu-item"><a class="" href="javascript:void(0)">Privacy Policy</a></li>
                    </ul>
                </li>
                <li><a  href="javascript:void(0)" class="dash-btn btn-sales">Sales</a></li>
            </ul>
        </div>

        <button class="menu-icon-btn">
            <span class="menu-icon">
                <span></span>
                <span></span>
                <span></span>
            </span>
        </button>

        
    </nav>
</template>
<style scoped>
        /* Start Nav  */

        nav{
            background-color: #FFF;
            border-bottom: 2px solid #eee;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 10px 25px;
            position: relative;
        }

        nav .logo{
            max-width: 100%;
        }

        nav .nav-content{
            display: flex;
            justify-content: center;
            align-items: center;            
        }

        nav .logo img{
            display: block;
            max-width: 180px;
            margin-right: 90px;
        }

        nav .dash-menu-links{
            display: flex;
            justify-content: flex-start;
            gap: 40px;
            margin-right: 100px;
        }

        nav .dash-menu-links .dash-menu-item{
            padding: 10px 0;
        }

        nav .dash-menu-link{
            font-size: 18px;
            font-weight: bold;
            color: #9D9D9D;
        }
        nav .dash-menu-link.active{
            font-size:18px;
            color: #4E1B56;
        }

        nav .dash-search{
            position: relative;
            margin-right: 30px;
        }
        nav .dash-search input{
            border: 1px solid #9D9D9D;
            border-radius: 4px;
            padding: 15px 25px;
            color: #9D9D9D;
            width: 325px;
            font-size: 18px;
        }

        nav .dash-search .serach-icon{
            position: absolute;
            right:25px ;
            font-size: 18px;
            top: calc(50% - 9px);
            color: #9D9D9D;
        }

        nav .dash-right-menu{
            display: flex;
            align-items: center;
            justify-content: flex-start;
            gap: 38px;
        }

        nav .dash-right-menu .icon-menu{
            font-size: 24px;
            color: #040506;
            position: relative;
        }
        nav .dash-right-menu .icon-menu .dash-count{
            position: absolute;
            top: -3px;
            left: -3px;
            /* padding: 2px; */
            border-radius: 50%;
            width: 14px;
            height: 14px;
            line-height: 14px;
            text-align: center;
            font-size: 10px;
            color: #040506;
            background-color: #FFF;
            font-weight: bold;
        }
        nav .dash-right-menu .avatar-menu , nav .dash-right-menu .dash-menu-terms{
            width: 40px;
            height: 40px;
            border-radius: 50%;
            overflow: hidden;
        }
        nav .dash-right-menu .avatar-menu img{
            display: block;
            margin: auto;
            max-width: 100%;
        }

        nav .dash-right-menu .dash-menu-terms{
            background-color: #4E1B56;
            color: #FFF;
            font-size: 20px;
            text-align: center;
            display: inline-block;
            line-height: 40px;

        }

        nav .dash-btn.btn-sales{
            background-color: #C9C9C9;
            color: #FFF;
            padding: 15px 60px;
            margin-left: 10px;
        }


        @media(min-width:1251px){
            .dash-has-menu:hover .dash-sub-menu{
            display: block !important;
            opacity: 1;
            }
        }

        .dash-has-menu , nav #dash-notifications-toggle{
            position: relative;
        }

        .dash-sub-menu , nav #dash-notifications-menu{
            position: absolute;
            top: 100%;
            left: 0;            
            min-width: 300px;
            background-color: #FFF;
            padding-top: 10px;
            display: none;
            transition: all 1s ease;
            z-index: 20;
        }

        nav #dash-notifications-menu{
            min-width: 420px;
        }
        
        .dash-sub-menu li a{
            font-size: 18px;
            color: #040506;
            width: 100%;
            display: block;
            padding: 8px 10px;
        }

        .dash-sub-menu li a:hover{
            border-left: 3px solid #3EADB7;
        }

        nav .dash-notification-item{
            padding: 5px 10px;
        }

        
        nav .dash-notification-item:hover{
            border-right: 3px solid #3EADB7;
        }


        nav .dash-notification-item a{
            display: block;
            background-color: #3EADB7;
            color: #FFF;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 16px 10px;
            border-radius: 8px;
        }

        nav .dash-notification-item a .order-number{
            padding-right: 10px;
            border-right: 1px dashed #FFF;
        }

        nav .dash-notification-item a .order-status{
            flex-grow: 1;
            padding-left: 10px;
        }


             
        .menu-icon-btn{
            border: none;
            background: none;
            display: none;
        }

        span.menu-icon {
            display: block;
            height: 1.25rem;
            width: 1.875rem;
            cursor: pointer;
            position: relative;
        }

        span.menu-icon span {
            display: block;
            position: absolute;
            height: 2px;
            width: 100%;
            background: #3a3a3a;
            border-radius: 9px;
            opacity: 1;
            left: 0;
            transition: all 0.2s ease-in-out 0s;
            -webkit-transition: all 0.2s ease-in-out 0s;
            -moz-transition: all 0.2s ease-in-out 0s;
            -ms-transition: all 0.2s ease-in-out 0s;
            -o-transition: all 0.2s ease-in-out 0s;
            -webkit-border-radius: 9px;
            -moz-border-radius: 9px;
            -ms-border-radius: 9px;
            -o-border-radius: 9px;
        }

        span.menu-icon span:nth-child(1) {
            top: 0;
        }

        span.menu-icon span:nth-child(2) {
            top: 9px;
            width: 80%;
        }

        span.menu-icon span:nth-child(3) {
            top: 1.125rem;
        }

        span.menu-icon.active span{
            background: #E590B5;
            width: 100% !important;
        }

        @media(max-width:1700px){
            nav .logo img{
                margin-right:40px
            }
            nav .dash-menu-links{
                gap: 20px;
            }

            nav .dash-menu-links{
                margin-right: 40px;
            }
        }

        @media(max-width:1510px){
            nav .dash-search{
                margin-right:15px;
            }
            nav .dash-search input{
                width: 220px;
            }
        }

        @media(max-width:1390px){
            nav .logo img{
                margin-right: 20px;
                max-width: 140px;
            }

            nav .dash-right-menu{
                gap:20px;
            }
        }
        @media(max-width:1250px){
            .menu-icon-btn{
                display: block;
            }

            nav .logo{
                flex-grow: 1;
                text-align: center;
            }
            nav .logo img{
                margin: auto;
            }

            nav .nav-content{
                position: absolute;
                top: 100%;
                display: flex;
                flex-direction: column;
                background: #FFF;
                width: 100%;
                justify-content: center;
                align-items: flex-start;
                z-index: 10;
                padding: 20px;
                display: none;
            }
            nav .nav-content > *{
                width: 100%;
            }
            nav .dash-menu-links {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                gap: 0;
            }
            nav .dash-search{
                margin-bottom: 15px;
            }
            nav .dash-search input{
                width: 100%;
            }
            nav .dash-right-menu{
                flex-wrap: wrap;
            }
}
</style>