import Component from "./Component.mjs";

class Keyboard extends Component {
    constructor() {
        super();
        this.$view = this._render();
    }

    _render(){
        const keyboard = super._createElement("div", ["keyboard"]);

        const btnsChars = ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=",
        "Backspace", "Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "Del",
        "Caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", '"', "Enter",
        "Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "▲", "Shift",
        "Ctrl", "Win", "Alt", "", "Ctrl", "◄", "▼", "►", ];

        const buttons = [];

        for (let i = 0; i < btnsChars.length; i++) {
            if(btnsChars[i] === "Backspace"){
                buttons.push(this._button({char: btnsChars[i], width: "144px"}));
                continue;
            }
            if(btnsChars[i] === "Caps"){
                buttons.push(this._button({char: btnsChars[i], width: "100px"}));
                continue;
            }
            if(btnsChars[i] === "Tab"){
                buttons.push(this._button({char: btnsChars[i], width: "85px"}));
                continue;
            }
            if(btnsChars[i] === "\\"){
                buttons.push(this._button({char: btnsChars[i], width: "55px"}));
                continue;
            }
            if(btnsChars[i] === "Enter"){
                buttons.push(this._button({char: btnsChars[i], width: "127px"}));
                continue;
            }
            if(btnsChars[i] === ""){
                buttons.push(this._button({char: btnsChars[i], width: "260px"}));
                continue;
            }
            if(btnsChars[i] === "Shift"){
                buttons.push(this._button({char: btnsChars[i], width: "114px"}));
                continue;
            }
            buttons.push(this._button({char: btnsChars[i], width: "40px"}));
        }

        keyboard.append(...buttons);

        return keyboard;
    };

    _button(options){
        const button = super._createElement("button", ["keyboard__key"], `${options.char}`);
        button.style.width = options.width;
        button.style.height = "40px";
        return button;
    }
}


export default Keyboard;