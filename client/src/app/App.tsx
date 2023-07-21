import React from "react";
import "./App.css";
import { Provider } from 'react-redux';
import store from '../store/store';
import { Home } from '../containers/Home';

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <Home />
      </Provider>
    </div>
  );
}

export default App;
