import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ProductPage from './components/productPage';
import AboutUsPage from './components/AboutUsPage';
import Product from './components/product';

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
  ])
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App;
