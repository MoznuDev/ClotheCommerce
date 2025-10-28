
import { Route, Routes } from 'react-router-dom'
import './App.css'
import RootLayout from './Components/Layout/RootLayout'
import Home from './Components/Page/Home/Home'
import Shop from './Components/Page/Shop/Shop'
import About from './Components/Page/About/About'
import Contract from './Components/Page/Contract/Contract'

function App() {
 

  return (
    <>
     <Routes>
      <Route path="/" element={<RootLayout/>}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/contract" element={<Contract />} />
      </Route>
    </Routes>
    </>
  )
}

export default App
