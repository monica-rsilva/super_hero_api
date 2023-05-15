'use strict'

// import {loadCard} from './app.js'

const routes = {
    '/'       : './pages/home.html',
    '/galeria':'./pages/galeria.html'
}

const routeInit = async () => {

    const response = await fetch('./pages/home.html')
    const html = await response.text()
    document.getElementById('root').innerHTML = html
}

const route = () => {
    window.event.preventDefault()
    window.history.pushState({}, "", window.event.target.href)
    handleLocation()
}

const handleLocation = async () => {
    const path = window.location.pathname
    const route = routes[path]
    const response = await fetch(route)
    const html = await response.text()

    document.getElementById('root').innerHTML = html

    if (path == '/galeria'){
        // loadCard()
    } 
}

window.onpopstate = handleLocation
window.route = route

routeInit();