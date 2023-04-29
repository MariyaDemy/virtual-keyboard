import Component from "./Component.mjs";

class Footer extends Component {
    constructor() {
        super();
        this.$view = this._render();
    }

    _render(){
        const footer = super._createElement("footer", ["footer"]);
        const container = super._createElement("div", ["container"]);
        const footerText = super._createElement("p", ["footer__text"], "Keybord for Windows OS");
        container.append(footerText);
        footer.append(container);

        return footer;
    };

}


export default Footer;