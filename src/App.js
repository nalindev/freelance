import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ProductPage from './components/productPage';
import AboutUsPage from './components/AboutUsPage';

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
  ])
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App;
