import store from '../store';

export function getData(photos) {
  store.dispatch( {type: 'GET_DATA', photos} )
}

export function onSingle(id) {
  store.dispatch( {type: 'GO_TO_SINGLE', id} )
}

export function onBack() {
  store.dispatch( {type: 'GO_TO_BACK'} )
}
