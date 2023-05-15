'use strict'

import './router.js'
import './card.js'

const URL = 'https://www.superheroapi.com/api.php/949133169839533';

async function fetchHero(id = 644) {
    const res = await fetch(`${URL}/${id}`);
    const data = await res.json();
    
    return data
}

const creatCard = (data) => {
    const card = document.createElement('card-hero')
    card.setAttribute('name', data.name)
    card.setAttribute('photo', data.image)

    const container = document.getElementById('cards-container')
    container.replaceChildren(card)
}







