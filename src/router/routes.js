
import Msite from '../pages/Msite/Msite'
import Search from '../pages/Secrch/Secrch'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile'
import Login from '../pages/Login/Login'
import Shop from '../pages/Shop/Shop'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo'
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings'

export default[
    {
      path:'/msite',
      component:Msite,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/search',
      component:Search,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/order',
      component:Order,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/profile',
      component:Profile,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/login',
      component: Login
    },
    {
      path:'/shop',
      component: Shop,
      children:[
        {
          path:'/shop/goods',
          component:ShopGoods,
        },
        {
          path:'/shop/info',
          component:ShopInfo,
        },
        {
          path:'/shop/ratings',
          component:ShopRatings,
        },
      ]
    },
    {
      //重定向
      path:'/',
      redirect:'msite'
    }
  ]


