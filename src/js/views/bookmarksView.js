import icons from 'url:../../img/icons.svg'; // Parcel: Use the icons in the dist folder
import View from './View';
import previewView from './previewView';

class BookmarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMsg = `No bookmarks yet.`;
  _msg = ``;

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  _generateMarkup() {
    return this._data
      .map(bookmark => previewView.render(bookmark, false))
      .join('');
  }
}

export default new BookmarksView();
