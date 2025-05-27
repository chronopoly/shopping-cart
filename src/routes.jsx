import App from './components/App/App'
import Homepage from './components/Homepage/Homepage';
import Products from './components/Products/Products'
import Cart from './components/Cart/Cart'

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {index: true, element: <Homepage />},
      {path: 'products', element: <Products />},
      {path: 'cart', element: <Cart />}
    ]
  },
];

export default routes;