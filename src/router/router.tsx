import { createBrowserRouter } from 'react-router-dom'
import { Page } from '../page'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Page />,
    children: [
      {
        path: '/categoryIssue',
        element: '',
      },
    ],
  },
])
