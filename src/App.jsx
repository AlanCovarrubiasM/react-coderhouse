import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartContainer from './components/CartContainer/CartContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/producto/:id' element={<ItemDetailContainer/>}/>
          <Route path='/categoria/:category' element={<ItemListContainer/>}/>
          <Route path='/carrito' element={<CartContainer/>}/>
        </Routes>
      </BrowserRouter>
      
    
  )
}

export default App
