import { useState } from 'react';
import { BrowserRouter, Link, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import { FirstPage, Footer, Header, SecondPage, ThirdPage } from './components';

function App() {
  const [selected, setSelected] = useState('');
  return (
    <BrowserRouter>
      <Header>
        <Link to={'first_page'} 
              style={{backgroundColor: selected === 'first_page'? 'white': 'transparent', 
                      color: selected === 'first_page'? 'black' : 'white'}}>
              First page
        </Link>
        <Link to={'second_page'}
              style={{backgroundColor: selected === 'second_page'? 'white': 'transparent', 
                      color: selected === 'second_page'? 'black' : 'white'}}>
              Second page
        </Link>
        <Link to={'third_page'} 
              style={{backgroundColor: selected === 'third_page'? 'white': 'transparent', 
              color: selected === 'third_page'? 'black' : 'white'}}>
              Third page
        </Link>
      </Header>
      <Routes>
        <Route exact path={'/first_page'} element={<FirstPage setSelected={setSelected}/>}/>
        <Route path={'/second_page'} element={<SecondPage setSelected={setSelected}/>}/>
        <Route path={'/third_page'} element={<ThirdPage setSelected={setSelected}/>}/>
        <Route path="/" element={<Navigate replace to="/first_page" />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
