import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Create the root application component
const root = document.getElementById("root")

if(!root){
  throw new Error('The root element must exist')  // Throw an error if the root element is not found in the DOM.
}

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
