<template>
    <div id="head" :class="[menuStatus != null ? 'menuIn' :'']"> 
	    <!--@Notice-->
	    <div class="topApp" id="topApp">
	        <div class="topAppIn">

	            <div class="topNote" id="topNote">
	                <div class="topNoteIn" id="topNoteIn">
	                    <div class="topNoteSl">
	                        <a href="">Sample Sales from $5.99!  Free shipping!</a>
	                    </div>
	                    <div class="topNoteSl">
	                        <a href="">Site Wide Free Shipping on Order $39+ !</a>
	                    </div>
	                </div>
	            </div> 
	            <!--@hRight-->
	            <div class="submenu subtop">
	                <div class="menuItem mhide">
	                    <a href="javascript:;" class="menuLink searchCall"><em class="menuIcon icon_search"></em></a>
	                </div>

	                <el-dropdown class="menuItem mhide miniAccount">
	                	<a href="#" class="menuLink"><em class="menuIcon icon_account"></em></a>
	                	<el-dropdown-menu slot="dropdown">
	                		<el-dropdown-item>
								<a rel="nofollow" href="#" class="accLink">Dashborad</a>
	                		</el-dropdown-item>
	                		<el-dropdown-item>
								<a rel="nofollow" href="#" class="accLink">Recent View</a>
	                		</el-dropdown-item>
	                		<el-dropdown-item>
								<a rel="nofollow" href="#" class="accLink">Wishlist</a>
	                		</el-dropdown-item>
	                		<el-dropdown-item>
								<a rel="nofollow" href="#" class="accLink">My Order</a>
	                		</el-dropdown-item>
	                		<el-dropdown-item>
								<a rel="nofollow" href="#" class="accLink">Address Book</a>
	                		</el-dropdown-item>
	                		<el-dropdown-item>
								<a rel="nofollow" href="#" class="accLink">Logout</a>
	                		</el-dropdown-item>
	                	</el-dropdown-menu>	
	                </el-dropdown>

	                <mini-cart></mini-cart>

	            </div>
	            <!--\\hRight-->
	        </div>
	    </div>
	    <!--\\Notice--> 
	    <!--@Header-->
	    <div class="header" id="header">
	        <!--@logo-->
	        <div class="logo">
	            <a href="">
	                <img src="@img/logo.svg" alt="AW.Bridal" title="AW.Bridal"/>
	            </a>
	            <h1>Fishing Rods, Fishing Reels, Fishing Lures, Fishing Baits, Saltwater Fishing, Ice Fishing, Fly Fishing</h1>
	        </div>
	        <!--\\logo-->
	        <div class="hLeft">
	            <span class="icon_menu menuCall"></span>
	        </div>

	    </div>

	    <!--\\Header-->
	    <div class="hide">
	        <!--@Currency-->
	        <div class="miniCurrency" id="currencyHtml">
	            <div class="currency">
	                <div class="current"><em class="flags en"></em><span class="vm">English - US Dollar</span></div>
	                <div class="currencyBox">
	                    <h3>Change Currency:</h3>
	                    <span class="dropdown">
	                        <select class="select" name="currency">
	                            <option value="1">US Dollar</option>
	                            <option value="2">Australian Dollar</option>
	                            <option value="3">Brazilian Real</option>
	                        </select>
	                    </span>
	                </div>
	                <div class="currencyBox">
	                    <h3>Other Country Sites:</h3>
	                    <ul class="currencyList clear">
	                        <li><a href="" rel="nofollow"><em class="flags en"></em><span class="vm">United State</span></a></li>
	                        <li><a href="" rel="nofollow"><em class="flags fr"></em><span class="vm">France</span></a></li>
	                        <li><a href="" rel="nofollow"><em class="flags ca"></em><span class="vm">Spani</span></a></li>
	                        <li><a href="" rel="nofollow"><em class="flags de"></em><span class="vm">Germany</span></a></li>
	                        <li><a href="" rel="nofollow"><em class="flags it"></em><span class="vm">Italy</span></a></li>
	                    </ul>
	                </div>
	                
	            </div>
	        </div>
	        <!--//Currency-->
	    </div>
		
		<div class="menuBox">  
	        <!--@menu-->
	        <div class="menu" id="submode">

	            <div class="menuLog">
	                <div class="doTd">
	                    <em class="flags ca"></em>
	                    <span class="dropdown">
	                        <select class="select" name="currency">
	                            <option value="1">US Dollar</option>
	                            <option value="2">Australian Dollar</option>
	                            <option value="3">Brazilian Real</option>
	                        </select>
	                    </span>
	                </div>
	                <div class="doTd">
	                    <a href="#">
	                        My Account
	                    </a>
	                </div>
	                <div class="doTd logout">
	                    <a href="#">
	                        <em class="icon24 icon_logout"></em>
	                    </a>
	                </div>
	            </div>

	            <div class="menuScroll">
	            	<div class="menuScrollScope">
	                	<main-menu :menus="menuList" v-on:menuonopen="bgOn" v-on:menuonclose="bgOff"></main-menu>
	                </div>
	            </div>
	            <div class="menuBar"><em class="icon64 icon_close menuCall"></em></div>
	        </div>
	        <!--\\menu-->
	    </div>
	    
    </div>
</template>

<script>
//  import '/@css/common.css'
import axios from 'axios'
import MainMenu from '../menu/MainMenu'
import MiniCart from '../checkout/minicart/MiniCart'
export default {
  name: 'PublicHeader',
  components: {
  	MainMenu,
  	MiniCart
  },
  data () {
  	return {
  		menuList: [],
  		menuStatus: null
  	}
  },
  mounted () {
    this.getMainMenuData()
  },
  methods: {
    getMainMenuData () {
        axios.get('/api/mainmenu.json')
                .then(this.getDataOk)
    },
    getDataOk (res) {
        const data = res.data
        if (data.ret && data.data) {
            this.menuList = data.data.menus
        }
    },
    //  menuBgEvt.
    bgOn (status) {
    	this.menuStatus = status
    },
    bgOff (status) {
    	this.menuStatus = status
    }
  }
}
</script>

<style scoped>

</style>
