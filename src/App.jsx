
import { Route } from 'react-router'
import { Routes } from 'react-router'
import Home from './Pages/Home'
import Nav from './Components/Layout/Nav'
import Store from './Pages/Store'
import ProductView from './Pages/ProductView'
import { UserContextProvider } from './assets/context/UserContext'





export default function App() {
  return <>

    <Nav />
    
         <Routes>
        <Route index element={<UserContextProvider><Home /></UserContextProvider>} />
        <Route path='/store' element={<UserContextProvider><Store /></UserContextProvider>} />
        <Route path='/store/product/view/:id' element={<UserContextProvider><ProductView /></UserContextProvider>} />




      </Routes>

   
    
     




  </>
}
