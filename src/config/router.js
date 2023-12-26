import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import OtpTemplate from "../pages/OtpTemplate";
import OtpInput from "../pages/OtpInput";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/otp-email-temp",
        element: <OtpTemplate />,
    },
    {
        path: "/otp-input",
        element: <OtpInput />,
    }
]);

export default router;