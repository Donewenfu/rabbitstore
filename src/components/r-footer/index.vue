<template>
  <div class="c-footer-components">
    <div class="container ">
      <div class="footer-top clearfix">
        <!--客户服务-->
        <div class="footer-item">
          <div class="title">客户服务</div>
          <div class="content">
            <ul class="clearfix">
              <li>
                <i class="iconfont icon-zaixiankefucustomerservice"></i>
                <p>在线客服</p>
              </li>
              <li>
                <i class="iconfont icon-wenti"></i>
                <p>问题反馈</p>
              </li>
            </ul>
          </div>
        </div>
        <!--关注我们-->
        <div class="footer-item">
          <div class="title">关注我们</div>
          <div class="content">
            <ul class="clearfix">
              <li>
                <i class="iconfont icon-weixin"></i>
                <p>公众号</p>
              </li>
              <li>
                <i class="iconfont icon-weibo"></i>
                <p>微博</p>
              </li>
            </ul>
          </div>
        </div>
        <!--下载app-->
        <div class="footer-item clearfix">
          <div class="title">下载app</div>
          <div class="qrcode fl">
            <img src="../../assets/images/qrcode.jpg" alt="">
          </div>
          <div class="dowinfo fr">
            <p>扫描二维码</p>
            <p>立马下载APP</p>
            <div class="dowbtn">下载APP</div>
          </div>
        </div>
        <!--服务热线-->
        <div class="footer-item">
          <div class="title">服务热线</div>
          <div class="hotline">
            <p class="tel">400-0000-888</p>
            <p class="workingtime">周一至周日 8:00-18:00</p>
          </div>
        </div>
      </div>
      <!--底部信息-->
      <div class="footer-bottom">
        <ul class="clearfix">
          <li>
            <a href="#">关于我们</a>
          </li>
          <li>
            <a href="#">帮助中心</a>
          </li>
          <li>
            <a href="#">售后服务</a>
          </li>
          <li>
            <a href="#">配送与验收</a>
          </li>
          <li>
            <a href="#">商务合作</a>
          </li>
          <li>
            <a href="#">搜索推荐</a>
          </li>
          <li>
            <a href="#">友情链接</a>
          </li>
        </ul>
        <p>copyright @象米商城</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'rfooter'
}
</script>

<style scoped lang="scss">
.c-footer-components{
  width: 100%;
  padding-top: 50px;
  border-top: 1px solid $borderColor;
  background-color: #fafbfc;
  .container{
    .footer-top{
      .footer-item{
        float: left;
        margin-right: 119px;
        .title{
          color: $txColor;
          font-size: 15px;
          text-align: center;
          margin-bottom: 35px;
        }
        .qrcode{
          width: 92px;
          height: 92px;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid $borderColor;
          img{
            display: block;
            width: 80px;
            height: 80px;
          }
        }
        .dowinfo{
          margin-left: 10px;
          color: $txColor;
          p{
            &:first-child{
              margin-top: 8px;
            }
          }
          .dowbtn{
            width: 102px;
            height: 32px;
            background-color: $txColor;
            color: #fff;
            text-align: center;
            line-height: 32px;
            margin-top: 10px;
            cursor: pointer;
            border-radius: 5px;
            font-size: 12px;
            &:hover{
              animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
              transform: translate3d(0, 0, 0);
            }
          }
        }
        .hotline{
          text-align: center;
          .tel{
            color: #666666;
            font-size: 22px;
          }
          .workingtime{
            color: #999999;
            font-size: 15px;
          }
        }
        .content{
          ul{
            li{
              cursor: pointer;
              float: left;
              width: 92px;
              height: 92px;
              border: 1px solid $borderColor;
              text-align: center;
              display: flex;
              justify-content: center;
              flex-direction: column;
              align-items: center;
              transition: all .3s;
              .iconfont{
                font-size: 32px;
                color: $txColor;
                display: block;
                transition: all .3s;
              }
              p{
                display: block;
              }
              &:nth-child(2){
                margin-left: 10px;
              }
              &:hover{
                color: $txColor;
                border-color: $txColor;
                .iconfont{
                  transform: scale(1.2);
                }
              }
            }
          }
        }
        &:first-child{
          margin-left: 56px;
        }
        &:nth-child(3){
          margin-right: 35px !important;
        }
        &:last-child{
          height: 148px;
          border-left: 1px solid $borderColor;
          padding-left: 40px;
          padding-right: 0;
        }
      }
    }
    .footer-bottom{
      margin-top: 50px;
      border-top: 1px solid $borderColor;
      width: 100%;
      display: flex;
      padding-bottom: 10px;
      //flex-direction: column;
      align-items: center;
      justify-content: center;
      ul{
        display: flex;
        justify-content: center;
        margin-top: 10px;
        li{
          text-align: center;

          margin: 0 15px;
          a{
            color: #777;
            font-size: 12px;
            transition: all .3s;
            &:hover{
              color: $txColor;
            }
          }
        }
      }
      p{
        font-size: 12px;
        color: #777;
        margin-top: 10px;
        cursor: pointer;
        transition: all .3s;
        &:hover{
          color: $txColor;
        }
      }

    }
  }
}
</style>
