import Vue from 'vue/dist/vue.esm.js'
import Router from './router/router'
import Header from './components/header.vue'
import Index from './components/index.vue'
import About from './components/about.vue'
import Contact from './components/contact.vue'

var app = new Vue({
  router: Router,
  el: '#app',
  components: {
    'navbar': Header,
    //index画面を試すため上にindex-viewタグを作り、Indexコンポーネントを作成した。
    'index-view': Index,
    'about-view': About,
    'contact-view': Contact,
  },
});
