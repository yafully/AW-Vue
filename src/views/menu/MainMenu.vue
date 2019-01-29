<template>
    <div class="menu-in">
        <div 
        v-for="(item, index) of menus" 
        :class="['menu-item-'+item.level, index == menuvisible ? 'menu-active' : '']" 
        :key="item.id" 
        @mouseover="menuOpen(index, item.level)" 
        @mouseout="menuClose(index, item.level)" 
        :ref="'menuitem'+index+item.level"
        >
            <div class="menuLink"><a href="#" v-text="item.label"></a></div>
            <div 
            v-if="item.children" 
            :class="['menu-item-children-'+item.level,item.addPics ? 'menu-item-half' : '']" 
            :ref="'menudrop'+index+item.level"
            >
                <main-menu :menus="item.children"></main-menu>
                <div v-if="item.addPics" class="menuAdd">
                    <img :src="'static/menu/'+item.addPics" :alt="item.label">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
//  递归循环生成菜单
export default {
  name: 'MainMenu',
  props: {
    menus: Array
  },
  data () {
      return {
        timeout: null,
        hideTimeOut: 300, 
        menuvisible: null
      }
  },    
  methods: {
    menuOpen (inx, lv) {
        if (lv < 2) {
            //  const tar = this.$refs['menuitem' + inx + lv]
            this.menuClear()
            const drop = this.$refs['menudrop' + inx + lv]
            this.menuvisible = inx
            drop && this.$emit('menuonopen', this.menuvisible)
        }
    },
    menuClose (inx, lv) {
        if (lv < 2) {
            const drop = this.$refs['menudrop' + inx + lv]
            this.timeout = setTimeout(() => {
              this.menuvisible = null
              drop && this.$emit('menuonclose', this.menuvisible)
            }, this.hideTimeOut)
        }
    },
    menuClear () {
        this.$emit('menuonclose', null)
        clearTimeout(this.timeout)
    }
  }
}
</script>

<style scoped>
    .menuScrollScope > .menu-in{
display: -webkit-box;display: -moz-box;display: -ms-flexbox;display: -webkit-flex;display: flex;
-webkit-box-direction: normal;-moz-box-direction: normal;-webkit-box-orient: horizontal;-moz-box-orient: horizontal;
-webkit-flex-direction: row;-ms-flex-direction: row;flex-direction: row;
-webkit-flex-wrap: nowrap;-ms-flex-wrap: nowrap;flex-wrap: nowrap;
-webkit-box-pack: justify;-moz-box-pack: justify;-webkit-justify-content: space-between;
-ms-flex-pack: justify;justify-content: space-between;
-webkit-align-content: flex-start;-ms-flex-line-pack: start;align-content: flex-start;
-webkit-box-align: start;-moz-box-align: start;-webkit-align-items: flex-start;-ms-flex-align: start;align-items: flex-star;
position: relative;z-index: 1;padding:0 1em;}
    .menu-item-1 > .menuLink{position: relative;}
    .menu-item-1 > .menuLink:after{content: ''; position: absolute; z-index: 6; left: 0; width: 100%; bottom: -1px; height: 2px; background: #7b979a; display: none;}

    .menu-item-children-1{position: absolute;z-index:-1;width:100%;left:0;top:42px;display: none;table-layout:fixed;border-collapse:separate;box-sizing: border-box;padding: 1em;background: #fff;}
    .menu-item-half > .menu-in{display: table-cell;box-sizing: border-box;width: 60%;vertical-align: top;}
    .menu-item-children-1 .menuLink{text-align: left;}
    
    .menu-item-1{display: inline-block;vertical-align: middle;}
    .menu-item-2{width:50%;float: left}
    .menu-item-2 > .menuLink{font:18px/1 'MinionPro-Regular', 'Helvetica Neue', Helvetica, sans-serif;text-transform: capitalize;}
    .menu-item-3 > .menuLink{font: 13px/1.42857143 'Avenir-Book', 'Helvetica Neue', Helvetica, sans-serif;text-transform: capitalize;}

    .menuAdd{display: table-cell;box-sizing: border-box;width: 40%;vertical-align: top;text-align: right;}
    .menuAdd img{max-width: 100%;}
    
    .menu-active > .menuLink:after{display: block;}
    .menu-active .menu-item-children-1{display: table;z-index:1;}
</style>
