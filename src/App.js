import './App.css';
import Navbar from './Components/Navbar/navbar.jsx';
import { Shop } from './Pages/shop.jsx';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { ShopCategory } from './Pages/shopCategory.jsx';
import Product from './Pages/Product.jsx';
import LoginSignUp from './Pages/loginSignUp.jsx';
import Cart from './Pages/Cart.jsx';
import Footer from './Components/Footer/Footer.jsx';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kids_banner from './Components/Assets/banner_kids.png'


//1:47:39

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>} />
        <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}/>
        <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>}/>
        <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kid"/>}/>
        <Route path='/product' element={<Product />}/>
        <Route path=':productID' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignUp/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;