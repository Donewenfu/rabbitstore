<template>
  <div class="r-navlink-components clearfix">
    <div class="logo-area fl">
      <rlogo :logo-width="comType==='header'?120:120"  :logo-style="comType"></rlogo>
    </div>
    <div class="fl">
      <ul class="clearfix">
        <li v-for="(item,index) in navList" :key="index" @mouseenter="showPopup(index)">
          <router-link :to="'/category/'+item.id" tag="a" :class="{'routeractive':userActive===item.name}" @click="changeRoute(item)">{{ item.name }}</router-link>
        </li>
      </ul>
    </div>
    <!--搜索框-->
    <div class="search-area fl">
      <i class="iconfont icon-fangdajing"></i>
      <input type="text" placeholder="搜一搜" v-model.trim="searchKey" class="searchinput">
      <i class="iconfont icon-guanbi" @click="delinputText" v-if="showDelicon"></i>
    </div>
    <!--购物车-->
    <div class="cart-area fr">
      <i class="iconfont icon-gouwuche" @click="goCart"></i>
      <span class="cartnum" v-if="userInfo.token">{{ $store.getters['cart/getCartCount'] }}</span>
    </div>
    <!--移入显示盒子 -->
    <transition name="nav" tag="div">
      <div class="product-popup"  v-show="isShowPopup"  :style="bottomStyle" @mouseleave="hidePopup">
        <transition-group tag="ul" @enter="enter">
          <li v-for="(item,index) in cateChildrenData" :key="item.picture" :data-index="index" class="product-item" @click="goSubcategory(item)">
            <img :src="item.picture" alt="">
            <span>{{ item.name }}</span>
          </li>
        </transition-group>
      </div>
    </transition>
  </div>
</template>

<script>
// logo
import rlogo from '@/components/r-logo'
// 动画库
import Velocity from 'velocity-animate'
// vue
import { computed, inject, ref, watch } from 'vue'
// vuerouter
import { useRoute, useRouter } from 'vue-router'
// vuex
import { useStore } from 'vuex'
// 消息提示
import Message from '@/utils/messageUI'
export default {
  name: 'navlink',
  props: {
    comType: {
      type: String,
      default: 'header'
    },
    // 用户当前选中
    userActive: {
      type: String,
      default: ''
    }
  },
  setup (props) {
    // 接收祖先组件提供的数据
    const navList = inject('navList')
    // 是否显示移入弹窗
    const isShowPopup = ref(false)
    // 移入的children 数据
    const cateChildrenData = ref([])
    // 搜索输入字段
    const searchKey = ref('')
    // 当前路由
    const route = useRoute()
    // 路由对象
    const router = useRouter()
    // store
    const store = useStore()
    // 根据组件类型进行样式的编写
    const bottomStyle = computed(() => {
      return {
        bottom: props.comType === 'header' ? '-111px' : '-124px'
      }
    })
    // 是否显示输入框删除图标
    const showDelicon = computed(() => {
      return searchKey.value.length > 0
    })
    // 当鼠标移入文字时显示商品弹窗
    const showPopup = (index) => {
      cateChildrenData.value = navList.value[index].children ? navList.value[index].children : []
      isShowPopup.value = true
    }
    // 当鼠标移出文字隐藏弹窗
    const hidePopup = () => {
      isShowPopup.value = false
      cateChildrenData.value = []
    }
    // 进入标签事件
    const enter = (el) => {
      // 逐渐显示的时间
      const showTime = (el.dataset.index) * 120
      setTimeout(() => {
        Velocity(el, {
          opacity: 1,
          translateX: '-100px'
        })
      }, showTime)
    }
    // 删除输入的文字信息
    const delinputText = () => {
      searchKey.value = ''
    }
    watch(() => route.params.id, () => {
      isShowPopup.value = false
    })
    // 点击二级商品 跳转页面
    const goSubcategory = (item) => {
      let activeMenuName = ''
      store.state.category.cateList.forEach((cate, index) => {
        for (let i = 0; i < cate.children.length; i++) {
          if (cate.children[i].id === item.id) {
            activeMenuName = cate.name
          }
        }
      })
      router.push({
        path: `/category/sub/${item.id}`
      })
      // 更新vuex中的当前菜单名字
      store.commit('user/setUserActive', activeMenuName)
    }
    // 点击跳转路由
    const changeRoute = (data) => {
      const { name } = data
      store.commit('user/setUserActive', name)
    }
    // 获取用户信息
    const userInfo = computed(() => {
      return store.state.user.profile
    })
    // 用户点击购物车
    const goCart = () => {
      // 判断用户是否登录
      if (store.state.user.profile.token) {
        router.push('/cart')
      } else {
        Message({
          type: 'warn',
          text: '小主你还没有登录奥～',
          offsetTop: 170,
          duration: 2000
        })
        setTimeout(() => {
          router.push(`/login?redirectUrl=${encodeURIComponent(route.path)}`)
        }, 2000)
      }
    }
    return { navList, goCart, bottomStyle, showPopup, hidePopup, isShowPopup, cateChildrenData, enter, delinputText, searchKey, showDelicon, goSubcategory, changeRoute, userInfo }
  },
  components: {
    rlogo
  }
}
</script>

