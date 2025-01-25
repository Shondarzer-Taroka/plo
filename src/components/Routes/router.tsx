import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import LogIn from "../LogIn";
import Users from "../Users/Users";
import Men from "../../pages/NavBarRelated/Men/Men";
import Women from "../../pages/NavBarRelated/Women/Women";

const router=createBrowserRouter([
    {
        path:'/',
        element: <App/>,
        children:[
            {
                path:'/login',
                element: <LogIn/>
            },
            {
                path:'/users',
                element:<Users/>
            },
            {
                path:'/men',
                element: <Men/>
            },
            {
                path:'/women',
                element:<Women/>
            }
        ]
    }
])


export default router