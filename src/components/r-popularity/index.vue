<template>
  <div class="r-popularity-components">
    <div class="r-popularity-top">
      <div class="r-popularity-title">
        <h3>{{ title }}</h3>
        <span>{{ desc }}</span>
      </div>
      <div class="r-popularity-more">
        <span>查看更多</span>
        <i class="iconfont icon-jiantou"></i>
      </div>
    </div>
    <!--品牌列表数据-->
    <div class="r-poplarity-list">
      <div class="poplarity-item" v-for="(item,index) in brandData" :key="index">
        <img :src="item.picture" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'rpopularity',
  props: {
    // 标题
    title: {
      type: String,
      default: '请填写标题',
      required: true
    },
    // 描述
    desc: {
      type: String,
      default: '请填写描述',
      required: true
    },
    // 品牌数据
    brandData: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>

<style scoped lang="scss">
.r-popularity-components{
  width: 100%;
  .r-popularity-top{
    display: flex;
    align-items: center;
    justify-content: space-between;
    .r-popularity-title{
      display: flex;
      align-items: center;
      h3{
        font-size: 20px;
        margin-right: 10px;
      }
      span{
        font-size: 14px;
        color: #999;
      }
    }
    .r-popularity-more{
      display: flex;
      align-items: center;
      span{
        font-size: 14px;
        color: #999;
      }
      .iconfont{
        font-size: 10px;
        color: #999;
        margin-left: 5px;
      }
    }
  }
  .r-poplarity-list{
    width: 100%;
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
    .poplarity-item{
      margin-right: 5px;
      &:last-child{
        margin-right: 0;
      }
      img{
        cursor: pointer;
        width: 244px;
        height: 306px;
      }
    }
  }
}
</style>
