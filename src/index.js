import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store';
import Addusers from './components/Addusers';
import Users from './components/Users';
import ShowUsers from './components/ShowUsers';
import Profile from './components/Profile';
import Commnets from './components/Commnets';

import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter,Route,Routes} from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
 
  <Provider store={store}>
  <BrowserRouter>

  
  
    <Routes>
      <Route path='/' element={<App />}></Route>
      <Route path="/users" element={<Users/>}></Route>
      <Route path='/users/add' element={<Addusers />}></Route>
      <Route path="/users/showusers" element={<ShowUsers/>}></Route>
      <Route path="/profile" element={<Profile/>}></Route>

      <Route path="/comments" element={<Commnets/>}></Route>

      
    </Routes>

  </BrowserRouter>
  </Provider>
  </>
);

reportWebVitals();
