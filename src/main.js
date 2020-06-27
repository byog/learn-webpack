import './main.scss'

import SH from './js/a'

SH()

// document.getElementById('box1').addEventListener('click', () => {
//     import(/* webpackChunkName: '', webpackPrefetch: true */ './js/b')
//         .then(({ default: Cl }) => {
//             console.log(Cl())
//         })
//         .catch(() => console.log('b load error'))
// })

if (module.hot) {
    module.hot.accept('./js/a.js', () => {
        console.log(SH())
    })
}
