import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthContextProvider from './store/AuthContext';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Blog from './pages/Blog';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import BlogDetail from './pages/BlogDetail';
import ProductDetail, { productDetailLoader } from './pages/ProductDetail';
import ProductContextProvider from './store/ProductContext';
import NotFound from './components/notFound/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'products',
        element: <Shop />,
      },
      {
        path: 'products/:id',
        element: <ProductDetail />,
        loader: productDetailLoader,
      },
      {
        path: 'blogs',
        element: <Blog />,
      },
      {
        path: 'blogs/:id',
        element: <BlogDetail />,
      },
      {
        path: 'about-us',
        element: <AboutUs />,
      },
      {
        path: 'contact-us',
        element: <ContactUs />,
      },
      {},
    ],
  },
]);
function App() {
  return (
    <ProductContextProvider>
      <AuthContextProvider>
        <ToastContainer rtl transition={Slide} />
        <RouterProvider router={router}></RouterProvider>
      </AuthContextProvider>
    </ProductContextProvider>
  );
}

export default App;
