// var Vue = require('../dist/vue.js')
// var Router = require('../dist/vue-router.js')
//
// Vue.use(VueRouter)
//
// const Foo = {template: '<div>foo</div>'}
// const Bar = {template: '<div>bar</div>'}
//
// const router = [
//   {path:'/foo',component: Foo},
//   {path:'/bar',component: Bar}
// ]
//
// const router = new VueRouter({
//   routes: routes
// })

function $(id){
  return typeof id==='string'?document.getElementById(id):id;
}

window.onload = function(){
  //获取鼠标换过或点击的标签和要切换内容的元素
  var titles = $('notice-tit').getElementsByTagName("li"),
      divs = $('notice-con').getElementsByTagName("div");
      if(titles.length!=divs.length)
        return
  //遍历titles下的所有li
  for(var i = 0; i < titles.length; i++){
    titles[i].id = i;
    divs[i].id = i;
    titles[i].onmouseover = function(){
      //清除所有li上的class
      for(var j = 0; j < titles.length; j++){
        titles[j].className = '';
        divs[j].style.display = 'none'
      }
      this.className = 'select';
      divs[this.id].style.display = 'block'
        }
    }
  }
