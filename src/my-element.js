import {LitElement, html} from 'lit-element';

export default class MyElement extends LitElement {

  onClick(event) {
    this.dispatchEvent(new CustomEvent('special-click', {bubbles: true, composed: true}));
  }
  render() {
    return html`
      <button id="button1" type="button" @click=${this.onClick}></button>
      <button id="button2" type="button" @click=${event => this.onClick(event)}></button>
    `;
  }
}

customElements.define('my-element', MyElement);
