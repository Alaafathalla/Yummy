
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/home.jsx';
import About from './components/About/About.jsx';

import './App.css'; 


let routers=createBrowserRouter([{
  path :"/",element :"<Layout/>", children:[
    { index :true,element :"<Home/>"},
    { path :"home",element :"<Home/>"},
    { path :"about",element :"<About/>"},
  ]
 }]);

function App() {


  return (<RouterProvider router={routers}></RouterProvider>
  )}

export default App;


