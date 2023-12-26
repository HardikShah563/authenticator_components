import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import OtpTemplate from "../pages/OtpTemplate";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/otp-email-temp",
        element: <OtpTemplate />,
    }
]);

export default router;