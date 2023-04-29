import Component from "./Component.mjs";

class Button extends Component {
    constructor(options) {
        super();
        this.width = options.width;
        this.$view = this._render();
    }

    _render(){
        const button = super._createElement("button", ["textarea"]);

        console.log(button)

        return button;
    }
}

export default Button;