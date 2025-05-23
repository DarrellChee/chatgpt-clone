import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import App from './App';
import Home from './home/home';

const router = createBrowserRouter([
    {
        path : '/', element : <Home/>
    },
    {
        path : '/chat', element : <App/>
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);
