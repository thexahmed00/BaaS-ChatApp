// import './App.css'
import { BrowserRouter as Router,Routes,Route  } from 'react-router-dom'
import PrivateRoutes from './components/privateRoutes'
import Login from './pages/login'
import Room from './pages/room' 
import { AuthProvider } from './utils/AuthContext'
import ForgetPage from './pages/ForgetPage'
import RegisterPage from './pages/RegisterPage'
import LandingPage from './pages/LandingPage'

function App() {
  
  return (
    
    <Router>
      <AuthProvider>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/forgetpage' element={<ForgetPage/>}/>
        <Route element={<PrivateRoutes/>}>
        <Route path='/landing' element={<LandingPage/>}/>
        <Route path='/room' element={<Room/>} />
        </Route>

      </Routes>
      </AuthProvider>

    </Router>
     
   
  )
}

export default App
