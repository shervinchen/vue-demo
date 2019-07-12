const app = document.querySelector('#app')

const div1 = document.createElement('div')
div1.innerHTML = '1'
const div2 = document.createElement('div')
div2.innerHTML = '2'
const div3 = document.createElement('div')
div3.innerHTML = '3'
const div4 = document.createElement('div')
div4.innerHTML = '4'
const routeTable = {
    '/1': div1,
    '/2': div2,
    '/3': div3,
    '/4': div4
}

// const div11 = document.createElement('div')
// div11.innerHTML = '1.1'
// const div12 = document.createElement('div')
// div12.innerHTML = '1.2'
// const div13 = document.createElement('div')
// div13.innerHTML = '1.3'
// const route1Table = {
//     '1/1': div11,
//     '1/2': div12,
//     '1/3': div13
// }

function route(container) {
    // 获取用户想去哪里
    let number = window.location.pathname
    
    if (number === '/') {
        number = '/1'
    }

    // 获取界面
    let div = routeTable[number.toString()]
    // 渲染界面
    if (!div) {
        div = document.querySelector('#div404')
    }
    div.style.display = 'block'

    // 展示界面
    container.innerHTML = ''
    container.appendChild(div);
}

const allA = document.querySelectorAll('a.link')
for(let a of allA) {
    a.addEventListener('click', (e) => {
        e.preventDefault()
        const href = a.getAttribute('href')
        window.history.pushState(null, `page ${href}`, href)
        onStateChange(href)
    })
}

route(app)

function onStateChange() {
    route(app)
}
