import React, { Component } from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import './App.css';

import reducers from './reducers'
import GridBoard from './components/grid-board'
import NextBlock from './components/next-block'
import ScoreBoard from './components/score-board'
import Controls from './components/controls'
import MessagePopup from './components/message-popup'
import { moveDown, moveLeft, moveRight, rotate } from './actions'

const store = createStore(reducers)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Tetris Redux</h1>
          </header>
          <GridBoard />
          <NextBlock />
          <ScoreBoard />
          <Controls />
          <MessagePopup />
        </div>
      </Provider>
    );
  }
}

export default App;

window.addEventListener('keydown', (e) => {

  console.log(e.keyCode)

  switch(e.keyCode) {
    case 40:
      // down
      store.dispatch(moveDown())
      break
      
    case 37:
      // left
      store.dispatch(moveLeft())
      break
    
    case 39:
      // right
      store.dispatch(moveRight())
      break
    
    case 32:
      // right
      store.dispatch(rotate())
      break
    
    default:
      break
  }
  
})
