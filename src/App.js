
import{BrowserRouter,Routes,Route} from "react-router-dom"
import Cart from "./components/cart/cart";
import Main from "./components/main/main";
function App() {
  return (
    <BrowserRouter>
    <Routes>
     <Route path="/" element={<Main/>}/> 
     <Route path="/cart" element={<Cart/>}/> 
    </Routes>
    </BrowserRouter>
  );
}

export default App;
