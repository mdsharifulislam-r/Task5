import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Store from './Store/Store.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Store>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </Store>
   
  </React.StrictMode>,
)
