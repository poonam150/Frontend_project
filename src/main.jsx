import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { store } from './app/store.js'
import  { Toaster } from 'react-hot-toast';
import{ Provider} from "react-redux"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Toaster>
      
    </Toaster>
    <Provider store={store} > 
      <App/>

    </Provider>
    
    </BrowserRouter>
  </React.StrictMode>,
)