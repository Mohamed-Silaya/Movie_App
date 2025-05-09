import React from 'react';
import { BrowserRouter } from 'react-router-dom';  // Fixed import
import { Provider } from 'react-redux';
import { store } from './store/store';
import RouteList from './Routes/RouteList';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <RouteList />
      </BrowserRouter>
    </Provider>
  );
}

export default App;