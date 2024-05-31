import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthContextProvider from './store/AuthContext';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Blogs from './pages/Blogs';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import BlogDetail from './pages/BlogDetail';
import ProductDetail from './pages/ProductDetail';
import ProductContextProvider from './store/ProductContext';
import NotFound from './components/notFound/NotFound';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

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
        // loader: productDetailLoader,
      },
      {
        path: 'blogs',
        element: <Blogs />,
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

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ProductContextProvider>
        <AuthContextProvider>
          <ToastContainer
            rtl
            transition={Slide}
            autoClose={2000}
            closeOnClick={true}
            draggable={true}
            theme={
              localStorage.getItem('darkMode') === 'true' ? 'dark' : 'light'
            }
          />
          <RouterProvider router={router}></RouterProvider>
        </AuthContextProvider>
      </ProductContextProvider>
    </QueryClientProvider>
  );
}

export default App;
