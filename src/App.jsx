import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../src/components/Home/Home.jsx';
import Card from '../src/components/Card/Card.jsx';
import Layout from '../src/components/Layout/Layout.jsx'; 
import SideBar from '../src/components/Sidebar/Sidebar.jsx';
import Search from '../src/components/Search/Search.jsx';

import './App.css';
import Details from './components/Details/Details.jsx';

let routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,  
    children: [
      { index: true, element: <Home /> },  
      { path: "home", element: <Home /> },
      { path: ":/id", element: <Details /> },  
      { path: "card", element: <Card /> },
      { path: "sidebar", element: <SideBar /> },
      { path: "search", element: <Search /> },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={routers} />
  );
}

export default App;




