import './styles/globals.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { NextUIProvider, Button } from '@nextui-org/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <Button>ola</Button>
    </NextUIProvider>
  </React.StrictMode>
)
