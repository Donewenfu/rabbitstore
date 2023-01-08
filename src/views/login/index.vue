<template>
  <div class="login-page">
    <!--左侧区域-->
    <div class="login-left">
      <div class="logo-area" @click="goHome">
        <img src="../../assets/images/whitelogo.png" alt="">
      </div>
      <!--标语区域-->
      <div class="login-slogan-area">
        <div class="inner-slogan">
          <div class="line-one">{{sloganLanguage}}</div>
          <div class="line-two">象米商城你身边的赚钱机器！</div>
        </div>
      </div>
    </div>
    <!--右侧区域-->
    <div class="login-right">
      <div class="login-inner-form">
        <div class="weclome-slogan">
          <h3>欢迎来到</h3>
          <h3>象米</h3>
          <h3>,很高兴您来到这里</h3>
        </div>
        <!--表单区域-->
        <div class="form-area">
          <!--用户名-->
          <div class="username-area">
            <input type="text" placeholder="请输入用户名" @blur="inputblur('username')" v-model="formdata.username">
            <div class="error" v-if="showUsernameError && !formdata.username">
              <i class="iconfont icon-cuowu"></i>
              <span class="error-text">请输入用户名</span>
            </div>
          </div>
          <!--密码-->
          <div class="password-area">
            <input type="password" placeholder="请输入密码" @blur="inputblur('password')" v-model="formdata.password">
            <div class="error" v-if="showPasswordError && !formdata.password">
              <i class="iconfont icon-cuowu"></i>
              <span class="error-text">请输入密码</span>
            </div>
          </div>
          <!--登录按钮-->
          <div class="login-button">
            <rbutton :radius="40" @click="login">登录</rbutton>
          </div>
          <!--是否同意协议-->
          <div class="agreement">
            <rcheckbox v-model="isagreement">我已接受同意象米隐私条款</rcheckbox>
          </div>
          <!--其他登录方式-->
          <div class="other-login-type">
            <p class="title">其他登录方式</p>
            <ul>
              <li>
                <div class="login-type-icon">
                  <img src="../../assets/images/icon_Wechat_Highlight.svg" alt="">
                </div>
              </li>
              <li>
                <div class="login-type-icon">
                  <img src="../../assets/images/applelogin.png" alt="">
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// vue
import { onMounted, reactive, ref } from 'vue'
// vue-router
import { useRouter } from 'vue-router'
// 工具函数
import { getRandom } from '@/utils'
export default {
  name: 'login',
  setup () {
    // vue-router
    const router = useRouter()
    // 用户是否同意协议
    const isagreement =  ref(false)
    // 是否显示用户名错误
    const showUsernameError = ref(false)
    // 是否显示密码错误
    const showPasswordError = ref(false)
    // 表单数据
    const formdata = reactive({
      username: '',
      password: ''
    })
    // 语言language
    const sloganLanguage = ref('您好！')
    const languageList = ['您好！', '안녕하세요！', 'こんにちは!', 'Hola!', 'Hello!']
    // 一秒切换语言
    const changeLangguage = () => {
      setInterval(() => {
        sloganLanguage.value = languageList[getRandom(0, languageList.length - 1)]
      }, 1500)
    }
    // 跳转到首页
    const goHome = () => {
      router.push('/')
    }
    onMounted(() => {
      changeLangguage()
    })
    // 点击登录
    const login = () => {

    }
    // 输入框失去焦点
    const inputblur = (name) => {
      if (name === 'username' && !formdata.username) {
        showUsernameError.value = true
      } else if (name === 'password' && !formdata.password) {
        showPasswordError.value = true
      }
    }
    return {
      isagreement,
      sloganLanguage,
      goHome,
      login,
      inputblur,
      showUsernameError,
      showPasswordError,
      formdata
    }
  }
}
</script>

<style scoped lang="scss">
.login-page{
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  .login-left{
    width: 30%;
    height: 100vh;
    background-color: $txColor;
    background-image: url("../../assets/images/bglogo.png");
    background-repeat: no-repeat;
    background-position: right bottom;
    background-size: 400px;
    .logo-area{
      cursor: pointer;
      width: 80px;
      margin: 20px;
      &:hover{
        animation: shake .83s;
      }
      img{
        display: inline-block;
        width: 100%;
      }
    }
    .login-slogan-area{
      display: flex;
      justify-content: center;
      flex-direction: column;
      text-align: left;
      color: #fff;
      //margin-left: 150px;
      margin-top: 45%;
      height: 40px;
      .inner-slogan{
        margin: 0 auto;
      }
      .line-one{
        font-size: 28px;
        font-weight: bold;
        transition: all .3s;
      }
      .line-two{
        width: 300px;
        font-size: 35px;
        font-weight: bold;
        margin: 8px 0;
      }
    }
  }
  .login-right{
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .login-inner-form{
      //margin-top: 200px;
      margin-left: 150px;
      .weclome-slogan{
        display: flex;
        h3{
          font-weight: normal;
          font-size: 30px;
          color: #333;
          &:nth-child(2){
            color: $txColor;
            margin: 0 10px;
          }
        }
      }
      .form-area{
        margin-top: 60px;
        input{
          width: 500px;
          height: 40px;
          border-bottom: 1px solid #c9c9c9;
          font-size: 15px;
          &::placeholder{
            color: #484848;
          }
          &:focus{
            color: $txColor;
            border-bottom: 1px solid $txColor;
          }
        }
        .password-area{
          margin-top: 44px;
        }
        .login-button{
          margin-top: 50px;
          :deep{
            button{
              width: 500px;
              height: 42px;
              font-weight: bold;
              font-size: 15px;
            }
          }
        }
        .agreement{
          margin: 25px 0;
        }
        .other-login-type{
          .title{
            font-size: 14px;
            color: #333;
          }
          ul{
            display: flex;
            align-items: center;
            margin-top: 20px;
            li{
              display: flex;
              align-items: center;
              margin-right: 20px;
              cursor: pointer;
              &:last-child{
                img{
                  width: 28px;
                  height: 28px;
                }
              }
              img{
                width: 30px;
                height: 30px;
              }
            }
          }
        }
        .error{
          display: flex;
          align-items: center;
          margin: 10px 0;
          .iconfont{
            color: $warnColor;
            margin-right: 5px;
          }
        }
      }
    }
  }
}
</style>
