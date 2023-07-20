import { useState } from 'react'
import './App.css'
import IncomePage from './pages/income'

import {Button} from 'primereact/button';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

function App() {
  return (
    <>
      <div>
        <IncomePage />
      </div>
    </>
  )
}

export default App
