import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import './index.css'
import reducerNote from './reducers/reducerNote'
import reducerOptions from './reducers/reducerOptions'

const store = configureStore({
  reducer: {
    notes: reducerNote,
    filter: reducerOptions
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
