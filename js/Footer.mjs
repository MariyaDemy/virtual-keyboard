import Component from './Component.mjs';

class Footer extends Component {
  constructor() {
    super();
    this.$view = Footer.createComponent();
  }

  static createComponent() {
    const footer = Component.createElement('footer', ['footer']);
    const container = Component.createElement('div', ['container']);
    const footerText = Component.createElement('p', ['footer__text'], 'Keybord for Windows OS');
    const footerText2 = Component.createElement('p', ['footer__text'], 'Press Shift + Alt to switch language');
    container.append(footerText, footerText2);
    footer.append(container);

    return footer;
  }
}

export default Footer;
