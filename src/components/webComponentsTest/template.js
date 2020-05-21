class TemplateTest extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({mode: 'open'});
    const template = 
      document.getElementById('template-test').content;
    shadowRoot.appendChild(template);
  }
}
window.customElements.define('template-test',TemplateTest);