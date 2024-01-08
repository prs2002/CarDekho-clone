import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import store from './store'

import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';

import HomeScreen from './screens/HomeScreen';
import { HelmetProvider } from 'react-helmet-async';

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<App/>}>
    <Route index={true} path='/' element={<HomeScreen/>}/>
    <Route path='/search/:keyword' element={<HomeScreen/>}/>
    <Route path='/search/:keyword/page/:pageNumber' element={<HomeScreen/>}/>
    <Route path='/page/:pageNumber' element={<HomeScreen/>}/>
 </Route>
)
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
    </HelmetProvider>
  </React.StrictMode>
);

reportWebVitals();
