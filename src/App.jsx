import './App.css'
import { BrowserRouter as Router,Routes,Route  } from 'react-router-dom'
import PrivateRoutes from './components/privateRoutes'
import Login from './pages/login'
import Room from './pages/room' 
import { AuthProvider } from './utils/AuthContext'

function App() {
  
  return (
    
    <Router>
      <AuthProvider>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        
        <Route element={<PrivateRoutes/>}>
        <Route path='/' element={<Room/>} />
        </Route>

      </Routes>
      </AuthProvider>

    </Router>
     
   
  )
}

export default App
