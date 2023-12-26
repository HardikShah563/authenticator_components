// importing stylesheets
import "../style/otpTemplate.css";

export default function OtpTemplate() {
    // variables
    const otp = Math.floor(100000 + Math.random() * 900000);
    const email = "hardikts@gmail.com";

    return (
        <>
            <div className="page">
                <div className="otp-box">
                    <h1 className="txt-ctr">
                        Email Verification
                    </h1>

                    <br />

                    <p className="body-text">It seems you are registering at PMS and trying to verify your email. Here's is the verification code. Please copy it and verify your Email.</p>

                    <br />

                    <h1 className="otp-div txt-ctr">
                        {otp}
                    </h1>

                    <br />

                    <p className="body-text">If you have any queries regarding verification process. Report at <a href={`mailto:${email}`}>{email}</a></p>
                    <p className="body-text">Please do not share the verification code provided above with anyone.</p>
                    
                    <br />

                    <p className="body-text">Thanks and Regards,</p>
                    <p className="body-text">Team PMS</p>
                </div>
            </div>
        </>
    );
};
