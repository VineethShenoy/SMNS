import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LogoGenerator from './components/LogoGenerator'

// Uncomment this to generate a logo, then comment it again after saving the logo
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <LogoGenerator />
//   </React.StrictMode>,
// )

// Use this for the actual app
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
