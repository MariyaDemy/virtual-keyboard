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
    container.append(footerText);
    footer.append(container);

    return footer;
  }
}

export default Footer;
