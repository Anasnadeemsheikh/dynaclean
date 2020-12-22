import React from 'react';
import './App.css';
import Dashboard from './dashboard';

import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import rootReducers from './src/reducers'


const store = createStore(rootReducers,applyMiddleware(thunk));


const App = () => {
  return (
    <Provider store={store}> 

    <div className="App">
      <Dashboard/>
    
    
    </div>
    </Provider>
  );
}

export default App;
