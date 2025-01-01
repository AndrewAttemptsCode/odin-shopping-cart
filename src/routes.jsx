import App from './App'
import CheckoutPage from './routes/CheckoutPage';
import Layout from './routes/Layout';
import ShopPage from './routes/ShopPage';

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "shop",
        element: <ShopPage />,
      },
      {
        path: "checkout",
        element: <CheckoutPage />,
      },
    ]
  }
];

export default routes;