import { TodoWrapper } from "./components/TodoWrapper";
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Product } from "./pages/Product";
import Products from "./pages/Products";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route 
            path='/todos'
            element={<TodoWrapper />} 
          />

          <Route 
            path='/products'
            element={<Products />} 
          />

          <Route 
            path='/products/:productId'
            element={<Product />} 
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
