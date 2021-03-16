window.onload = function() {
  // let app = new Vue({
  //     el:"#app",
  //     data:{
  //         message:"hello vue！"+ new Date()
  //     }
  // });

  // var app = new Vue({
  //     el:"#app",
  //     data:{
  //         message:"Hello Vue.js!"
  //     },
  //     methods: {
  //         reverseMessage: function(){
  //             this.message = this.message.split('').reverse().join('');
  //         }
  //     }
  // });
  //轮播图
  // var wrap = document.querySelector(".wrap");
  // var prev = document.querySelector(".arrow_left");
  // var next = document.querySelector(".arrow_right");

  // next.onclick = function () {
  //     next_pic();
  // }
  // prev.onclick = function () {
  //     prev_pic();
  // }
  // function next_pic () {
  //     index++;
  //     if(index > 4){
  //         index = 0;
  //     }
  //     showCurrentDot();
  //     var newLeft;
  //     if(wrap.style.left === "-3600px"){
  //         newLeft = -1200;
  //     }else{
  //         newLeft = parseInt(wrap.style.left)-600;
  //     }
  //     wrap.style.left = newLeft + "px";
  // }
  // function prev_pic () {
  //     index--;
  //     if(index < 0){
  //         index = 4;
  //     }
  //     showCurrentDot();
  //     var newLeft;
  //     if(wrap.style.left === "0px"){
  //         newLeft = -2400;
  //     }else{
  //         newLeft = parseInt(wrap.style.left)+600;
  //     }
  //     wrap.style.left = newLeft + "px";
  // }
  // var timer = null;
  // function autoPlay () {
  //     timer = setInterval(function () {
  //         next_pic();
  //     },2000);
  // }
  // autoPlay();

  // var container = document.querySelector(".container");
  // container.onmouseenter = function () {
  //     clearInterval(timer);
  // }
  // container.onmouseleave = function () {
  //     autoPlay();
  // }

  // var index = 0;
  // var dots = document.getElementsByTagName("span");
  // function showCurrentDot () {
  //     for(var i = 0, len = dots.length; i < len; i++){
  //         dots[i].className = "";
  //     }
  //     dots[index].className = "on";
  // }

  // for (var i = 0, len = dots.length; i < len; i++) {
  //     (function(i){
  //         dots[i].onclick = function () {
  //             var dis = index - i;
  //             if(index == 4 && parseInt(wrap.style.left)!==-3000){
  //                 dis = dis - 5;
  //             }
  //             //和使用prev和next相同，在最开始的照片5和最终的照片1在使用时会出现问题，导致符号和位数的出错，做相应地处理即可
  //             if(index == 0 && parseInt(wrap.style.left)!== -600){
  //                 dis = 5 + dis;
  //             }
  //             wrap.style.left = (parseInt(wrap.style.left) +  dis * 600)+"px";
  //             index = i;
  //             showCurrentDot();
  //         }
  //     })(i);
  // }

  // let app = new Vue({
  //     el: "#app",//el表示发生行为的目的地
  //     template: "<div><h1>hello fang! {{text}}</h1></div>",//要装载的模板
  //     data: function () {
  //         return {
  //             text: "hello vue"
  //         }
  //     }
  // });

  // let parentId = document.getElementById("parent");
  // let child = document.getElementById("child");
  // parent.addEventListener("click", function (e) {
  //     alert("parent事件被触发，" + e.target.id);
  // }, true);

  // child.addEventListener("click", function (e) {
  //     alert("child事件被触发，" + e.target.id);
  // }, true);

  // new Vue({
  //     el: "#app",
  //     // template: ` `,
  //     data: function () {
  //         return {
  //             stus: [
  //                 { name: "luo" ,myclass:"a"},
  //                 { name: "xiao",myclass:"b" },
  //                 { name: "fang",myclass:"a" }
  //             ],
  //             stus2:{
  //                 "A":"fang",
  //                 "B":"baobao",
  //                 "c":"520"
  //             },
  //             isshow:true
  //         }
  //     },
  //     methods: {
  //         changeIsShow: function(e){
  //             // console.log(e);
  //             this.isshow = !this.isshow;
  //         }
  //     }
  // });

  // //声明入口组件
  // let App = {
  //     template:"<h1>组件的入口</h1>"
  // };

  // new Vue({
  //     el:"#app",
  //     components:{//声明要用的组件们
  //         //key是组件名，value是组件对象
  //         app: App
  //     },
  //     template:"<app/>" //入口组件
  // });

  // // 生出子，声明子，使用子
  // //创建组件
  // let myHead = {
  //     template:"<div>我是头部</div>"
  // };
  // let myBody = {
  //     template:"<div>我是中部</div>"
  // };
  // let myFoot = {
  //     template:`
  //         <div>
  //         我是底部<button @click="showName('fang')">点我</button>
  //         </div>
  //     `,
  //     methods:{
  //         showName:function(str){
  //             alert(str);
  //         }
  //     }
  // };

  // //声明组件
  // let App = {
  //     components:{
  //         "my-head": myHead,
  //         "my-body": myBody,
  //         "my-foot": myFoot
  //     },
  //     template:`
  //         <div>
  //             <my-head></my-head>
  //             <my-body></my-body>
  //             <my-foot></my-foot>
  //         </div>
  //     `
  // }
  // //使用
  // new Vue({
  //     el:"#app",
  //     components:{
  //         app:App
  //     },
  //     template:"<app/>"
  // });

  // let Son = {
  //     template:`
  //         <div>
  //             <h1 v-show="isshow">1</h1>
  //             <h1 v-if="isshow">2</h1>
  //             接收到的父组件数据是：{{title}}
  //             <ul>
  //                 <li v-for="name in ['fang','luo','gao']">{{name}}</li>
  //             </ul>
  //             <button @click="changeMe">改变显示</button>
  //             <hr/>
  //             <label>单向数据流</label><input type="text" :value="mytext"/><br/>
  //             <label>双向向数据绑定</label><input type="text" v-model="mytext"/>
  //             <br/>
  //             <h1>是否是双向绑定看下面</h1>
  //             {{mytext}}
  //         </div>
  //     `,
  //     props:["title"],
  //     data:function (){
  //         return {
  //             isshow: true,
  //             mytext:"hello"
  //         }
  //     },
  //     methods:{
  //         changeMe:function(){
  //             this.isshow = !this.isshow
  //         }
  //     }
  // };

  // //父向子传数据 就是v-bind给元素属性赋值
  // let App = {
  //     components:{
  //         son:Son
  //     },
  //     template:`
  //         <div>
  //             <son :title="test"></son>
  //         </div>
  //     `,
  //     data:function(){
  //         return {
  //             test:"fang，我是子数据"
  //         }
  //     }
  // }

  // new Vue({
  //     el:"#app",
  //     components:{
  //         app:App
  //     },
  //     template:"<app/>"
  // });

//   //注册公共的全局组件，Vue.component("组件名",组件对象);PrettierPrettier
//   Vue.component("my-btn", {
//     template: `
//             <button style="background-color:red;">芳宝宝的按钮</button>
//         `
//   });

//   //创建组件
//   var myHeader = {
//     template: `
//             <div>
//                 我是header组件
//                 <my-btn/>
//             </div>
//         `
//   };

//   var myFooter = {
//     template: `
//             <div>
//                 我是footer组件
//                 <my-btn/>
//             </div>
//         `
//   };
//   //声明入口组件
//   var App = {
//     components: {
//       "my-header": myHeader,
//       "my-footer": myFooter
//     },
//     template: `
//             <div>
//                 <my-header/>
//                 <br/>
//                 <my-footer/>
//                 <br/>
//                 App入口组件使用公共组件
//                 <my-btn/>
//             </div>
//         `
//   };
//   //使用入口组件
//   new Vue({
//     el: "#app",
//     components: {
//       app: App
//     },
//     template: `
//             <app/>
//         `
//   });

//   //先总结下template的使用，在使用入口组件和注册公共组件时，可以没有根节点如div

    
  new Vue({
    el:"#app",
    template:`
      <div>
        <h1 :title="myText">hello world</h1>
      </div>
    `,
    data:function(){
      return {
        myText:"hello vue"
      }
    }
  });


};
