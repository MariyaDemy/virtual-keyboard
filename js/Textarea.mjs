import Component from './Component.mjs';

class Textarea extends Component {
  constructor() {
    super();
    this.$view = Textarea.render();
  }

  static render() {
    const textarea = Component.createElement('textarea', ['textarea']);

    return textarea;
  }
}

export default Textarea;
