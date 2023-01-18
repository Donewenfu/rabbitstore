<template>
  <div class="order-page">
    <!--顶部切换区域-->
    <rtab @change="changeTab"></rtab>
    <!--订单内容区域-->
    <div class="order-content">
      <div class="list" v-if="listOrderdata.items && listOrderdata.items.length>0">
        <div v-if="listOrderdata.items.length>0">
          <template v-for="(item, index) in listOrderdata.items" :key="index">
            <orderitem :orderData="item" @refreshOrder="refreshOrder"></orderitem>
          </template>
        </div>
        <div v-else>
          <rloadinglogo  loadingtext="暂无数据..."></rloadinglogo>
        </div>
        <!--分页组件-->
        <div class="order-pagination">
          <rpagination
            @currentpage="currentpage"
            :total="listOrderdata.counts"
            :currentPage="listOrderdata.page"
            :pageSize="listOrderdata.pageSize"
          ></rpagination>
        </div>
      </div>
      <!--loading加载-->
      <div class="loading" v-else>
        <rloadinglogo  loadingtext="小主加载中..." v-if="!firstLoad"></rloadinglogo>
        <span v-else>暂无数据</span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue'
// tab组件
import rtab from './component/r-tab'
// 订单组件
import orderitem from './component/r-orderitem'
// api
import { getOrderList } from '@/api/order'
// vue
import { onMounted } from 'vue'
export default {
  name: 'order',
  setup () {
    // 当前订单类型
    const currentOrderIndex = ref(0)
    // 当前页码
    const currentPage = ref(1)
    // 订单列表数据
    const listOrderdata = ref({})
    // 首次是否加载完毕
    const firstLoad = ref(false)
    // 用户点击tab
    const changeTab = (index) => {
      firstLoad.value = false
      // tab当前项
      currentOrderIndex.value = index
      // 数据置空
      listOrderdata.value.items = []
      // 页码改成第一页
      currentPage.value = 1
      // 请求数据
      getOrderListData()
    }
    // 获取订单列表数据
    const getOrderListData = async () => {
      const params = {
        // 页码
        page: currentPage.value,
        // 页尺寸
        pageSize: 10,
        // 订单状态
        orderState: currentOrderIndex.value
      }
      const { result } = await getOrderList(params)
      // 加载完毕
      firstLoad.value = true
      listOrderdata.value = result
    }
    onMounted(() => {
      // 初始化获取订单列表数据
      getOrderListData()
    })
    // 页面组件翻页事件
    const currentpage = (data) => {
      firstLoad.value = false
      currentPage.value = data
    }
    watch(() => currentPage.value, () => {
      // 置空数据
      listOrderdata.value.items = []
      // 页面回到顶部
      document.documentElement.scrollTop = 0
      // 当页码发生变化请求分页接口
      getOrderListData()
    })
    // 订单倒计时结束 刷新列表
    const refreshOrder = () => {
      getOrderListData()
    }
    return {
      changeTab,
      listOrderdata,
      currentpage,
      refreshOrder,
      firstLoad
    }
  },
  components: {
    rtab,
    orderitem
  }
}
</script>

<style scoped lang="scss">
.order-page{
  width: 100%;
  background-color: #fff;
  border-radius: $borderRadius;
  overflow: hidden;
  .order-content{
    padding: 18px;
    box-sizing: border-box;
    .order-pagination{
      width: 100%;
      height: 80px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .loading{
      height: 600px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      span{
        color: #999;
      }
    }
  }
}
</style>
