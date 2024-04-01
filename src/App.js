import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/HeaderComponent';
import FrontComponent from './components/FrontComponent';
import ProductComponent from './components/ProductComponent';
import ListProduct from './components/ListProduct';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListCategory from './components/ListCategory';
import CategoryComponent from './components/CategoryComponent';

function App() {
  return (
    <div className="App">
      {/* <HeaderComponent/>
      <FrontComponent/> */}
      <BrowserRouter>
      <HeaderComponent/>
      <Routes>
        <Route path='/' element={<FrontComponent/>}/>
        <Route path='/listproduct' element={<ListProduct/>}/>
        <Route path='/listcategory' element={<ListCategory/>}/>
        <Route path='/add-product' element={<ProductComponent/>}/>
        <Route path='/update-product/:id' element={<ProductComponent/>}/>
        <Route path='/add-category' element={<CategoryComponent/>}/>
        <Route path='/update-category/:id' element={<CategoryComponent/>}/>
        
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
