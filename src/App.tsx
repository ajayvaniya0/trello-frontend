import './App.css'
import { Auth } from './Screens/Auth'
import { Dashboard } from './Screens/Dashboard'
import { Board } from './Screens/Board'
import { BrowserRouter, Routes, Route } from 'react-router'

function App() {
  return <div>
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<Auth/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/board/:boardId" element={<Board/>}/>
      </Routes>
    </BrowserRouter>
  </div>
}

export default App
