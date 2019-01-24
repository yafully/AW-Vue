<template>
    <!--@Footer-->
    <div class="footer">

        <div class="footApp wrap clear">
            
            <div class="ftmenu clear">
                <ul class="ftmenuCol">
                    <li class="ftmenuTit">Help Center</li>
                    <li class="ftli"><a href="#" rel="nofollow" class="anilink">Track Your Order</a></li>
                    <li class="ftli"><a href="#" rel="nofollow" class="anilink">Measuring Guide</a></li>
                    <li class="ftli"><a href="#" rel="nofollow" class="anilink">Size Chart</a></li>
                    <li class="ftli"><a href="#" rel="nofollow" class="anilink">Color Chart</a></li>
                    <li class="ftli"><a href="#" rel="nofollow" class="anilink">Return Policy</a></li>
                    <li class="ftli"><a href="#" rel="nofollow" class="anilink">Help & F.A.Q.s</a></li>
                </ul>
                <ul class="ftmenuCol">
                    <li class="ftmenuTit">About AW.BRIDAL</li>
                    <li class="ftli"><a href="#" rel="nofollow" class="anilink">About Us</a></li>
                    <li class="ftli"><a href="#" rel="nofollow" class="anilink">Contact Us</a></li>
                    <li class="ftli"><a href="#" rel="nofollow" class="anilink">Quality & Craftsmanship</a></li>
                    <li class="ftli"><a href="#" rel="nofollow" class="anilink">Site Map</a></li>
                </ul>
                <ul class="ftmenuCol">
                    <li class="ftmenuTit">Resource</li>
                    <li class="ftli"><a href="#" rel="nofollow" class="anilink">Affiliate Program</a></li>
                    <li class="ftli"><a href="#" rel="nofollow" class="anilink">Where to Buy</a></li>
                    <li class="ftli"><a href="#" rel="nofollow" class="anilink">Photographer</a></li>
                    <li class="ftli"><a href="#" rel="nofollow" class="anilink">Request a Catalog</a></li>
                </ul>
            </div>

            <!--@News letter-->
            <div class="newslbox">
                <div class="footlogo">
                    <img src="@img/logo_hoz.svg" alt="AW.Bridal"/>
                </div>
                <div class="newslter"><!--pass-->
                    <form id="newsletter-validate-detail" method="post" action="#">
                        <input type="text" id="newsletter" class="input validate" value="" name="email" data-valid="elemt:'#newsletter',tip:'#newsletter_tip',rule:'email',warn:_ZUI_Please enter a valid email address._ZUI_,pass:'&nbsp;',passhide:1">
                        <label for="newsletter">Enter your email address</label>
                        <div class="control">
                            <button id="newsBtn" class="button" title="Subscribe" type="button">
                                <span class="icon42 icon_right"></span>
                            </button>
                        </div>
                        <dfn class="Vmsg" id="newsletter_tip"></dfn>
                        <div class="newsPass">Thanks for your subscribtion. A confirmation email will be sent shortly.</div>
                    </form>
                </div>

                <div class="socialIcons">
                    <a href="" rel="nofollow" title="Facebook"><em class="icon32 icon_fb"></em></a>
                    <a href="" rel="nofollow" title="Instagram"><em class="icon32 icon_ins"></em></a>
                    <a href="" rel="nofollow" title="Pinterest"><em class="icon32 icon_pin"></em></a>
                    <a href="" rel="nofollow" title="Youtube"><em class="icon32 icon_you"></em></a>
                </div>
       
            </div>
            <!--\\News letter-->
            <div class="vs_top" id="gotop"></div>
        </div>

        <div class="footAdd wrap">
            <a href=""><img src="@img/footAd.jpg" alt=""></a>
        </div>

        <div class="ftcopy">
            
            <div class="copyright wrap clear">
                <div class="copy">
                    &copy; 2005-2018 Fishingsir All Rights Reserved. 
                    <span><a class="gray" href="Terms&Conditions.html" rel="nofollow">Terms & Condition</a> | <a class="gray" href="privacy_policy.html" rel="nofollow">Privacy Policy</a></span>
                </div>
                <div class="fright">
                    <span><a class="gray htmlCall" data-size="480,520" data-tar="#shopHtml" href="javascript:;" rel="nofollow">Where to Buy</a> | <a class="gray htmlCall" data-size="480,520" data-tar="#currencyHtml" href="javascript:;" rel="nofollow"><em class="flags en"></em><span class="vm">English - US Dollar</span></a></span>
                </div>
            </div>
        </div>

    </div>
    <!--\\Footer-->
</template>

<script>
import './../../assets/css/footer.css'
export default {
  name: 'PublicFooter'
}
</script>

<style scoped>

</style>
