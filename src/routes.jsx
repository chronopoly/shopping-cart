import App from './components/App/App'
import Products from './components/Products/Products'
import Cart from './components/Cart/Cart'

const routes = [
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'products',
    element: <Products />,
  },
  {
    path: 'cart',
    element: <Cart />,
  }
];

export default routes;