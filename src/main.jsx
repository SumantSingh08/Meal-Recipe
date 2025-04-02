import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider,  createHashRouter ,  } from 'react-router-dom'
import App from './App.jsx'
import Meal from './components/mealInfo.jsx'
import Layout from './Layout.jsx'

/* const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<App/>} />
      <Route path='recipe/:id' element={<Meal/>} />
   </Route>
  )
) */
const route = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <App /> },
      { path:'recipe/:id', element: <Meal /> }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <RouterProvider router={route}/>
)
