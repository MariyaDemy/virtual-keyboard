import Component from './Component.mjs';

class Header extends Component {
  constructor() {
    super();
    this.$view = Header.render();
  }

  static render() {
    const header = Component.createElement('header');
    const container = Component.createElement('div', ['container']);
    const title = Component.createElement('h1', ['header-title'], 'RSS Virtual-keyboard');
    container.append(title);
    header.append(container);

    return header;
  }
}

export default Header;
