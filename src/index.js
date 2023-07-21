//libraries
import React from 'react'
import { createRoot } from 'react-dom/client'

import ContextProvider from './context/Context';

//components
import App from './App'


const root = createRoot(document.getElementById('root'))
root.render(
  <ContextProvider>
    <App />
  </ContextProvider>
)
