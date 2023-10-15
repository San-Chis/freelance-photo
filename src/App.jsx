import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './pages/Root'
import PhotoPortrait from './pages/PhotoPortrait'
import PhotoFamily from './pages/PhotoFamily'
import PhotoWedding from './pages/PhotoWedding'
import PhotoContent from './pages/PhotoContent'
import AboutMe from './pages/AboutMe'
import Home from './pages/Home'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/photo-portrait',
          element: <PhotoPortrait />,
        },
        {
          path: '/photo-family',
          element: <PhotoFamily />,
        },
        {
          path: '/photo-wedding',
          element: <PhotoWedding />,
        },
        {
          path: '/photo-content',
          element: <PhotoContent />,
        },
        {
          path: '/about-me',
          element: <AboutMe />,
        },
      ],
    },
  ])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
