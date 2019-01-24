<template>
    <div class="menuBox" id="menuBox">  
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
                <div id="menuSc" class="scrollScope">                                                                     
                    <!--@Group01-->
                    <div class="menuItem">
                        <div class="menuLink"><a href="#">New</a></div>
                    &nbsp;</div>&nbsp;
                    <!--\\Group01-->
                    <!--@Group02-->
                    <div class="menuItem dropSec">
                        <div class="menuLink"><a href="#">Brides</a></div>
                        <div class="menuDrop dropBox">
                            <div class="menuSub">
                                <div class="menuSubItem">
                                    <div class="menuSubLink"><a href="#">Gowns</a></div>
                                    <div class="menuSubDrop dropBox_submode">
                                        <a href="#">AW Bridal Exclusives</a>
                                        <a href="#">Lace</a>
                                        <a href="#">Beach</a>
                                        <a href="#">Vintage</a>
                                        <a href="#">2018 Collection</a>
                                        <a href="#">All Gowns</a>
                                    </div>
                                </div>
                                <div class="menuSubItem">
                                    <div class="menuSubLink"><a href="#">Must-Have</a></div>
                                    <div class="menuSubDrop dropBox_submode">
                                        <a href="#">Robes</a>
                                        <a href="#">Sashes</a>
                                        <a href="#">Veils</a>
                                        <a href="#">Tiaras</a>
                                        <a href="#">Gloves</a>
                                        <a href="#">Petticoats</a>
                                        <a href="#">Garters</a>
                                    </div>
                                </div>
                                <div class="menuAdd">
                                    <img src="images/menuAdd01.jpg" alt="">
                                </div>

                            </div>
                        </div>
                    &nbsp;</div>&nbsp;
                    <!--\\Group02-->
                    <!--@Group03-->
                    <div class="menuItem dropSec">
                        <div class="menuLink"><a href="#">Bridesmaids</a></div>
                        <div class="menuDrop dropBox">
                            <div class="menuSub">
                                <div class="menuSubItem">
                                    <div class="menuSubLink"><a href="#">Bridesmaid Dresses</a></div>
                                    <div class="menuSubDrop dropBox_submode">
                                        <a href="#">Long Bridesmaid Dresses</a>
                                        <a href="#">Short Bridesmaid Dresses</a>
                                        <a href="#">All Bridesmaid Dresses</a>
                                        <a href="#">Try On At Home</a>
                                    </div>
                                    <div class="menuSubLink"><a href="#">Shop by Color</a></div>
                                </div>
                                <div class="menuSubItem">
                                    <div class="menuSubLink"><a href="#">Quick Delivery Dresses</a></div>
                                    <div class="menuSubLink"><a href="#">Mother of Brides Dresses</a></div>
                                    <div class="menuSubLink"><a href="#">Junior & Flower Girl Dresses</a></div>
                                    <div class="menuSubLink"><a href="#">Bridesmaid Robes</a></div>
                                    <div class="menuSubLink"><a href="#">Fabric & Swatch</a></div>
                                </div>
                                <div class="menuAdd">
                                    <img src="images/menuAdd01.jpg" alt="">
                                </div>

                            </div>
                        </div>
                    &nbsp;</div>&nbsp;
                    <!--\\Group03-->
                    <!--@Group04-->
                    <div class="menuItem">
                        <div class="menuLink"><a href="#">Accessories</a></div>
                    &nbsp;</div>&nbsp;
                    <!--\\Group04-->
                    <!--@Group05-->
                    <div class="menuItem">
                        <div class="menuLink"><a href="#">Décors</a></div>
                    &nbsp;</div>&nbsp;
                    <!--\\Group05-->
                    <!--@Group06-->
                    <div class="menuItem">
                        <div class="menuLink"><a href="#">Personalized Ceremony</a></div>
                    &nbsp;</div>&nbsp;
                    <!--\\Group06-->
                    <!--@Group07-->
                    <div class="menuItem">
                        <div class="menuLink"><a href="#">Color & Theme</a></div>
                    &nbsp;</div>&nbsp;
                    <!--\\Group07-->
                    <!--@Group08-->
                    <div class="menuItem">
                        <div class="menuLink"><a href="#">Brand Photography</a></div>
                    &nbsp;</div>
                    <!--\\Group08-->
                    <span class="justify_fix"></span>
                </div>
            </div>
            <div class="menuBar"><em class="icon64 icon_close menuCall"></em></div>
        </div>
        <!--\\menu-->
    </div>
</template>

<script>
export default {
  name: 'MainMenu'
}
</script>

<style scoped>

</style>
