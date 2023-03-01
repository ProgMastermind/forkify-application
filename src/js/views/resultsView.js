import View from './View';
import icons from '../../img/icons.svg';
import previewView from './previewView';
class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage =
    'No recipes are found for your query, please try another one!';
  _message = '';

  _generateMarkup() {
    return this._data
      .map(results => {
        return previewView.render(results, false);
      })
      .join('');
  }
}

export default new ResultsView();
