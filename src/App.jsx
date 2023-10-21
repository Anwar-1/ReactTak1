import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Navbar from './Compontes/Navbar'
import Features from './Compontes/Features'
import Footer from './Compontes/Footer'
import Pricing from './Compontes/Pricing'
import Text from './Compontes/Text'
import Book from './Compontes/Book'
import Enterpice from './Compontes/Enterpice'
import Support from './Compontes/Support'

function App() {

 
 
  return (
    <>
    <Router>
   <Navbar/>

   <Routes>
    <Route path='features' element={<Features/>}/>
    <Route index element={<Pricing/>}/>
    <Route path='enterprice' element={<Enterpice/>}/>
    <Route path='support' element={<Support/>}/>
   </Routes>
   
    <Footer/>
    </Router>
    


    </>
  )
}

export default App
