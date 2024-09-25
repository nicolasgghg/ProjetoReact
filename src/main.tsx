import { createRoot } from 'react-dom/client';
import "./index.css";
import { Dashboard, Home, Test } from "./app/pages/main.ts";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
    {
        path: "/*",
        element: <Home />
    },
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/Dashboard",
        element: <Dashboard />
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