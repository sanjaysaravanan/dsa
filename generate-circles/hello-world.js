class HelloWorld extends HTMLElement {
  // connect component
  connectedCallback() {
    this.textContent = "Hello World!";
    this.style.color = "green";
  }
}

customElements.define("hello-world", HelloWorld);
