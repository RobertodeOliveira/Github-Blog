import { createBrowserRouter } from 'react-router-dom'
import { Page } from '../page'
import { Home } from '../page/Home'
import { Post } from '../page/Post'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Page />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/post',
        element: <Post />,
      },
    ],
  },
])
