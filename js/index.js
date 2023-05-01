import Header from './Header.mjs';
import Main from './Main.mjs';
import Footer from './Footer.mjs';

document.body.classList.add('body');

const header = new Header();
const main = new Main();
const footer = new Footer();

document.body.append(header.$view, main.$view, footer.$view);
