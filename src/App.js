// importing from react
import { RouterProvider } from "react-router-dom";
// importing router
import router from "./config/router";

export default function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
};
