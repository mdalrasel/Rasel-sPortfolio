import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import Articles from "../pages/articles/Articles";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/projects",
                element: <Projects />
            }
            ,
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/articles",
                element: <Articles />
            }
        ]
    },
]);