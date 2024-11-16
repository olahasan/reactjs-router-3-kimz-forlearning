import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import ErrorPage from './Components/ErrorPage';
import More from './Components/More';
import One from './Components/One';
import Two from './Components/Two';
import Three from './Components/Three';
import Four from './Components/Four';
import Five from './Components/Five';

const routes = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage/>,
      children:[
        {index: true, element: <Home/>},
        {
          path: 'About',
          element: <About />,
        },
        {
          path: 'Contact',
          element: <Contact />,
        }
      ]
    },
    {
      path: '/More',
      element: <More />,
      children: [
        {
          path:'One',
          element: <One />
        }
        // ,
        // {
        //   path:'Two',
        //   element: <Two />
        // }
      ]
    },
    {
      path: '/More/Two',
      element: <Two />,
      children: [
        {index: true, element: <h2 style={{textAlign:'center'}}>HI THERE</h2>},
        {
          path:'Three',
          element: <Three />
        },
        {
          path:'Four',
          element: <Four />
        },
        {
          path:'Five',
          element: <Five />
        }
      ]
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={routes}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </RouterProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
