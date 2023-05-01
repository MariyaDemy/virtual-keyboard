import Component from './Component.mjs';

class Textarea extends Component {
  constructor() {
    super();
    this.$view = Textarea.createComponent();
  }

  static createComponent() {
    const textarea = Component.createElement('textarea', ['textarea']);
    textarea.autofocus = true;

    const blurHandler = () => {
      textarea.focus();
    };

    textarea.addEventListener('blur', blurHandler);

    const virtualKeydownHandler = (event) => {
      if (event.key === '►') {
        if (textarea.selectionStart === textarea.selectionEnd) {
          textarea.selectionStart += 1;
        } else {
          textarea.selectionStart = textarea.selectionEnd;
        }
      } else if (event.key === '◄') {
        if (textarea.selectionStart === 0) {
          return false;
        }
        if (textarea.selectionEnd === textarea.selectionStart) {
          textarea.selectionEnd -= 1;
        } else {
          textarea.selectionEnd = textarea.selectionStart;
        }
      } else if (event.key === '▲') {
        textarea.selectionStart = 0;
        textarea.selectionEnd = 0;
      } else if (event.key === '▼') {
        textarea.selectionStart = textarea.value.length;
        textarea.selectionEnd = textarea.value.length;
      } else if (event.key === 'Enter') {
        textarea.value += '\n';
      } else if (event.key === 'Tab') {
        textarea.value += '\t';
      } else if (event.key === 'Backspace') {
        if (textarea.value.length === 0) {
          return false;
        }
        if (textarea.selectionStart === 0) {
          return false;
        }
        const initialSelectionStart = textarea.selectionStart;
        const initialValueLength = textarea.value.length;

        const textareaValueArr = textarea.value.split('');
        textareaValueArr.splice(textarea.selectionStart - 1, 1);
        textarea.value = textareaValueArr.join('');

        textarea.selectionEnd -= 1;
        textarea.selectionStart -= 1;
        textarea.selectionStart = textarea.selectionEnd;

        if (initialSelectionStart === initialValueLength) {
          textarea.selectionEnd += 1;
          textarea.selectionStart += 1;
        }
      } else if (event.key === 'Del') {
        if (textarea.value.length === 0) {
          return false;
        }
        const initialSelectionStart = textarea.selectionStart;

        const textareaValueArr = textarea.value.split('');
        textareaValueArr.splice(textarea.selectionStart, 1);
        textarea.value = textareaValueArr.join('');

        textarea.selectionStart = initialSelectionStart;
        textarea.selectionEnd = initialSelectionStart;
      } else if (event.key === 'Shift' || event.key === 'Alt' || event.key === 'Win'
      || event.key === 'Caps' || event.key === 'Ctrl') {
        return false;
      } else if (event.key === '') {
        textarea.value += ' ';
      } else {
        textarea.value += event.key;
      }
      return 0;
    };

    document.addEventListener('virtual-keydown', virtualKeydownHandler);

    return textarea;
  }
}

export default Textarea;
