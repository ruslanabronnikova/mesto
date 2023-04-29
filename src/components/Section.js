export default class Section {
  constructor ({ renderer }, container ) {
    this._renderer = renderer;
    this._container = container;
  }

  rendererItems(items, user) {
    items.forEach(item => this._renderer(item, user));
  }

  appendItem(element) {
    this._container.append(element)
  }

  prependItem(element){
    this._container.prepend(element);
  }
}
