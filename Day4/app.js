class FormRegister extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    let $teamplate = document.getElementById("form-register");
    this.shadowRoot.appendChild($teamplate.content.cloneNode(true));
  }
}
window.customElements.define("form-register", FormRegister);
