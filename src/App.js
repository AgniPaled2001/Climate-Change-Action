import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {Home,Demo} from './components/home/home';
import { Imgtask } from './components/home/imgtask';
import { Font } from './components/fontawesome/fontawesome';
import { Tech } from './components/fontawesome/tech';
import { BrowserRouter,Routes, Route } from 'react-router-dom';

import Agni, { Homepagereusable } from './components/pages/Agni';
import { Change } from './components/hooksprg/useState';
import { Change1 } from './components/hooksprg/fruit';
import DateCalculator from './components/hooksprg/date';
import { Jsondetails } from './components/hooksprg/Jsondetails';

function App() {
  return (
   <>
  

   {/* <BrowserRouter>
   <Routes>
  <Route path='Agni' element={<Agni/>}/> 
    </Routes>
    </BrowserRouter> */}
    <Homepagereusable/>
  </>
  );
}
export default App;