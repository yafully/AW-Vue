<template>
	<div class="menuItem dropSec miniCart" data-notop="1">
        <a href="#" class="menuLink"><em class="menuIcon icon_cart"><dfn class="mNum">2</dfn></em></a>
        <div class="headDrop dropBox" style="display:block">

        	<div v-if="totalItem > 0">
	            <div class="miniTitle">Shopping Cart</div>
	            <div class="scrollScope" id="miniScroll">
	                <!--@Minicart-->
	                <div class="miniList">
	                    <div 
	                    class="miniPro" 
	                    v-for="item of miniData" 
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
	                            <div class="miniOp" v-if="item.hasOwnProperty('customOption')">
	                                <a href="javascript:;" class="red miniDt" rel="nofollow"><span class="vm">See Details</span><em class="icon14 icon_explan"></em></a>
	                                <div class="miniOpts">
	                                    <div 
	                                    class="miniOpt" 
	                                    v-for="(opt, key, inx) of item.customOption" 
	                                    :key="item.id+inx">
	                                    	<b v-text="key"></b> / {{opt}}
	                                    </div>
	                                </div>
	                            </div>
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

	                </div>
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

        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'MiniCart',
  data () {
  	return {
  		totalItem: 0,
  		subTotal: '0',
  		miniData: {}
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

</style>
