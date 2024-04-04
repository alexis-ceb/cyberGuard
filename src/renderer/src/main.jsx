import './styles/globals.css'
import './styles/tests.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { NextUIProvider } from '@nextui-org/react'
import App from './pages/app'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import dayjs from 'dayjs'
dayjs.extend(localizedFormat)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <App />
    </NextUIProvider>
  </React.StrictMode>
)
