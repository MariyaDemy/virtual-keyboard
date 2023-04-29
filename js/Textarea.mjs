import Component from "./Component.mjs";

class Textarea extends Component {
    constructor() {
        super();
        this.$view = this._render();
    }

    _render(){
        const textarea = super._createElement("textarea", ["textarea"]);

        return textarea;
    }
}

export default Textarea;