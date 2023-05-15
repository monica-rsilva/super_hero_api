'use strict'

class card extends HTMLElement {
    constructor() {
        super()

        this.shadow = this.attachShadow({ mode: 'open' })

        this.name = 'Hero'
        this.image = null
        this.background = ''

    }

    static get observedAttributes() {
        return ['nome', 'foto', 'background']
    }

    attributeChangedCallback(nameAttr, oldValue, newValue) {
        this[nameAttr] = newValue
    }


    connectedCallback() {
        this.shadow.appendChild(this.component())
        this.shadow.appendChild(this.styles())
    }

    styles() {
        const css = document.createElement('style')
        css.textContent = `
        *{
            padding:0;
            margin:0;
            box-sizing:border-box;
        }

        .card {
            width: 17rem;
            padding: 1.8rem 2.2rem;
          
            background: linear-gradient(180deg, #29323c 0%, #0e0f10 100%);
            border-radius: 1.6rem;
        }

        .card_name {
            font-family: 'Bangers';
            font-size: 2.8rem;
            font-weight: 400;
            line-height: 3.2rem;
            color: #ffffff;
            text-align: center;
        }

        .card_imagem {
            width: 10rem;
            height: 20.2rem;

            background-image: url(${this.photo});

            object-fit: cover;
            margin-block: 1.6rem;
            border-radius: 0 0 0 6rem;
        }
        `
        return css
    }

    component() {
        const card = document.createElement('div')
        card.classList.add('card')

        const name = document.createElement('div')
        name.classList.add('card_name')
        name.textContent = this.name

        const img = document.createElement('div')
        img.classList.add('card_imagem')

        card.append(name,img)

        return card
    }
}

// nome da tag, precisa ser nome composto
customElements.define('card-hero', card)