import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import reportWebVitals from './reportWebVitals'
import Users from './components/users'
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    {/*<Users/>*/}
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
