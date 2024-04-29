import { 
  createRoutesFromElements, 
  createBrowserRouter, 
  RouterProvider, 
  Route 
} from 'react-router-dom'
import { 
  Layout, 
  Home,
  ListPage,
  SinglePage,
 } from './pages'


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route path='' element={<Home />}/>
        <Route path='list' element={<ListPage />}/>
        <Route path=':id' element={<SinglePage />}/>
      </Route>
    )
  )

  return <RouterProvider router={router} />
}

export default App
