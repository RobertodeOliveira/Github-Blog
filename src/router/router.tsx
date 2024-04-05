import { createBrowserRouter } from 'react-router-dom'
import { Page } from '../page'
import { Home } from '../page/Home'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Page />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
])
