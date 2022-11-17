<template>
  <div class="r-newspec-components">
    <div class="newspec-top">
      <img v-lazy="newspecData.cover" alt="" class="specimg">
      <div class="mask">
        <div class="mask-left">
          <p class="ellipsis" :title="newspecData.title">{{ newspecData.title }}</p>
          <p class="ellipsis" :title="newspecData.summary">{{ newspecData.summary }}</p>
        </div>
        <div class="mask-price">
          <div class="inner-price">
            <rprice :price="newspecData.lowestPrice" autofix></rprice>
            <span>起</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  props: {
    newspecData: {
      type: Object,
      default: () => {
        return {}
      }
    }
  }
}
</script>

<style scoped lang="scss">
.r-newspec-components{
  width: 400px !important;
  background-color: #fff;
  cursor: pointer;
  position: relative;
  transition: all .3s;
  height: 287px;
  &:hover{
    //transform: translateY(-10px);
  }
  .newspec-top{
    width: 100%;
    height: 100%;
    position: relative;
    .specimg{
      width: 100%;
      object-fit: cover;
      height: 287px;
    }
    .mask{
      width: 100%;
      height: 287px;
      position: absolute;
      left: 0;
      bottom: 0;
      background-image: linear-gradient(0deg,rgba(0,0,0,.8),transparent 50%);
      display: flex;
      justify-content: space-between;
      align-items: center;
      .mask-left{
        width:250px;
        height: 70px;
        position: absolute;
        bottom: 0;
        margin-left: 20px;
        display: flex;
        flex-direction: column;
        p{
          &:first-child{
            font-size: 18px;
            color: #fff;
          }
          &:last-child{
            font-size: 14px;
            color: #999999;
          }
        }
      }
      .mask-price{
        height: 70px;
        position: absolute;
        bottom: 0;
        right: 0;
        margin-right: 15px;
        display: flex;
        align-items: center;
        border-radius: 3px;
        justify-content: flex-end;
        padding: 0 5px;
        .inner-price{
          display: flex;
          align-items: center;
          justify-content: center;
          height: 27px;
          background-color: #fff;
          border-radius: 3px;
          padding: 0 5px;
        }
        span{
          margin-left: 5px;
          color: $priceColor;
        }
      }
    }
  }
}
</style>
