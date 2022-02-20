<template>
  <div id="recommended">
    <p>为你推荐<span>大家都在看</span></p>
    <div id="demo" style="width: 1000px; overflow: hidden;margin: auto;">
      <div id="indemo" style="display:flex; width: 200%">
        <div id="demo1" style="display:flex;">
          <div class="detail_1 lf">
            <div class="detail_img1">
              <img
                src="../assets/img/product_detail/product_detail_1.png"
                border="0"
              />
            </div>
            <p>ThinkPad New S2 (20GUA00QCD)13.3英寸超霸</p>
          </div>
          <div class="detail_1 lf">
            <div class="detail_img1">
              <img
                src="../assets/img/product_detail/product_detail_2.png"
                border="0"
              />
            </div>
            <p>戴尔 DELL燃7000 R1605S 超霸</p>
          </div>
          <div class="detail_1 lf">
            <div class="detail_img1">
              <img
                src="../assets/img/product_detail/product_detail_3.png"
                border="0"
              />
            </div>
            <p>戴尔(DELL)魔方15MF Pro-R2505TSS灵</p>
          </div>
          <div class="detail_1 lf">
            <div class="detail_img1">
              <img
                src="../assets/img/product_detail/product_detail_4.png"
                border="0"
              />
            </div>
            <p>联想(Lenovo) YOGA900 (YOGA4 PRO)多彩版</p>
          </div>
        </div>
        <div id="demo2" style="display:flex;"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    mounted(){
        var speed = 20;
        var tab = document.getElementById("demo");
        var tab1 = document.getElementById("demo1");
        var tab2 = document.getElementById("demo2");
        tab2.innerHTML = tab1.innerHTML;
        function Marquee() {
            if (tab2.offsetWidth - tab.scrollLeft <= 0)
                tab.scrollLeft -= tab1.offsetWidth
            else {
                tab.scrollLeft++;
            }
        }
        var MyMar = setInterval(Marquee, speed);
        tab.onmouseover = function () {
            clearInterval(MyMar)
        };
        tab.onmouseout = function () {
            MyMar = setInterval(Marquee, speed)
        };
    },
};
</script>
<style>
#demo1, #demo2 {
    width: 1000px;
    text-align: center;
}
</style>