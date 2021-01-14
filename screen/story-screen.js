class StoryScreen extends HTMLElement{
    constructor(){
        super()
        this._shadowRoot = this.attachShadow({mode:"open"})
        this._shadowRoot.innerHTML = `
        WELCOME TO MY WEB
        <style>
        *{
            font-size: 500px

        }
        </style>
        
        `
    }
}

window.customElements.define('story-screen',StoryScreen)