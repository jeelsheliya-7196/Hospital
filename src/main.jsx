import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './component/App/App'
import Topbar from './component/TopBar/Topbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Department from './Container/Department/Department'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Home /> */}
    <Department/>
  </React.StrictMode>,
)
