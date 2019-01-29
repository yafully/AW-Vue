<template>
	<div class="page">
		<public-header></public-header>
		<!--@Vs-->
		<div class="wrap">
        	<!--@listVs-->
        	<div class="listVs">
        		
        		<public-bread>
        			<li itemtype="http://data-vocabulary.org/Breadcrumb" itemscope="" slot="second">
        				<a itemprop="url" href="#"><span itemprop="title">Wedding Gowns</span></a>
        			</li>
        			<li class="last" slot="last">Classic Lace</li>
        		</public-bread>
                <div class="listImg">
                    <img src="@img/list/listVs01.jpg" class="lzy" alt="Bed Linen">
                </div>
        	</div>
        	<!--\\listVs-->
        </div>
		<!--\\Vs-->
		<div class="listColumn clear">
			<!--@sort-->
		    <div class="sortBox">
		    	<!--@sortSelected-->
		        <div class="sortStatus">
		        	
		        	<span 
		        	class="button ga sta" 
		        	v-for="item of selectedObj" 
		        	:key="item.id"
		        	>
		        		<span>
		        			{{item.label}}
		        			<em 
		        			class="icon14 icon_close" 
		        			@click="delSort(item.id)"
		        			></em>
		        		</span>
		        	</span>
		            <span 
		            class="button bo" 
		            @click="delSort(0)" 
		            v-show="Object.keys(selectedObj).length"
		            ><span>Clear</span></span>
		        </div>
		        <!--\\sortSelected-->
		        <!--@sortBar-->
		        <div class="sortBar" id="sortBar">
		            <div class="filterBar doTd">
						<div class="whide"><a href="#" class="button bo refineCall"><span>Refine</span></a></div>
						<div class="mhide">
		            		<div id="ref">
								<ul class="sortUL" id="sortUL">

									<li 
									:class="{'sortSec':true,'onhover': filter.fold,'sideCat': !filter.filterType}" 
									v-for="(filter, key) of filterData" 
									:key="filter.id" 
									:data-type="filter.filterType" 
									:ref="key"
									>
										<span class="sortRev" 
										@click="toggleEvt(filter.id)" 
										v-text="filter.filterName"></span>
										<div class="sortDrop">

											<div 
											:class="['refItem', {'selected': item.selected}]"
											v-for="item of filter.range" 
											:key="item.id" 
											@click.prevent="sortEvt(filter.id,item.id)" 
											v-show="!item.selected"
											>
												<a href="javascript:;" 
												:ref="item.id" 
												rel="nofollow"
												><span class="vm" v-text="item.label"></span></a>
											</div>
					                        
										</div>
									</li>
									
								</ul>
							</div>
		            	</div>

		            </div>
		        </div>
		        <!--}}sortBar-->
		    </div>
		    <!--\\sort-->

			<div class="category-view" id="category-view">
			    <div id="listScope">
	                <div class="listBar">
	                    <span class="dropdown">
	                        <select class="lovevoxlayer_sec" onchange="window.location.href = this.value">
	                            <option rel="nofollow" value="" selected="selected">Price</option>
	                            <option rel="nofollow" value="">New</option>
	                            <option rel="nofollow" value="">Best Sellers</option>
	                            <option rel="nofollow" value="">Most Viewed</option>
	                            <option rel="nofollow" value="">Top Rated</option>
	                        </select>
	                    </span>

	                    <!--@pages-->
			    	    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage" :page-size="pageSize" layout="prev, pager, next, jumper" :total="pageTotal" class="right">
	    				</el-pagination>
			    	    <!--}}pages-->

	                </div>

	        	    <!--@list-->
	        	    <div class="list clear" id="list">
	        	        <div 
	        	        class="proItem" 
	        	        v-for="item of productData" 
	        	        :key="item.id"
	        	        >
	        	            <div class="proPic">
	        	                <a :href="item.id" class="imglink">
	        	                    <img 
	        	                    v-lazy="'static/catalog/product/'+item.productImg" 
	        	                    :alt="item.productName"/>
	        	                </a>
	        	                
	        	                <dfn class="proRb" v-if="getLabel(item.productLabel)" v-html="getLabel(item.productLabel)"></dfn>
	        	                
	                            <a :href="item.id" class="iconBar">
	                               View Details
	                            </a>

	        	            </div>
	        	            
	        	            <div class="proInfo">
	        	                <div class="name_s">
	        	                    <a :href="item.id" v-text="item.productName"></a>
	        	                </div>
	        	                
	        	                <div class="proMid">
	        	                    <span class="price">
	        	                        <b v-text="item.price">$4.99</b>              
	        	                    </span>

	        	                </div>
	        	                
	        	                <div class="proBot hide">
	        	                	<div class="buff clear">
	        	                		<span class="vm">Free Shipping</span>
	        	                		<span class="abRt">
	        	                			<em class="icon localship tip" data-title="Local Shipping"></em>
	        	                			<em class="icon tip" data-title="Colorful"><img src="images/color.svg" alt=""></em>
	        	                		</span>
	        	                	</div>
	        	                    <span itemtype="http://schema.org/AggregateRating" itemscope="" itemprop="aggregateRating">
	        	                        <span class="rate">
	        	                            <dfn style="width:50%" itemprop="ratingValue">2.5</dfn>
	        	                        </span>
	        	                        <a href="detail.html#review" class="gray"><span itemprop="reviewCount">3</span></a>
	        	                    </span>
	        	                </div>
	        	                
	        	            </div>
	        	            
	        	        </div>
	        	        
	        	    </div>
	        	    <!--}}list-->
		    	    <!--@pages-->
		    	    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage" :page-size="pageSize" layout="prev, pager, next, jumper" :total="pageTotal" class="right">
    				</el-pagination>
		    	    <!--}}pages-->
		    	</div>    
			</div>
		</div>

		<public-footer></public-footer>
	</div>
