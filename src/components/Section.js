export default class Section {
  constructor ({ items, renderer }, container ) {
    this._rendererItems = items;
    this._renderer = renderer;
    this._container = container;
  }

  rendererItems() {
    this._rendererItems.forEach((item) => {
      this._renderer(item);
    });
  }

  appendItem(element) {
    this._container.append(element)
  }

  prependItem(element){
    this._container.prepend(element);
  }
}
