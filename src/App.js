import './App.css';
import Navbar from './Components/Navbar/navbar.jsx';
import { Shop } from './Pages/shop.jsx';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { ShopCategory } from './Pages/shopCategory.jsx';
import Product from './Pages/Product.jsx';
import LoginSignUp from './Pages/loginSignUp.jsx';
import Cart from './Pages/Cart.jsx';

//31:39

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>} />
        <Route path='/mens' element={<ShopCategory category="mens"/>}/>
        <Route path='/womens' element={<ShopCategory category="mens"/>}/>
        <Route path='/kids' element={<ShopCategory category="kids"/>}/>
        <Route path='/product' element={<Product />}/>
        <Route path=':productID' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignUp/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;