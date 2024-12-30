import App from './App'
import Layout from './routes/Layout';

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/shop",
    element: <Layout />,
  }
];

export default routes;