import { createRoot } from 'react-dom/client';
import "./index.css";
import { Dashboard, Home, Test } from "./app/pages/main.ts";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { App } from './App.tsx';


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/Dashboard",
                element: <Dashboard />
            }
        ]
    },
    {
        path: "/Test",
        element: <Test />
    }
])


createRoot(
    document.getElementById('root')!).render(
        <RouterProvider  router={router}/>
    );