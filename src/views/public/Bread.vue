<template>
	<div class="breadcrumbs">
		<div class="localTd">
	    	<ul class="bread">
	        	<li itemtype="http://data-vocabulary.org/Breadcrumb" itemscope=""><a itemprop="url" href="/"><span itemprop="title">Home</span></a></li>
	        	<slot name="second"></slot>
	        	<slot name="third"></slot>
	        	<slot name="last"></slot>
	        </ul>
        </div>
        <div class="backTd">
        	<a href="#" class="button no"><span>Back</span></a>
        </div>
    </div>
</template>

<script>
export default {
  name: 'PublicBread'
}
</script>

<style scoped>

</style>
