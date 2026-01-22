import type { JSX } from 'react'
import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import About from './pages/About';
import Home from './pages/Home';

const App = (): JSX.Element => {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
