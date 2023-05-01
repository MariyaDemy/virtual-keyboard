class Component {
  static createElement(tagName, classNames, textContent, onClickHandler) {
    const element = document.createElement(tagName);
    if (classNames) {
      for (let i = 0; i < classNames.length; i += 1) {
        element.classList.add(classNames[i]);
      }
    }
    if (textContent) {
      element.textContent = textContent.toString();
    }
    if (onClickHandler) {
      element.addEventListener('click', onClickHandler);
    }
    return element;
  }
}

export default Component;
