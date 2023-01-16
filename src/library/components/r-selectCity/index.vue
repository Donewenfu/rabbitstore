<template>
  <div class="r-selectcity-components" ref="target">
    <div class="selectcity-box" :class="showCitybox?'on':''" @click="toggle">
      <p v-if="!fullLocation" class="empty">{{placeholder}}</p>
      <p v-else class="full">{{ fullLocation }}</p>
      <i class="iconfont icon-next-icon-copy"></i>
    </div>
    <!--城市数据盒子-->
    <div class="city-data-box" v-if="showCitybox">
      <ul>
        <li v-for="(item,index) in cityDatacomputed" :key="index" @click="selectCity(item)">
          <span>{{ item.name }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// axios
import axios from 'axios'
// vue
import { computed, reactive, ref } from 'vue'
// 判断是否点击的外面
import { onClickOutside } from '@vueuse/core'

export default {
  name: 'rselectcity',
  setup (props, { emit }) {
    // 盒子
    const target = ref(null)
    // 定义城市数据数组形式
    const cityData = ref([])
    // 是否显示地区盒子
    const showCitybox = ref(false)
    // 用户选中的数据
    const userChangeData = reactive({
      // 省的数据
      provinceCode: '',
      provinceName: '',
      // 市的数据
      cityCode: '',
      cityName: '',
      // 区的数据
      countyCode: '',
      countyName: '',
      // 组合的名字 省名称 城市名称 区域名称
      fullLocation: ''
    })
    // 获取城市数据
    const getCityData = () => {
      return new Promise((resolve, reject) => {
        // 判断缓存中是否有数据 如果有取本地缓存数据 如果没有就取json数据
        if (window.cityData) {
          resolve(window.cityData)
        } else {
          axios.get('https://yjy-oss-files.oss-cn-zhangjiakou.aliyuncs.com/tuxian/area.json').then((res) => {
            // 缓存中存储数据
            window.cityData = res.data
            // 成功的回调
            resolve(res.data)
          })
        }
      })
    }

    // 获取地区数据
    getCityData().then((res) => {
      cityData.value.push(...res)
    })
    // 显示切换地区盒子
    const toggle = () => {
      showCitybox.value ? hiddenBox() : openBox()
    }
    // 打开盒子
    const openBox = () => {
      showCitybox.value = true
      // 每次打开的时候清空数据
      for (const key in userChangeData) {
        userChangeData[key] = ''
      }
    }
    // 隐藏盒子
    const hiddenBox = () => {
      showCitybox.value = false
    }
    // 判断你是否点击的是外面
    onClickOutside(target, (event) => {
      // 点到外面会走这个回调
      hiddenBox()
    })
    // 地区数据计算属性
    const cityDatacomputed = computed(() => {
      // 默认返回省的数据
      let list = cityData.value

      // 判断省的code是否有值 如果有值 那么就要市的数据
      if (userChangeData.provinceCode) {
        list = list.find(item => item.code === userChangeData.provinceCode).areaList
      }
      //  判断用户是否选中了市如果选中了市 那么就返回区数据
      if (userChangeData.cityCode) {
        list = list.find(item => item.code === userChangeData.cityCode).areaList
      }
      return list
    })
    // 用户选择地址
    const selectCity = (item) => {
      // 判断是否选中了省
      if (item.level === 0) {
        userChangeData.provinceCode = item.code
        userChangeData.provinceName = item.name
      }
      // 判断是否选中了市区
      if (item.level === 1) {
        userChangeData.cityCode = item.code
        userChangeData.cityName = item.name
      }
      // 判断是否选中了地区
      if (item.level === 2) {
        userChangeData.countyCode = item.code
        userChangeData.countyName = item.name
        // 合并的地址
        userChangeData.fullLocation = `${userChangeData.provinceName} ${userChangeData.cityName} ${userChangeData.countyName}`
        // 选中完毕关闭弹窗
        hiddenBox()
        // 发射自定义事件
        emit('change', userChangeData)
      }
    }
    return {
      cityData,
      showCitybox,
      toggle,
      target,
      cityDatacomputed,
      selectCity,
      userChangeData
    }
  },
  props: {
    // 显示框显示的地区信息
    fullLocation: {
      type: String,
      default: ''
    },
    // 地址选择提示
    placeholder: {
      type: String,
      default: '请选择配送地址'
    }
  }
}
</script>

<style scoped lang="scss">
.r-selectcity-components{
  position: relative;
  .selectcity-box{
    cursor: pointer;
    border: 1px solid #e5e5e5;
    display: flex;
    align-items: center;
    padding: 5px;
    margin-left: 10px;
    border-radius: 5px;
    .iconfont{
      margin-left: 5px;
    }
    &.on{
      background-color: #fff;
    }
  }
  .city-data-box{
    position: absolute;
    left: 10px;
    top: 38px;
    width: 542px;
    background-color: #fff;
    border: 1px solid #e5e5e5;
    border-radius: 5px;
    padding: 20px;
    box-sizing: border-box;
    ul{
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      li{
        display: flex;
        justify-content: center;
        width: 25%;
        height: 30px;
        line-height: 30px;
        cursor:pointer;
        &:hover{
          background-color: #f5f5f5;
          border-radius: 3px;
        }
      }
    }
  }
}
</style>
