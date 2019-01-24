<template>
    <div id="head"> 
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

	                <div class="menuItem dropSec mhide miniAccount" data-notop="1" id="logLink">
	                    <a href="#" class="menuLink"><em class="menuIcon icon_account"></em></a>
	                    <div class="headDrop dropBox">
	                        <div class="menuSubItem">
	                            <a rel="nofollow" href="#" class="accLink">Dashborad</a>
	                        </div>
	                        <div class="menuSubItem">
	                            <a rel="nofollow" href="#" class="accLink">Recent View</a>
	                        </div>
	                        <div class="menuSubItem">
	                            <a rel="nofollow"  href="#" class="accLink">Wishlist</a>
	                        </div>
	                        <div class="menuSubItem">
	                            <a rel="nofollow"  href="#" class="accLink">Wishlist</a>
	                        </div>
	                        <div class="menuSubItem">
	                            <a rel="nofollow"  href="#" class="accLink">Wishlist</a>
	                        </div>
	                        <div class="menuSubItem">
	                            <a rel="nofollow" href="#" class="accLink oran">Logout</a>
	                        </div>
	                    </div>
	                </div>

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

	    <main-menu></main-menu>
    </div>
</template>

<script>
//  import '/@css/common.css'
import MainMenu from '../menu/MainMenu'
import MiniCart from '../checkout/minicart/MiniCart'
export default {
  name: 'PublicHeader',
  components: {
  	MainMenu,
  	MiniCart
  }
}
</script>

<style scoped>

</style>
