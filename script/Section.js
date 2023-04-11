export default class Section {
  constructor ({ items, renderer }, containerSelector ) {
    this._rendererItems = items;
    this._renderer = renderer;
    this._container = containerSelector;
  }

  rendererItems() {
    this._rendererItems.forEach((item) => {
      this._renderer(item);
    });
  }

  setApItem(element) {
    this._container.append(element)
  }

  setPreItem(element){
    this._container.prepend(element);
  }
}
