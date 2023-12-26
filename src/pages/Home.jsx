import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();

    const gridItems = [
        {
            heading: "OTP Email Template",
            link: "/otp-email-temp",
            working: true,
        },
        {
            heading: "OTP Input Boxes",
            link: "/otp-input",
            working: true,
        },
        {
            heading: "Password Validator",
            link: "/password-validator",
            working: true,
        },
        {
            heading: "API Key Authentication",
            link: "/api-key-auth",
            working: false,
        },
        {
            heading: "Mobile Authnetication",
            link: "/mobile-auth",
            working: false,
        }
    ];
    return (
        <>
            <div className="page">
                <h1 className="txt-ctr margin-block-20 heading">Authentication</h1>

                <div className="grid">
                    {gridItems.map((item) => (
                        <div className="grid-box">
                            <div 
                                className={`status ${item.working ? "success" : "error"}`}
                            >
                                {item.working ? "New" : "Coming Soon"}
                            </div>
                            <h3>{item.heading}</h3>
                            <div className="grid-link cur" onClick={() => { window.scrollTo(0, 0); navigate(item.link) }}>View</div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
