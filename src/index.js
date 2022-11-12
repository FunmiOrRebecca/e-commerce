import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import { UserProvider } from './contexts/user.context';
import { DisplayDetailsProvider } from './contexts/display.details.context';
import {CategoriesProvider} from './contexts/categories.context.jsx';
import { Provider } from 'react-redux';
import {store} from './store/store';


const container = document.getElementById('root');
const root = createRoot( container );
root.render(
  <React.StrictMode>
  <Provider store={store}>
  <BrowserRouter>
  <UserProvider>
  {/*<CategoriesProvider>*/}
  <DisplayDetailsProvider>
  <App /> 
  </DisplayDetailsProvider>
  {/*</CategoriesProvider>*/}
  </UserProvider>
  </BrowserRouter>
  </Provider>
  </React.StrictMode>
)
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
