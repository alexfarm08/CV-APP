import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PersonalInputForm from './personalForm'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PersonalInputForm />
  </StrictMode>,
)
