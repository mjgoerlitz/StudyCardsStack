import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Deck from './Deck'
import { Header } from "./Header";
import './index.css'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/decks/:deckId',
    element: <Deck />
  }/** // TO IMPLEMENT
  {
    path: '/login',
    element: <Login />
  }
  */
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className='page'>
      <Header />
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
