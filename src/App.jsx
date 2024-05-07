
import Navbar from './components/Navbar';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import VideoList from './components/VideoList';
import Footer from './components/Footer';
import BookList from './components/BookList';
import './index.css'
import About from './components/About';
import Navbar2 from './components/Navbar2';
import Footer2 from './components/Footer2';
import Books from './components/Books';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <>
    {/* <Navbar/> */}
    <Navbar2/>
    <Section2/>
    {/* <Section1/> */}
   {/* <VideoList/> */}
   <BookList/>
   {/* <Books/> */}
  <About/>
   {/* <Footer/> */}
   <Footer2/>
   
    </>
  )
}

export default App
