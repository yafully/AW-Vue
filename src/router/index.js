import Vue from 'vue'
import Router from 'vue-router'
import ProductList from '@/views/ProductList'
import Cart from '@/views/Cart'

Vue.use(Router)

export default new Router({
  mode: 'history',	//  指定以传统方式访问‘hash’可选	
  routes: [
    {
      path: '/category',
      name: 'ProductList',
      components: {
      	default: ProductList
      }
    },
  	{
  		path: '/cart',
  		name: 'cart',
  		component: Cart
  	}
  ]
})
