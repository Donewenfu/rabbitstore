<template>
  <div class="r-goodsintroduce-components">
    <ul>
      <li>
        <h2>销量人气</h2>
        <p>200+</p>
        <div class="bottom-desc">
          <i class="iconfont icon-xiaoliang"></i>
          <span>销量人气</span>
        </div>
      </li>
      <li>
        <h2>销量人气</h2>
        <p>200+</p>
        <div class="bottom-desc">
          <i class="iconfont icon-xiaoliang"></i>
          <span>销量人气</span>
        </div>
      </li>
      <li>
        <h2>销量人气</h2>
        <p>200+</p>
        <div class="bottom-desc">
          <i class="iconfont icon-xiaoliang"></i>
          <span>销量人气</span>
        </div>
      </li>
      <li>
        <h2>销量人气</h2>
        <p>200+</p>
        <div class="bottom-desc">
          <i class="iconfont icon-xiaoliang"></i>
          <span>销量人气</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'rgoodsintroduce'
}
</script>

<style scoped lang="scss">
.r-goodsintroduce-components{
  ul{
    width: 390px;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    li{
      margin-top: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      h2,p,span{
        padding: 0;
        margin: 0;
        font-size: 13px;
      }
      p{
        margin: 6px 0;
        color: #cc706c;
      }
      .bottom-desc{
        i{
          margin-right: 8px;
          color: $txColor;
        }
      }
    }
  }
}
</style>
