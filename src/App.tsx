import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './views/Home'
import Details from './views/Details';
import Cart from './views/Cart';

const browserRouter = createBrowserRouter([
  { path: "/", element: <Home />},
  { path: "/details", element: <Details />},
  { path: "/cart", element: <Cart />}
  ]);

function App() {

  return (
    <>
      <RouterProvider router={browserRouter} />
    </>
  )
}

export default App
