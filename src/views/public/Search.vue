/**
 * 
 * @authors YafullyZhao (yafully@gmail.com)
 * @date    2019-02-01 13:21:48
 * @GIT   https://github.com/yafully
 */

<template>
	<div :class="['search', searchIn ? 'search_action' : '']">
        <div class="wrap">
            <div class="searchIn">
                <form method="get" action="#">
                    <select class="category UI-CATEGORY" name="cat">
                        <option value="0">All</option>
                        <option value="mage_catalog_product"></option>
                    </select>
                    <input 
                    type="text" 
                    maxlength="128" 
                    value="" 
                    autocomplete="off" 
                    name="q" 
                    placeholder="Start Typing" 
                    class="input" 
                    id="searchPhrase" 
                    @focus="searchInput" 
                    @blur="searchBlur" 
                    v-model.trim="searchText"
                    >
                    <button id="search_button" type="submit">
                        <em class="icon_search"></em>
                    </button>
                </form>
                <em class="icon_sclose searchCall" @click="searchCall"></em>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'PublicSearch',
  data () {
    return {
        searchText: '',
        status: false
    }
  },
  props: {
    searchIn: Boolean
  },
  methods: {
    searchCall () {
        this.$emit('searchinit', this.status)
    },
    searchInput () {

    },
    searchBlur () {
        if (this.searchText.length < 1) {
            this.$emit('searchinit', this.status)
        }    
    }
  }
}
</script>
<style scoped>

</style>
