<template>
    <div>
        <v-header tit="注册" :right-style="{width:'0.8rem'}">
            <a href="javascript:window.history.go(-1);" slot="left"> < </a>
            <!-- <p slot="right" class="right">
                <a href="javascript:;"> 车 </a> 
                <a href="javascript:;"> 三 </a> 
            </p> -->
        </v-header>
     <v-content>
        <div class="form-list">
            <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>

             <mt-field label="图形验证码" placeholder="请输入图形验证码" v-model="imgCaptcha">
                <img :src="captchaSrc"  @click="getCaptchaSrc" height="45px" width="100px">
             </mt-field>

             <mt-field label="验证码" placeholder="请输入短信验证码" v-model="captcha">
                 <mt-button type="primary" @click="getCaptcha">获取验证码</mt-button>
            </mt-field>

            <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>

            <mt-field label="确认密码" placeholder="请再次输入密码" type="password" v-model="rPassword"></mt-field>
            
            <div>
                <mt-button class="bottom"  @click="submit" size="large" type="danger">注册</mt-button>
            </div>
        </div>
    </v-content>
    </div>
   
</template>

<script>
import Header from "./Header"
import qs from "qs"
import { MessageBox } from 'mint-ui';

export default {
    name:'reg',
    components:{"v-header":Header},
    data(){
        return{
            agreement:true,     //是否同意用户协议
            captcha:"" ,        //短信验证码
            imgCaptcha:"",    //图片验证码
            password:"",        //密码
            rPassword: "",     //再次输入密码
            phone: "",        //账号/手机号 
            captchaSrc:"http://m.loho88.com/code/mobile/getCaptchaCode?"+Math.random()
        }
    },
    methods:{
        getCaptchaSrc(){ //图片验证码
            this.captchaSrc = "http://m.loho88.com/code/mobile/getCaptchaCode?"+Math.random();
        },
        getCaptcha(){ //短信验证
            if(this.imgCaptcha){

            }
            if(this.phone){

            }
            this.$http.post(`/m/uc/mobile/register/code?captcha=${this.imgCaptcha}&mobile=${this.phone}`)
                .then(res=>{
                    console.log(res.data)
                })
        },
        submit(){ //注册按钮
            if( this.phone && this.imgCaptcha && this.captchaSrc && this.password && this.rPassword){
                var params = {
                    agreement:true,
                    captcha:this.captcha  ,
                    inputCaptcha:this.imgCaptcha ,
                    password:this.password,
                    repassword:this.rPassword,
                    username:this.phone
                }
                this.$http.post("/m/uc/mobile/register",qs.stringify(params),{
                    headers:{
                        "Content-type":"application/x-www-form-urlencoded"
                    }
                })
            }
                
        }
    }
}
</script>

<style lang="less" scoped>
.right{
    text-align: center;
}
.bottom{
    position: fixed;
    bottom: 0;
}
</style>


