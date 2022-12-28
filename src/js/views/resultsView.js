import icons from 'url:../../img/icons.svg'; // Parcel: Use the icons in the dist folder
import previewView from './previewView';
import View from './View';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMsg = `No recipes found. Please try again!`;
  _msg = ``;

  _generateMarkup() {
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}

export default new ResultsView();