<style scoped lang="scss">
.routeractive{
  color: $txColor;
  font-weight: bold;
  transition: all .3s;
  position: relative;
  &:after{
    content: '';
    display: block;
    width: 30px;
    height: 3px;
    background-color: $txColor;
    position: absolute;
    bottom: -4px;
    border-radius: 10px;
  }
}
.r-navlink-components{
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  ul{
    margin-left: 40px;
    height: 100%;
    li{
      float: left;
      height: 100%;
      a{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 76px;
        text-align: center;
        transition: all .3s linear;
        height: 100%;
        &:hover{
          color: $txColor;
        }
      }
      &.active{
        color: $txColor;
      }
    }
  }
  .search-area{
    position: relative;
    margin-left: 18px;
    input{
      width: 200px;
      padding: 10px 35px 10px 28px;
      border-bottom: 1px solid #E7E7E7;
    }
    i{
      font-size: 15px;
      color: #333;
      position: absolute;
      top: 6px;
    }
    .icon-guanbi{
      position: absolute;
      right: 0;
      color: #e3e3e3;
      cursor: pointer;
      font-size: 14px;
      top: 7px;
    }
  }
  .cart-area{
    cursor: pointer;
    position: relative;
    margin-left: 120px;
    i{
      font-size: 24px;
      color: #000;
    }
    .cartnum{
      position: absolute;
      top: -3px;
      left: 15px;
      background-color: #E26237;
      padding: 1px 4px;
      border-radius: 15px;
      color: #fff;
      font-size: 10px;
    }
  }
  .product-popup{
    border-radius: $borderRadius;
    width: 1240px;
    height: 100px;
    background-color: #fff;
    box-shadow: 0 1px 5px 0 rgb(0 0 0 / 10%);
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 9999;
    transition: all .3s linear;
    &.show{
      opacity: 1;
    }
    &.hide{
      opacity: 0;
    }
    ul{
      margin-left: 260px;
      display: flex;
      align-items: center;
      li{
        opacity: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-right: 20px;
        cursor: pointer;
        padding: 5px;
        box-sizing: border-box;
        img{
          width: 70px;
          height: 70px;
          display: block;
          transition: all .3s;
          &:hover{
            transform: translateY(-5px);
          }
        }
        span{
          font-size: 13px;
        }
        &:hover{
          span{
            color: $txColor;
          }
        }
      }
    }
  }
  .nav-enter-active,
  .nav-leave-active {
    transition: opacity 0.3s ease;
  }
  .nav-enter-from,
  .nav-leave-to {
    opacity: 0;
  }
}

</style>