</template>
<style scoped>
	body{
		background: #fff
	}
	
</style>
<script>
import PublicHeader from './public/Header'
import PublicFooter from './public/Footer'
import PublicBread from './public/Bread'
import axios from 'axios'
export default {
  name: 'ProductList',
  data () {
  	return {
  		productData: [],
  		filterData: [],
  		selectedObj: {},
  		pageSize: 0,
  		pageTotal: 0,
  		currentPage: 1
  	}
  },
  components: {
	PublicHeader,
	PublicFooter,
	PublicBread
  },
  mounted () {
  	this.getProData()
  },
  methods: {
  	getProData () {
  		axios.get('/api/products.json')
				.then(this.getDataOk)
  	},
	getDataOk (res) {
		const data = res.data
		if (data.ret && data.data) {
			this.productData = data.data.productData
			this.filterData = data.data.filterData
			this.pageSize = data.data.pageSize
			this.pageTotal = data.data.pageTotal
		}
	},
	getLabel (labelId) {
  		let Label = false
  		switch (labelId) {
  			case 1:
  				Label = '<span>New</span>'
  			break
  			case 2:
  				Label = '<span>Hot</span>'
  			break
  			case 0:
  			default:
  				Label = false
  			break
  		}
  		return Label
  	},
  	toggleEvt (key) {
  		this.filterData[key].fold = !this.filterData[key].fold
  	},
  	sortEvt (pid, id) {
  		if (!this.selectedObj.hasOwnProperty(id)) {
  			this.selectedObj[id] = {pid: pid, id: id, label: this.filterData[pid].range[id].label}
  			this.filterData[pid].range[id].selected = true
  		}
  	},
  	delSort (id) {
  		if (id) {
  			const pid = this.selectedObj[id].pid
  			this.filterData[pid].range[id].selected = false
  			delete this.selectedObj[id]
  		} else {
  			Object.keys(this.selectedObj).forEach((item) => {
  				const pid = this.selectedObj[item].pid
  				this.filterData[pid].range[item].selected = false
  				delete this.selectedObj[item]
  			})
  			//  this.selectedObj = {}
  		}
  	},
  	//  pageation
  	handleSizeChange (val) {
        console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
        console.log(`当前页: ${val}`)
    }
  }
}
</script>
