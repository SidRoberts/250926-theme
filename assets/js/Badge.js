class SrBadgeElement extends HTMLElement
{
    constructor ()
    {
        super();

        const message = this.innerHTML;

        this.innerHTML = `
            <div class="message">
                ${message}
            </div>

            <span class="badge"></span>`;
    }

    static get observedAttributes ()
    {
        return ['badge'];
    }

    attributeChangedCallback (name, oldValue, newValue)
    {
        if (name === 'badge') {
            this.querySelector('& > .badge').innerHTML = newValue;
        }
    }
}

customElements.define('sr-badge', SrBadgeElement);
