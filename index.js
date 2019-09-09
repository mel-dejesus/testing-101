import { PolymerElement, html } from '@polymer/polymer'
 
// import {data} from './data.js'
export class MyApp extends PolymerElement {
 
    
    static get properties() {
      return {
        label: { type: String, value: 'vista' },
        color: {type: String, value: 'red'}

      };
    }
    
    constructor() {
      super();
      this.label = 'vista';
      this.color = 'red'
    }

    set value(newValue) {
      console.log("hit ---------" , newValue)
      if (newValue == 'green') {
        this.color = newValue
      } else if (newValue == 'it\'s different') {
        this.label = newValue
      } else {
        return 
      }
    }

    hello() {
      console.log("hit")
      this.label = "it's different"
      this.color = "green"
    }

    static get template() {
      return html`
        <style>
          p {
            color: white
          }
          .red {
            background-color: red
          }
          .green {
            background-color: green
      
          }

        </style>

        <p class$={{color}}>{{label}}</p>
        <button on-click="hello">click</button>
        `
    }
}

customElements.define('my-app', MyApp);