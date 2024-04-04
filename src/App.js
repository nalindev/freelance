import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ProductPage from './components/productPage';
import AboutUsPage from './components/AboutUsPage';
import Product from './components/product';
import Slideshow from './components/TEST.JS';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
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
      path: "test",
      element: <Slideshow />
    },
  ])
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App;
