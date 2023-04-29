import Component from "./Component.mjs";

class Header extends Component {
    constructor() {
        super();
        this.$view = this._render();
    }

    _render(){
        const header = super._createElement("header");
        const container = super._createElement("div", ["container"]);
        const title = super._createElement("h1", ["header-title"], "RSS Virtual-keyboard");
        container.append(title);
        header.append(container);

        return header;
    };

}


export default Header;