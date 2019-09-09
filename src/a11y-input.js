import { LitElement, html, css } from 'lit-element';

export class A11yInput extends LitElement {

  // defines type
  static get properties() {
    return {
      label: { type: String },
      value: { type: String },
    };
  }
  
  constructor() {
    super();
    this.label = '';
    this.value = '';
    // ...
  }
  
  update(changedProperties) {
    super.update(changedProperties);
    if (changedProperties.has('value')) {
      if (this.value === 'cat') {
        console.log('We like cats too :)');
      }
      this.inputEl.value = this.value;
    }
  }

  // this represents "light DOM" - provided by user / element's children (latter in this case)
  connectedCallback() {
    super.connectedCallback();
    this.labelEl = document.createElement('label');
    this.labelEl.innerText = this.label;
    this.labelEl.setAttribute('slot', 'label');
    this.appendChild(this.labelEl);
  
    this.inputEl = document.createElement('input');
    this.inputEl.setAttribute('slot', 'input');
    this.appendChild(this.inputEl);
  }

  // this represents 'shadow DOM'
  render() {
    return html`
      <slot name="label"></slot>
      <slot name="input"></slot>
    `;
  }
}

customElements.define('a11y-input', A11yInput);