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
import SinglePost from './pages/SinglePost';
import SingleService from './pages/SingleService';



const Layout = () => {
  return (
    <>
      <Topnav />
      <Outlet />
      <Newsletter />
      <Footer />
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
        path: "/blogs:id",
        element: <SinglePost/>
      },
      {
        path: "/services:id",
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
    path: "*",
    element: <Error/>
  }

])

function App() {
  return (
    <div className='app'>
      <div className=''>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;