<template>
  <div>
    <div class="goods">
       <div class="menu-wrapper">
        <ul ref="leftUl">
          <li class="menu-item" v-for="(good,index) in goods" :key="index"
              :class="{current:currentIndex === index}" @click="clickItem(index)">
            <span class="text bottom-border-1px">
              <img class="icon" :src="good.icon" v-if="good.icon">
              {{good.name}}
            </span>
          </li>
        </ul>
      </div>

      <div class="foods-wrapper">
        <!--//ref原生dom里标识某一个标签-->
        <ul ref="goodUl">
          <li class="food-list-hook" v-for="(good,index) in goods" :key="index" @click="showFood(food)">
            <h1 class="title">{{good.name}}</h1>
            <ul>
              <li class="food-item bottom-border-1px" v-for="(food,index) in good.foods" :key="index">
                <div class="icon">
                  <img width="57" height="57" :src="food.icon">
                </div>
                <div class="content">
                  <h2 class="name">{{food.name}}</h2>
                  <p class="desc">{{food.description}}</p>
                  <div class="extra">
                    <span class="count">月售{{food.sellCount}}份</span>
                    <span>好评率{{food.rating}}%</span></div>
                  <div class="price">
                    <span class="now">￥{{food.price}}</span>
                    <span class="old" v-if="food.oldPrice">￥{{food.oldPrice}}</span>
                  </div>
                  <div class="cartcontrol-wrapper">
                    <CartControl :food="food"/>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <!--标签对象就是组件对象-->
    <Food ref="food" :food="food"/>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  import Food from '../../../components/Food/Food'
  export default {
    data(){
      return{
        //定义右侧列表滑动得Y坐标
        scrollY:0,
        //右侧所有分类li得tops值
        tops:[3,5,7],
        food:{}   //需要显示得food
      }
    },
     mounted(){
       this.$store.dispatch('getGoods',() =>{
        this.$nextTick(() =>{
          this._initScroll()
          //列表显示初始化状态
         this._initTops()
        })
       })
     },
    computed:{
      ...mapState({
        goods:state => state.shop.goods
      }),
      //获取currentIndex当前分类得下标
      currentIndex(){
        const {scrollY,tops} = this
        //创建新的index
        const index = tops.findIndex((top,index) =>{
          //取余scrollY在[top, nextTop)区间范围内
          return scrollY >= top && scrollY<tops[index+1]
        })
        //在保存之前判断index是否相等如果不相等就产生了新的index
        if (index!=this.index && this.leftScroll) {
          //保存新的index
          this.index = index
          //当current发生改变时将左侧列表进行编码滑动（首先先得到左侧编码）
          const li = this.$refs.leftUl.children[index]
          this.leftScroll.scrollToElement(li,300)
        }
        return index
      }
    },
    methods:{
       _initScroll(){
         //左侧编码
         this.leftScroll = new BScroll('.menu-wrapper',{
          click:true
         })
         //右侧编码
         this.rightScroll = new BScroll('.foods-wrapper',{
           click:true,
           probeType:3
         })
           //监视右侧列表得滑动
         this.rightScroll.on('scroll',({x,y}) =>{
           this.scrollY = Math.abs(y)
         })
         //滑动结束scrollEnd
         this.rightScroll.on('scrollEnd',({x,y}) =>{
           this.scrollY = Math.abs(y)
         })

       },
      //获取右侧所有li得top值
       _initTops(){
         const tops = []
         let top = 0
         tops.push(top)
         const lis = this.$refs.goodUl.children    //children获取当前元素得子标签
         Array.prototype.slice.call(lis).forEach(li =>{
           top += li.clientHeight
           tops.push(top)
         })
         //更新状态
         this.tops = tops
       },
      //先绑定监听点击z左侧某个分别项
      clickItem(index){
         //得到目标位置得坐标
         const y = -this.tops[index]
        //立即更新
        this.scrollY = -y
         //让右侧列表滑动到相应得位置
        this.rightScroll .scrollTo(0,y,300)
      },
      //显示指定得food
      showFood(food){
         //更新food状态
         this.food = food
        //显示food组件
        this.$refs.food.toggleShow()
      }
    },
    components:{
      Food
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/minxin.styl"
  .goods
    display: flex
    position: absolute
    top: 225px
    bottom: 46px
    width: 100%
    background: #fff;
    overflow: hidden
    .menu-wrapper
      flex: 0 0 80px
      width: 80px
      background: #f3f5f7
      .menu-item
        display: table
        height: 54px
        width: 56px
        padding: 0 12px
        line-height: 14px
        &.current
          position: relative
          z-index: 10
          margin-top: -1px
          background: #fff
          color: $green
          font-weight: 700
          .text
            border-none()
        .icon
          display: inline-block
          vertical-align: top
          width: 12px
          height: 12px
          margin-right: 2px
          background-size: 12px 12px
          background-repeat: no-repeat
        .text
          display: table-cell
          width: 56px
          vertical-align: middle
          bottom-border-1px(rgba(7, 17, 27, 0.1))
          font-size: 12px
    .foods-wrapper
      flex: 1
      .title
        padding-left: 14px
        height: 26px
        line-height: 26px
        border-left: 2px solid #d9dde1
        font-size: 12px
        color: rgb(147, 153, 159)
        background: #f3f5f7
      .food-item
        display: flex
        margin: 18px
        padding-bottom: 18px
        bottom-border-1px(rgba(7, 17, 27, 0.1))
        &:last-child
          border-none()
          margin-bottom: 0
        .icon
          flex: 0 0 57px
          margin-right: 10px
        .content
          flex: 1
          .name
            margin: 2px 0 8px 0
            height: 14px
            line-height: 14px
            font-size: 14px
            color: rgb(7, 17, 27)
          .desc, .extra
            line-height: 10px
            font-size: 10px
            color: rgb(147, 153, 159)
          .desc
            line-height: 12px
            margin-bottom: 8px
          .extra
            .count
              margin-right: 12px
          .price
            font-weight: 700
            line-height: 24px
            .now
              margin-right: 8px
              font-size: 14px
              color: rgb(240, 20, 20)
            .old
              text-decoration: line-through
              font-size: 10px
              color: rgb(147, 153, 159)
          .cartcontrol-wrapper
            position: absolute
            right: 0
            bottom: 12px
</style>


