<template>
  <div class="r-message-components">
    <!--图标区域-->
    <div class="icon-area warn">
      <!--成功图标 icon-zhengque-->
      <!--错误图标 icon-cuowu1-->
      <!--警告图标 icon-cuowu-->
      <i class="iconfont icon-zhengque"></i>
    </div>
    <!--文字区域-->
    <div class="message-text">
      <span>文字区域</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'rmessage'
}
</script>

<style scoped lang="scss">
.r-message-components{
  position: absolute;
  display: flex;
  align-items: center;
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff;
  margin-top: 10px;
  padding: 10px;
  box-sizing: border-box;
  border-radius: $borderRadius;
  box-shadow: 1px 3px 10px rgb(0 0 0 / 10%);
  .message-text{
    margin-left: 5px;
    span{
      font-size: 13px;
    }
  }
  .success{
    color: $txColor;
  }
  .error{
    color: $errorColor;
  }
  .warn{
    color: $warnColor;
  }
}
</style>
