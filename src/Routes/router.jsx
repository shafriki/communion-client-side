import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import UpcomingEvents from "../Pages/UpcomingEvents/UpcomingEvents";
import CreateEvents from "../Pages/CreateEvents/CreateEvents";
import About from "../Pages/About/About";
import SignIn from "../Pages/Authentication/SignIn/SignIn";
import SignUp from "../Pages/Authentication/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        errorElement: <h1 className="text-center mt-[30rem]">error page</h1>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/upcoming-events',
                element: <UpcomingEvents></UpcomingEvents>,
            },
            {
                path: '/create-event',
                element: <PrivateRoute><CreateEvents></CreateEvents></PrivateRoute>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/sign-in',
                element: <SignIn></SignIn>,
            },
            {
                path: 'sign-up',
                element: <SignUp></SignUp>
            }


        ]

    }
])