import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PersonalInputForm from './personalForm'
import { EducationForm } from './education'
import { ExperienceForm } from './experience'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PersonalInputForm />
    <EducationForm />
    <ExperienceForm />
  </StrictMode>,
)
