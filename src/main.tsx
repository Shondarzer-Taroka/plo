import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './components/Routes/router.tsx'
import { UserProvider } from './components/UserContext/UserContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UserProvider> 
    <RouterProvider router={router}>
      {/* <App /> */}
    </RouterProvider>
    </UserProvider>
  </StrictMode>,
)
