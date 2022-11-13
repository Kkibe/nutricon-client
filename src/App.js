import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Topnav from "./components/Topnav";
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Blogs from './pages/Blogs';
import About from './pages/About';
import Contact from './pages/Contact';
import Error from './pages/Error';

import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import SinglePost from './pages/SinglePost';
import SingleService from './pages/SingleService';
import Cart from "./components/Cart";
import Social from "./components/Social";
import Cookie from "./components/Cookie";
import Checkout from "./components/Checkout";



const Layout = () => {
  return (
    <>
      <Topnav />
      <Outlet />
      <Social />
      <Cart />
      <Newsletter />
      <Footer />
      <Cookie />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/services",
        element: <Services/>
      },
      {
        path: "/blogs",
        element: <Blogs/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/blogs/id",
        element: <SinglePost/>
      },
      {
        path: "/services/id",
        element: <SingleService/>
      }
    ]
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register/>
  },
  {
    path: "/dashboard",
    element: <Dashboard/>
  },
  {
    path: "/checkout",
    element: <Checkout />
  },
  {
    path: "*",
    element: <Error/>
  }

])

function App() {
  return (
    <div className='app position-relative'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;