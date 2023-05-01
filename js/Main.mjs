import Component from './Component.mjs';
import Textarea from './Textarea.mjs';
import Keyboard from './Keyboard.mjs';

class Main extends Component {
  constructor() {
    super();
    this.$view = Main.createComponent();
  }

  static createComponent() {
    const main = Component.createElement('main', ['main']);
    const container = Component.createElement('div', ['container']);

    const keyboard = new Keyboard();
    const textarea = new Textarea();

    container.append(textarea.$view, keyboard.$view);
    main.append(container);

    return main;
  }
}

export default Main;
