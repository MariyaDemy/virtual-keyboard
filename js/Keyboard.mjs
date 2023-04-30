import Component from './Component.mjs';

class Keyboard extends Component {
  static btnsCharsEn = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=',
    'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del',
    'Caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '"', 'Enter',
    'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'Shift',
    'Ctrl', 'Win', 'Alt', '', 'Ctrl', '◄', '▼', '►'];

  static btnsCode = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7',
    'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR',
    'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete',
    'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote',
    'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash',
    'ArrowUp', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'ControlRight', 'ArrowLeft',
    'ArrowDown', 'ArrowRight'];

  buttons = [];

  constructor() {
    super();
    this.$view = this.render();

    const keydownHandler = (event) => {
      const btnIndex = Keyboard.btnsCode.indexOf(event.code);
      if (btnIndex !== -1) {
        this.buttons[btnIndex].classList.add('hightlight');
      }
    };

    const keyupHandler = (event) => {
      const btnIndex = Keyboard.btnsCode.indexOf(event.code);
      if (btnIndex !== -1) {
        this.buttons[btnIndex].classList.remove('hightlight');
      }
    };

    document.addEventListener('keydown', keydownHandler);
    document.addEventListener('keyup', keyupHandler);
  }

  render() {
    const keyboard = Component.createElement('div', ['keyboard']);

    for (let i = 0; i < Keyboard.btnsCharsEn.length; i += 1) {
      if (Keyboard.btnsCharsEn[i] === 'Backspace') {
        this.buttons.push(Keyboard.button({ char: Keyboard.btnsCharsEn[i], width: '144px' }));
      } else if (Keyboard.btnsCharsEn[i] === 'Caps') {
        this.buttons.push(Keyboard.button({ char: Keyboard.btnsCharsEn[i], width: '100px' }));
      } else if (Keyboard.btnsCharsEn[i] === 'Tab') {
        this.buttons.push(Keyboard.button({ char: Keyboard.btnsCharsEn[i], width: '85px' }));
      } else if (Keyboard.btnsCharsEn[i] === '\\') {
        this.buttons.push(Keyboard.button({ char: Keyboard.btnsCharsEn[i], width: '55px' }));
      } else if (Keyboard.btnsCharsEn[i] === 'Enter') {
        this.buttons.push(Keyboard.button({ char: Keyboard.btnsCharsEn[i], width: '127px' }));
      } else if (Keyboard.btnsCharsEn[i] === '') {
        this.buttons.push(Keyboard.button({ char: Keyboard.btnsCharsEn[i], width: '260px' }));
      } else if (Keyboard.btnsCharsEn[i] === 'Shift') {
        this.buttons.push(Keyboard.button({ char: Keyboard.btnsCharsEn[i], width: '114px' }));
      } else {
        this.buttons.push(Keyboard.button({ char: Keyboard.btnsCharsEn[i], width: '40px' }));
      }
    }

    keyboard.append(...this.buttons);

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
