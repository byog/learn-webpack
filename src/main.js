// import './main.scss'

// import SH from './js/a'

// SH()

// document.getElementById('box1').addEventListener('click', () => {
//     import(/* webpackChunkName: '', webpackPrefetch: true */ './js/b')
//         .then(({ default: Cl }) => {
//             console.log(Cl())
//         })
//         .catch(() => console.log('b load error'))
// })

// if (module.hot) {
// 	module.hot.accept("./js/a.js", () => {
// 		console.log(SH());
// 	});
// }

import Vue from 'vue'
// import { Container, Header, Footer, Aside, Main, Row, Col } from 'element-ui'
import App from './app.vue'
// import About from './views/about.vue'
// import Price from './views/price.vue'
// import Hiring from './views/hiring.vue'
// import Works from './views/works.vue'

// Vue.component(Container.name, Container)
// Vue.component(Header.name, Header)
// Vue.component(Footer.name, Footer)
// Vue.component(Aside.name, Aside)
// Vue.component(Main.name, Main)
// Vue.component(Row.name, Row)
// Vue.component(Col.name, Col)

new Vue({
    el: '#app',
    render: (h) => h(App),
})
