import App from './components/App/App'
import Homepage from './components/Homepage/Homepage';
import Products from './components/Products/Products'
import Cart from './components/Cart/Cart'

const routes = [
  {
    path: "/",
    element: <App />
  },
  {
    path: '/:name',
    element: <App />,
  },
];

export default routes;