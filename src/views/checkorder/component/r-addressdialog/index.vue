<template>
  <div class="r-addAddressDialog-components">
    <rdialog width="42%" height="auto" v-model:visible="visible" title="添加收货地址👋" @close="closedialog" @confirm="confirm">
      <Form class="address-form" :validation-schema="addformVerify"  autocomplete="off" ref="formCom">
        <ul>
          <li>
            <span>收货人：</span>
            <Field type="text" placeholder="请输入收货人" v-model.trim="formData.receiver" name="receiver"></Field>
          </li>
          <li>
            <span>手机号：</span>
            <Field type="number" placeholder="请输入手机号" v-model.number="formData.contact" name="contact" maxlength="11"></Field>
          </li>
          <li class="areacom">
            <span>地区：</span>
            <rselectcity  @change="selectCity" :fullLocation="fullLocation"></rselectcity>
          </li>
          <li>
            <span>详细地址：</span>
            <Field type="text" placeholder="请输入详细地址" v-model="formData.address" name="address"></Field>
          </li>
          <li>
            <span>邮政编码：</span>
            <Field type="number" placeholder="请输入邮政编码" v-model="formData.postalCode" name="postalCode"></Field>
          </li>
          <li>
            <span>地址标签：</span>
            <Field type="text" placeholder="请输入地址标签" v-model="formData.addressTags" name="addressTags"></Field>
          </li>
        </ul>
      </Form>
    </rdialog>
  </div>
</template>

<script>
// dialog 组件
import rdialog from '@/components/r-dialog/index.vue'
// api 接口
import { addAddressData } from '@/api/order'
// 验证组件
import { Form, Field } from 'vee-validate'
// 表单验证函数
import xmschema from './verify'
// vue
import { reactive, ref } from 'vue'
// 消息提示
import message from '@/utils/messageUI'
export default {
  setup (props, { emit }) {
    // 表单实例
    const formCom = ref(null)
    // 地区选择
    const fullLocation = ref('')
    const closedialog = () => {
      // 清空表单数据
      clearFormData()
      // 自定义事件
      emit('update:visible', false)
    }
    // 表单验证
    const addformVerify = {
      receiver: xmschema.receiver,
      contact: xmschema.contact,
      address: xmschema.address,
      postalCode: xmschema.postalCode
    }
    // 表单数据
    const formData = reactive({
      // 收货人
      receiver: '',
      // 联系方式
      contact: '',
      // 收货人-省份编码
      provinceCode: '',
      // 收货人-城市编码
      cityCode: '',
      // 收货人-地区编码
      countyCode: '',
      // 收货人-详细地址
      address: '',
      // 收货人-邮政编码
      postalCode: '',
      // 收货人-地址标签
      addressTags: '',
      // 收货地址是否默认
      isDefault: 0,
      // 收货人-完整地址
      fullLocation: ''
    })
    // 用户选中地区
    const selectCity = (data) => {
      // 省份编码
      formData.provinceCode = data.provinceCode
      // 城市编码
      formData.cityCode = data.cityCode
      // 地区编码
      formData.countyCode = data.countyCode
      // 地区文字
      fullLocation.value = data.fullLocation
    }
    // 清空表单数据
    const clearFormData = () => {
      formData.receiver = ''
      formData.contact = ''
      formData.provinceCode = ''
      formData.cityCode = ''
      formData.countyCode = ''
      formData.address = ''
      formData.postalCode = ''
      formData.addressTags = ''
      formData.isDefault = 0
      formData.fullLocation = ''
      // 省份编码
      formData.provinceCode = ''
      // 城市编码
      formData.cityCode = ''
      // 地区编码
      formData.countyCode = ''
      // 地区文字
      fullLocation.value = ''
    }
    const confirm = async () => {
      // 登录之前验证表单 校验通过请求登录api接口
      const verify = await formCom.value.validate()
      if (!verify || !formData.provinceCode) {
        message({
          type: 'error',
          text: '信息还没填写完整哦！',
          offsetTop: 170
        })
        return
      }
      // 请求接口
      await addAddressData(formData)
      emit('update:visible', false)
      // 清空表单数据
      clearFormData()
      message({
        type: 'success',
        text: '小主地址添加成功，愉快购物～',
        offsetTop: 170
      })

      emit('addressSuccess')
    }
    return {
      closedialog,
      addformVerify,
      formData,
      selectCity,
      confirm,
      formCom,
      fullLocation
    }
  },
  props: {
    // 是否显示对话框
    visible: {
      type: Boolean,
      default: false
    }
  },
  components: {
    rdialog,
    Form,
    Field
  }
}
</script>

<style scoped lang="scss">
.r-addAddressDialog-components{
  width: 100%;
  .address-form{
    padding: 30px;
    box-sizing: border-box;
    ul{
      width: 100%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      li{
        width: 100%;
        display: flex;
        align-items: center;
        margin: 20px 0;
        span{
          font-size: 16px;
          display: inline-block;
          width: 100px;
          text-align: right;
        }
        input{
          width: 100%;
          height: 40px;
          padding: 10px;
          box-sizing: border-box;
          border: 1px solid #e6e6e6;
          border-radius: 3px;
        }
        :deep{
            .r-selectcity-components{
              width: 100% !important;
            }
            .selectcity-box{
              margin-left: 0;
              border-radius: 0;
              height: 40px;
              justify-content: space-between;
              p{
                color: #d2d2d2 !important;
              }
              .full{
                color: #333 !important;
              }
            }
            .city-data-box{
                top: 50px;
                left: 0;
                width: 100%;
            }
          }
      }
    }
  }
}
</style>
