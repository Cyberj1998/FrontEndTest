import './App.css';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Categories from './Components/Categories'
import CreateAccount from './Pages/CreateAccount'
import SignIn from './Pages/SignIn'
import { useState } from 'react'
//


function App() {
  const[theme,setTheme]=useState('dark')
  const[gameCategory,setGameCategory]=useState('god of war')
  const[youtuber,setYoutuber]=useState('')

  return (
    <div className="App" style={{backgroundColor : theme == 'light' ? '#eff1f3' : ''}}>
      <BrowserRouter>
        <Routes>
          <Route index element={
          <>
            <Navbar theme={theme} setTheme={setTheme} />
            <Hero theme={theme} setTheme={setTheme} youtuber={youtuber} setYoutuber={setYoutuber} gameCategory={gameCategory} setGameCategory={setGameCategory} />
            <Categories theme={theme} setTheme={setTheme} youtuber={youtuber} setYoutuber={setYoutuber} gameCategory={gameCategory} setGameCategory={setGameCategory}  />
          </>
          }></Route>
          <Route path="/home" element={
            <>
            <Navbar theme={theme} setTheme={setTheme} />
            <Hero theme={theme} setTheme={setTheme} youtuber={youtuber} setYoutuber={setYoutuber} gameCategory={gameCategory} setGameCategory={setGameCategory} />
            <Categories theme={theme} setTheme={setTheme} gameCategory={gameCategory} youtuber={youtuber} setYoutuber={setYoutuber} setGameCategory={setGameCategory} />
            </>
          }></Route>
          <Route path="/CreateAccount" element={<CreateAccount />}></Route>
          <Route path="/SignIn" element={<SignIn />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
