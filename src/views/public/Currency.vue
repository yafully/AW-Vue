/**
 * 
 * @authors YafullyZhao (yafully@gmail.com)
 * @date    2019-02-10 11:11:44
 * @GIT   https://github.com/yafully
 */

<template>
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
</template>

<script>
export default {
  name: 'Currency'
}
</script>
<style scoped>

</style>
