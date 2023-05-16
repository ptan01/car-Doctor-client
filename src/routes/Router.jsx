import { createBrowserRouter } from "react-router-dom";
import Main from "../leyout/Main";
import Home from "../pages/home/home/Home";
import Login from "../pages/login/Login";
import SignUp from "../pages/signup/SignUp";
import CheckOut from "../pages/checkOut/CheckOut";
import Bookings from "../pages/bookings/Bookings";
import PrivetRoute from "./PrivetRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
            },
            {
                path: '/checkout/:id',
                element: <PrivetRoute><CheckOut></CheckOut></PrivetRoute>,
                loader: ({params})=> fetch(`https://car-doctor-server-st9g.vercel.app/services/${params.id}`)
            },
            {
                path: '/bookings',
                element: <PrivetRoute><Bookings></Bookings></PrivetRoute>
            }
        ]
    }
])

export default router ;