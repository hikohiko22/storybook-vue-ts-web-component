class ImwcButton extends HTMLElement{
  static get observedAttributes() {
    return ['attr'];
  }

  get attr() {
    return this.getAttribute('hoge');
  }
  set attr(val) {
    if (val) {
      this.setAttribute('attr', val);
    } else {
      this.removeAttribute('attr');
    }
  }
  constructor() {
    super();
    //この部分を追加
    this.render('hi!');
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    this.render(newVal);
  }

  render(innerText) {
    this.innerHTML = `<button>${innerText}</button>`
  }

}
// Custom Elementの定義
window.customElements.define('imwc-button', ImwcButton);