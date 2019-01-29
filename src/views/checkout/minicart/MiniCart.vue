<template>
	<el-dropdown class="menuItem miniCart">
        <a href="#" class="menuLink">
        	<em class="menuIcon icon_cart">
        		<dfn class="mNum" v-if="totalItem > 0" v-text="totalItem"></dfn>
        	</em>
        </a>

		<el-dropdown-menu class="el-dropdown-menu el-popper miniDrop" slot="dropdown">	
        	<div v-if="totalItem > 0">
	            <div class="miniTitle">Shopping Cart</div>
	            <div class="scrollScope" id="miniScroll">
	                <!--@Minicart-->
	                <el-collapse class="miniList" v-model="activeNames">
	                    <div 
	                    class="miniPro" 
	                    v-for="(item, index) of miniData" 
	                    :key="item.id"
	                    >
	                        <div class="doTd miniPic">
	                            <a href="#">
	                                <img 
	                                :src="'static/catalog/product/'+item.productThumb" 
	                                :alt="item.productName"/>
	                            </a>
	                        </div>
	                        <div class="doTd miniInfo">
	                            <div class="name_s">
	                            	<a 
	                            	href="#" 
	                            	v-text="item.productName"
	                            	></a>
	                            </div>

	                            <el-collapse-item title="See Details" class="miniOp" v-if="item.hasOwnProperty('customOption')" :name="index">
	                                    <div 
	                                    class="miniOpt" 
	                                    v-for="(opt, key, inx) of item.customOption" 
	                                    :key="item.id+inx">
	                                    	<b v-text="key"></b> / {{opt}}
	                                    </div>
	                            </el-collapse-item>

	                            <div class="miniPrice">
	                                <span class="price" v-if="item.specialPrice != '0'">
	                                	<b v-text="item.specialPrice"></b>
	                                	<del v-text="item.price"></del>
	                                </span>
	                                <span class="price" v-else>
	                                	<b v-text="item.price"></b>
	                                </span>
	                            </div>
	                            <div class="miniQty">
	                                <label>Qty:</label>
	                                {{item.qty}}
	                                <span class="actBar">
	                                    <a href="javascript:;" title="Remove Item" class="undline">Remove</a>
	                                </span>
	                            </div>
	                        </div>
	                    </div>

	                </el-collapse>
	                <!--\\Minicart-->
	            </div>
	            
	            <div class="miniTotal">
	                <div class="clear">
	                    <span class="miniSub">Total:<b v-text="subTotal"></b></span>
	                    <span class="miniCount"><b v-text="totalItem"></b>items</span>
	                </div>
	                
	            </div>

	            <div class="miniAction">
	                <div class="actions"><a href="#" class="oran">View cart</a> <em class="icon14 icon_right"></em></div>
	                <div class="actions">
	                    <a href="#" class="button re" rel="nofollow" title="Go to Checkout">Go to Checkout</a>
	                </div>
	            </div>
            </div>
			
			<div v-else class="pd20 gray">You have no item in your shopping cart.</div>

        </el-dropdown-menu>
    </el-dropdown>
</template>

<script>
import axios from 'axios'
export default {
  name: 'MiniCart',
  data () {
  	return {
  		totalItem: 0,
  		subTotal: '0',
  		miniData: {},
  		//  Accordding
  		activeNames: []
  	}
  },
  mounted () {
  	this.getMiniCartData()
  },
  methods: {
  	getMiniCartData () {
  		axios.get('/api/minicart.json')
				.then(this.getDataOk)
  	},
	getDataOk (res) {
		const data = res.data
		if (data.ret && data.data) {
			this.miniData = data.data.miniData
			this.totalItem = data.data.totalItem
			this.subTotal = data.data.subTotal
		}
	}
  }
}
</script>

<style scoped>
.miniDrop{
	width:344px;top:40px;right:0;padding:1em;
}
</style>
