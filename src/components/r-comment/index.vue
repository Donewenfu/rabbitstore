<template>
  <div class="r-comment-component">
    <!--头像-->
    <div class="left-avatar">
      <img :src="commentData.member.avatar" alt="">
      <span>{{ filterNickname(commentData.member.nickname) }}</span>
    </div>
    <!--右侧用户评价信息-->
    <div class="right-comment">
      <!--顶部评分区域-->
      <div class="right-comment-top">
        <rstart :score="commentData.score"></rstart>
        <div class="comment-title">{{filterSpecs(commentData.orderInfo.specs)}}</div>
      </div>
      <!--用户评价-->
      <div class="right-comment-content">
        <p>{{ commentData.content }}</p>
      </div>
      <!--用户评价图片-->
      <div class="right-comment-list-img" v-if="commentData.pictures.length>0">
        <ul>
          <li @click="preview(item)" v-for="(item,index) in commentData.pictures">
            <img :src="item" alt="">
          </li>
        </ul>
      </div>
      <!--评论图片显示-->
      <div class="comment-imgview" v-if="show">
        <div class="closeicon" @click="closeimg">
          <i class="iconfont icon-guanbi"></i>
        </div>
        <img :src="commentPreviewImg" alt="">
      </div>
      <!--评价时间-->
      <div class="right-comment-date">
        <!--时间-->
        <div class="date-text">{{ commentData.createTime }}</div>
        <!--点赞数量-->
        <div class="like-num">
          <i class="iconfont icon-dianzan"></i>
          <span>{{ commentData.praiseCount }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 评分组件
import rstart from '@/components/r-start'
// vue
import { ref } from 'vue'
export default {
  name: "rcomment",
  props: {
    // 评价数据
    commentData: {
      type: Object,
      default: () => {}
    }
  },
  setup () {
    // 是否显示预览方框
    const show = ref(false)
    // 评价图片显示
    const commentPreviewImg = ref('')
    // 点击显示商品
    const preview = (data) => {
      commentPreviewImg.value = data
      show.value = true
    }
    // 关闭图片
    const closeimg = () => {
      show.value = false
    }
    // 处理规格数据
    const filterSpecs = (data) => {
      return data.reduce((p,c) => `${p} ${c.name}:${c.nameValue}`, '')
    }
    // 处理用户名称
    const filterNickname = (name) => {
      if (!name) return
      return `${name.substr(0, 1)}***${name.substr(-1)}`
    }
    return {
      show,
      preview,
      closeimg,
      filterNickname,
      commentPreviewImg,
      filterSpecs
    }
  },
  components: {
    rstart
  }
}
</script>

<style scoped lang="scss">
.r-comment-component{
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #f5f5f5;
  padding-bottom: 20px;
  margin-bottom: 20px;
  .left-avatar{
    display: flex;
    align-items: center;
    margin-right: 60px;
    img{
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
    span{
      font-size: 13px;
      margin-left: 10px;
      color: #999;
    }
  }
  .right-comment{
    flex: 1;
    color: #666666;
    font-size: 13px;
    .right-comment-top{
      display: flex;
      align-items: center;
      .comment-title{
        margin-left: 10px;
      }
    }
    .right-comment-content{
      margin: 15px 0;
    }
    .right-comment-list-img{
      margin-bottom: 15px;
      ul{
        display: flex;
        flex-wrap: wrap;
        li{
          margin-right: 10px;
          cursor: pointer;
          width: 120px;
          height: 120px;
          border: 1px solid #e4e4e4;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
    .comment-imgview{
      width: 300px;
      height: 400px;
      background-color: #fff;
      border: 1px solid #e4e4e4;
      position: relative;
      margin-bottom: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      .closeicon{
        background-color: #fff;
        width: 20px;
        height: 20px;
        right: -5px;
        top: -10px;
        position: absolute;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      i{
        font-size: 20px;
        color: #d5d5d5;
      }
    }
    .right-comment-date{
      display: flex;
      justify-content: space-between;
      align-items: center;
      .like-num{
        cursor:pointer;
        display: flex;
        align-items: center;
        i{
          margin-right: 3px;
        }
      }
    }
  }
}
</style>
