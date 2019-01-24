<template>
	<div>
		Shopping Cart
		<div v-html="$route.query.goodsId"></div>
	</div>
</template>
<style scoped>

</style>
<script>
export default {
  name: 'Cart'
}
</script>
