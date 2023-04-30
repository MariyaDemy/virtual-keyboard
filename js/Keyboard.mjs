import Component from './Component.mjs';

class Keyboard extends Component {
  constructor() {
    super();
    this.$view = Keyboard.render();
  }

  static render() {
    const keyboard = Component.createElement('div', ['keyboard']);

    const btnsChars = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=',
      'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del',
      'Caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '"', 'Enter',
      'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'Shift',
      'Ctrl', 'Win', 'Alt', '', 'Ctrl', '◄', '▼', '►'];

    const buttons = [];

    for (let i = 0; i < btnsChars.length; i += 1) {
      if (btnsChars[i] === 'Backspace') {
        buttons.push(Keyboard.button({ char: btnsChars[i], width: '144px' }));
      } else if (btnsChars[i] === 'Caps') {
        buttons.push(Keyboard.button({ char: btnsChars[i], width: '100px' }));
      } else if (btnsChars[i] === 'Tab') {
        buttons.push(Keyboard.button({ char: btnsChars[i], width: '85px' }));
      } else if (btnsChars[i] === '\\') {
        buttons.push(Keyboard.button({ char: btnsChars[i], width: '55px' }));
      } else if (btnsChars[i] === 'Enter') {
        buttons.push(Keyboard.button({ char: btnsChars[i], width: '127px' }));
      } else if (btnsChars[i] === '') {
        buttons.push(Keyboard.button({ char: btnsChars[i], width: '260px' }));
      } else if (btnsChars[i] === 'Shift') {
        buttons.push(Keyboard.button({ char: btnsChars[i], width: '114px' }));
      } else {
        buttons.push(Keyboard.button({ char: btnsChars[i], width: '40px' }));
      }
    }

    keyboard.append(...buttons);

    return keyboard;
  }

  static button(options) {
    const button = Component.createElement('button', ['keyboard__key'], `${options.char}`);
    button.style.width = options.width;
    button.style.height = '40px';
    return button;
  }
}

export default Keyboard;
