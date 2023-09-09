import './App.css'
import { BrowserRouter as Router,Routes,Route  } from 'react-router-dom'
import PrivateRoutes from './components/privateRoutes'
import Login from './pages/login'
import Room from './pages/room' 

function App() {
  
  return (
    
    <Router>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        
        <Route element={<PrivateRoutes/>}>
        <Route path='/' element={<Room/>} />
        </Route>
        
      </Routes>


    </Router>
     
   
  )
}

export default App
