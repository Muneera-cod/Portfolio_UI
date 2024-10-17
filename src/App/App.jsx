import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from '../Routes/Routes'
import { MantineProvider } from '@mantine/core'
function App() {
  return (
    <MantineProvider>
    <RouterProvider router={router}></RouterProvider></MantineProvider>
  )
}

export default App
