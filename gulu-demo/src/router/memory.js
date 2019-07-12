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

function route(container) {
    // 获取用户想去哪里
    let number = window.localStorage.getItem('xxx')
    
    if (!number) {
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
        window.localStorage.setItem('xxx', href)
        onStateChange(href)
    })
}

route(app)

function onStateChange() {
    route(app)
}
