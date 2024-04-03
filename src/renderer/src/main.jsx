import './styles/globals.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { NextUIProvider } from '@nextui-org/react'
import Tabs from './components/tabs'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <div className="h-screen w-full bg-stone-200 px-4 py-6">
        <div className="h-full w-full bg-white p-2 rounded-lg">
          <Tabs />
        </div>
      </div>
    </NextUIProvider>
  </React.StrictMode>
)
