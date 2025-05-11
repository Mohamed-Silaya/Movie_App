import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import RouteList from './Routes/RouteList';
import './App.css';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <Provider store={store}>
      <LanguageProvider>
        <BrowserRouter>
          <RouteList />
        </BrowserRouter>
      </LanguageProvider>
    </Provider>
  );
}

export default App;
