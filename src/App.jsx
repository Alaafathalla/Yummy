import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../src/components/Home/Home.jsx';
import Card from '../src/components/Card/Card.jsx';
import Layout from '../src/components/Layout/Layout.jsx';  
import About from '../src/components/About/About.jsx';  

import './App.css';

let routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,  
    children: [
      { index: true, element: <Home /> },  
      { path: "home", element: <Home /> },
      { path: "about", element: <About /> },  
      { path: "card", element: <Card /> },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={routers} />
  );
}

export default App;




