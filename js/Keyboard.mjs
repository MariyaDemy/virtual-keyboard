import Component from './Component.mjs';

class Keyboard extends Component {
  static btnsCharsEn = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=',
    'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del',
    'Caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '"', 'Enter',
    'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'Shift',
    'Ctrl', 'Win', 'Alt', '', 'Ctrl', '◄', '▼', '►'];

  static getIndex(shiftClicked, russian, caps) {
    const noShift = shiftClicked === caps ? 0 : 1;
    return russian ? noShift + 2 : noShift;
  }

  static code2CharObj = {
    Backquote: ['`', '~', 'ё', 'Ё'],
    Digit1: ['1', '!', '1', '!'],
    Digit2: ['2', '@', '2', '@'],
    Digit3: ['3', '#', '3', '#'],
    Digit4: ['4', '$', '4', '$'],
    Digit5: ['5', '%', '5', '%'],
    Digit6: ['6', '^', '6', '^'],
    Digit7: ['7', '&', '7', '&'],
    Digit8: ['8', '*', '8', '*'],
    Digit9: ['9', '(', '9', '('],
    Digit0: ['0', ')', '0', ')'],
    Minus: ['-', '_', '-', '_'],
    Equal: ['=', '+', '=', '+'],
    KeyQ: ['q', 'Q', 'й', 'Й'],
    KeyW: ['w', 'W', 'ц', 'Ц'],
    KeyE: ['e', 'E', 'у', 'У'],
    KeyR: ['r', 'R', 'к', 'К'],
    KeyT: ['t', 'T', 'е', 'Е'],
    KeyY: ['y', 'Y', 'н', 'Н'],
    KeyU: ['u', 'U', 'г', 'Г'],
    KeyI: ['i', 'I', 'ш', 'Ш'],
    KeyO: ['o', 'O', 'щ', 'Щ'],
    KeyP: ['p', 'P', 'з', 'З'],
    BracketLeft: ['[', '{', 'х', 'Х'],
    BracketRight: [']', '}', 'ъ', 'Ъ'],
    Backslash: ['\\', '|', '\\', '/'],
    KeyA: ['a', 'A', 'ф', 'Ф'],
    KeyS: ['s', 'S', 'ы', 'Ы'],
    KeyD: ['d', 'D', 'в', 'В'],
    KeyF: ['f', 'F', 'а', 'А'],
    KeyG: ['g', 'G', 'п', 'П'],
    KeyH: ['h', 'H', 'р', 'Р'],
    KeyJ: ['j', 'J', 'о', 'О'],
    KeyK: ['k', 'K', 'л', 'Л'],
    KeyL: ['l', 'L', 'д', 'Д'],
    Semicolon: [';', ':', 'ж', 'Ж'],
    Quote: ["'", '"', 'э', 'Э'],
    KeyZ: ['z', 'Z', 'я', 'Я'],
    KeyX: ['x', 'X', 'ч', 'Ч'],
    KeyC: ['c', 'C', 'с', 'С'],
    KeyV: ['v', 'V', 'м', 'М'],
    KeyB: ['b', 'B', 'и', 'И'],
    KeyN: ['n', 'N', 'т', 'Т'],
    KeyM: ['m', 'M', 'ь', 'Ь'],
    Comma: [',', '<', 'б', 'Б'],
    Period: ['.', '>', 'ю', 'Ю'],
    Slash: ['/', '?', '.', ','],
  };

  static btnCode = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7',
    'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR',
    'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete',
    'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote',
    'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash',
    'ArrowUp', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'ControlRight', 'ArrowLeft',
    'ArrowDown', 'ArrowRight'];

  buttons = [];

  isShiftClicked = false;

  isCapsClicked = false;

  constructor() {
    super();
    this.$view = this.createComponent();

    const keydownHandler = (event) => {
      const btnIndex = Keyboard.btnCode.indexOf(event.code);
      if (btnIndex !== -1) {
        this.buttons[btnIndex].classList.add('hightlight');
      }
      if (event.code === 'AltLeft') {
        event.preventDefault();
      }
      if (event.code === 'Tab') {
        const customKeyEvent = new KeyboardEvent('virtual-keydown', { key: 'Tab', bubbles: true });
        this.$view.dispatchEvent(customKeyEvent);
      }

      if (event.code === 'ShiftRight' || event.code === 'ShiftLeft') {
        this.isShiftClicked = true;

        for (let i = 0; i < this.buttons.length; i += 1) {
          const codeCharIndex = Keyboard.getIndex(this.isShiftClicked, false, this.isCapsClicked);
          if (Keyboard.code2CharObj[Keyboard.btnCode[i]]) {
            this.buttons[i].innerText = Keyboard.code2CharObj[Keyboard.btnCode[i]][codeCharIndex];
          }
        }
      }

      if (event.code === 'CapsLock') {
        this.isCapsClicked = !this.isCapsClicked;
      }
    };

    const keyupHandler = (event) => {
      const btnIndex = Keyboard.btnCode.indexOf(event.code);
      if (btnIndex !== -1) {
        this.buttons[btnIndex].classList.remove('hightlight');
      }

      if (!event.shiftKey) {
        this.isShiftClicked = false;

        for (let i = 0; i < this.buttons.length; i += 1) {
          const codeCharIndex = Keyboard.getIndex(this.isShiftClicked, false, this.isCapsClicked);
          if (Keyboard.code2CharObj[Keyboard.btnCode[i]]) {
            this.buttons[i].innerText = Keyboard.code2CharObj[Keyboard.btnCode[i]][codeCharIndex];
          }
        }
      }
    };

    document.addEventListener('keydown', keydownHandler);
    document.addEventListener('keyup', keyupHandler);
  }

  createComponent() {
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

    const keyboardClickHandler = (event) => {
      if (event.target.tagName !== 'BUTTON') return;

      const customKeyEvent = new KeyboardEvent('virtual-keydown', { key: `${event.target.innerText}`, bubbles: true });
      event.target.dispatchEvent(customKeyEvent);

      if (event.target.innerHTML === 'Shift') {
        this.isShiftClicked = !this.isShiftClicked;

        for (let i = 0; i < this.buttons.length; i += 1) {
          const codeCharIndex = Keyboard.getIndex(this.isShiftClicked, false, this.isCapsClicked);
          if (Keyboard.code2CharObj[Keyboard.btnCode[i]]) {
            this.buttons[i].innerText = Keyboard.code2CharObj[Keyboard.btnCode[i]][codeCharIndex];
          }
        }
      } else if (event.target.innerHTML !== 'Shift') {
        if (!event.shiftKey) {
          this.isShiftClicked = false;

          for (let i = 0; i < this.buttons.length; i += 1) {
            const codeCharIndex = Keyboard.getIndex(this.isShiftClicked, false, this.isCapsClicked);
            if (Keyboard.code2CharObj[Keyboard.btnCode[i]]) {
              this.buttons[i].innerText = Keyboard.code2CharObj[Keyboard.btnCode[i]][codeCharIndex];
            }
          }
        }
      }

      if (event.target.innerHTML === 'Caps') {
        this.isCapsClicked = !this.isCapsClicked;

        for (let i = 0; i < this.buttons.length; i += 1) {
          const codeCharIndex = Keyboard.getIndex(this.isShiftClicked, false, this.isCapsClicked);
          if (Keyboard.code2CharObj[Keyboard.btnCode[i]]) {
            this.buttons[i].innerText = Keyboard.code2CharObj[Keyboard.btnCode[i]][codeCharIndex];
          }
        }
      }
    };

    keyboard.addEventListener('click', keyboardClickHandler);

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
