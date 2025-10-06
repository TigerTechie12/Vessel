
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Dashboard from './pages/dashboard'
import {Wallets} from './pages/wallet'
import './App.css'

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Dashboard></Dashboard>}></Route>
      <Route path='/wallet' element={<Wallets></Wallets>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
