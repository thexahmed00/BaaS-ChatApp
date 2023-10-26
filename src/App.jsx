// import './App.css'
import { BrowserRouter as Router,Routes,Route  } from 'react-router-dom'
import PrivateRoutes from './components/privateRoutes'
import Login from './pages/login'
import Room from './pages/room' 
import { AuthProvider } from './utils/AuthContext'
import RegisterPage from './pages/RegisterPage'
import ForgetPage from './pages/ForgetPage'

function App() {
  
  return (
    
    <Router>
      <AuthProvider>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/forgetpage' element={<ForgetPage/>}/>
        <Route element={<PrivateRoutes/>}>
        <Route path='/' element={<Room/>} />
        </Route>

      </Routes>
      </AuthProvider>

    </Router>
     
   
  )
}

export default App
