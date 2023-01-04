
// import './App.css'
import HomePage from './pages/Home/HomePage'
import DonatePage from './pages/Donate/DonatePage'
import Layout from './layout/Layout'
import { Route, Routes } from 'react-router-dom'


function App() {
 

  return (
    <>
      <Routes>
      <Route path="/"  element={<Layout/>}>
        <Route index path="" element={<HomePage />} />
        <Route path="donate/:id" element={<DonatePage />} />
      </Route>
      </Routes>
     
      
    </>
  )
}
 
export default App
