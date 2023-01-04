<template>
  <div class="r-comment-component">
    <!--头像-->
    <div class="left-avatar">
      <img src="http://zhoushugang.gitee.io/erabbit-client-pc-static/uploads/avatar_1.png" alt="">
      <span>张**问</span>
    </div>
    <!--右侧用户评价信息-->
    <div class="right-comment">
      <!--顶部评分区域-->
      <div class="right-comment-top">
        <rstart :score="3"></rstart>
        <div class="comment-title">颜色：白色 尺寸：10cm 产地：美国</div>
      </div>
      <!--用户评价-->
      <div class="right-comment-content">
        <p>昨天下单，今天中午开锅就试着烧了五花肉，耗时30分钟，一切都刚刚好，比以前的锅烧出来口感汤汁都好多了，目价格实惠!建议购买!</p>
      </div>
      <!--用户评价图片-->
      <div class="right-comment-list-img">
        <ul>
          <li>
            <img src="https://yanxuan.nosdn.127.net/0f19c7edf5b78f4e94503bf74bc425e7.jpg?type=webp&imageView&quality=95&thumbnail=603x438" alt="">
          </li>
        </ul>
      </div>
      <!--评价时间-->
      <div class="right-comment-date">
        <!--时间-->
        <div class="date-text">2019-06-09 13:20:32</div>
        <!--点赞数量-->
        <div class="like-num">
          <i class="iconfont icon-dianzan"></i>
          <span>35</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import rstart from '@/components/r-start'
export default {
  name: "rcomment",
  components: {
    rstart
  }
}
</script>

<style scoped lang="scss">
.r-comment-component{
  display: flex;
  justify-content: space-between;
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
        li{
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
    .right-comment-date{
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}
</style>
