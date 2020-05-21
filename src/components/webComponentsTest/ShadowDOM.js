class ShadowDomTest extends HTMLElement {
  constructor() {
    super();
    // shadow root作成
    const shadowRoot = this.attachShadow({ mode: 'open' });

    // shadow rootに追加する要素生成
    // style
    const style = document.createElement('style');
    style.innerText = 
      ':host { border : solid 1px; display: inline-block; padding:1em; }' + 
      'p { color : red }' + 
      '::slotted(p) { color : blue}'
    shadowRoot.appendChild(style);
    // p
    const text = document.createElement('slot');
    text.name = 'text';
    text.innerHTML = '<p>本文が空です</p>'
    shadowRoot.appendChild(text);

    // shadowRootにslot要素を追加
    const slot = document.createElement('slot');
    slot.name = "button";
    slot.innerHTML = '<p>からです</p>'
    shadowRoot.appendChild(slot);
  }
}

window.customElements.define('shadow-dom',ShadowDomTest);