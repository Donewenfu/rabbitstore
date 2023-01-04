<template>
  <div class="r-comment-component">
    <!--头像-->
    <div class="left-avatar">
      <img src="http://zhoushugang.gitee.io/erabbit-client-pc-static/uploads/avatar_1.png" alt="">
      <span>用户名</span>
    </div>
    <!--右侧用户评价信息-->
    <div class="right-comment">
      <!--顶部评分区域-->
      <div class="right-comment-top"></div>
      <!--用户评价-->
      <div class="right-comment-content"></div>
      <!--用户评价图片-->
      <div class="right-comment-list-img"></div>
      <!--评价时间-->
      <div class="right-comment-date">
        <!--时间-->
        <div class="date-text"></div>
        <!--点赞数量-->
        <div class="like-num"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "rcomment"
}
</script>

<style scoped lang="scss">
.r-comment-component{
  display: flex;
  justify-content: space-between;
  .left-avatar{
    display: flex;
    align-items: center;
    img{
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
    span{
      font-size: 13px;
      margin-left: 10px;
    }
  }
  .right-comment{
    flex: 1;
  }
}
</style>
