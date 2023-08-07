import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Controls from './Controls.jsx'
import Header from './Header.jsx'
import GameOver from './GameOver.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GameOver />
    <Header />
    <App />
    <Controls />
  </React.StrictMode>,
)
