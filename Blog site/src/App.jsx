
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

import Navbar from './Component/Navbar';
import Home from './Component/Home'
import Trending from './Component/Trending'


function App() {


  const router=createBrowserRouter(createRoutesFromElements(
    <Route element={<Navbar/>}>
       <Route path='/' element={<Home/>}/>
       <Route path='/Trending' element={<Trending/>}/>
      

    </Route>
  ))

  return (
    <>
      <RouterProvider router={router}/> 
    
    
    </>
  )
}

export default App
