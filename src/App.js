import ProductPage from './pages/productPage';
import AboutUsPage from './pages/AboutUsPage';
import Product from './pages/product';
import Header from './container/Header';
import Home from './pages/Home';
import {Routes, Route} from "react-router"
import Footer from './container/Footer';
import { useDispatch } from "react-redux";
import { catalougeData } from "./features/Home/Home";
import { useEffect } from 'react';
import Contact from './pages/Contact';
import ContactNew from './pages/ContactNew';

function App() {

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(catalougeData()).then((result)=>{
      if(result.payload)
      {
        console.log("Catalauge Data Fetch successfully")
      }
    })
  })
  const router = [
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/productpage/:id",
      element: <ProductPage />
    },
    {
      path: "aboutus",
      element: <AboutUsPage />
    },
    {
      path: "product",
      element: <Product />
    },
    {
      path:"contact",
      element:<Contact/>
    }
  ]
  return (
    <>
      <Header />
      <Routes>
        {router.map((value, key) => {
          return (
            <Route path={value.path} element={value.element} />
          )
        })}
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
