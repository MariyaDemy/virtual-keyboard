import Component from "./Component.mjs";
import Textarea from "./Textarea.mjs";
import Keyboard from "./Keyboard.mjs";

class Main extends Component {
    constructor() {
        super();
        this.$view = this._render();
    }

    _render(){
        const main = super._createElement("main", ["main"]);
        const container = super._createElement("div", ["container"]);
        const keyboard = new Keyboard();
        console.log(keyboard);

        const textarea = new Textarea();
        console.log(textarea);

        container.append(textarea.$view, keyboard.$view);
        main.append(container);

        return main;
    };

}


export default Main;