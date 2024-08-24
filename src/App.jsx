import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../src/components/Home/Home.jsx';
import Card from '../src/components/Card/Card.jsx';
import Layout from '../src/components/Layout/Layout.jsx';  // Assuming you have a Layout component
import About from '../src/components/About/About.jsx';  // Assuming you have an About component

import './App.css';

let routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,  // Use the Layout component directly
    children: [
      { index: true, element: <Home /> },  // Use the Home component directly
      { path: "home", element: <Home /> },
      { path: "about", element: <About /> },  // Make sure you have an About component
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




