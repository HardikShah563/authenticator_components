// importing from react
import React, { useRef, useEffect, useState } from 'react';
// importing stylesheets
import "../style/otpInput.css";

function OtpInput({ numberOfDigits, correctOTP }) {
    numberOfDigits = 6;
    correctOTP = "123456";
    const [otp, setOtp] = useState(new Array(numberOfDigits).fill(""));
    const [otpError, setOtpError] = useState(null);
    const otpBoxReference = useRef([]);

    function handleChange(value, index) {
        let newArr = [...otp];
        newArr[index] = value;
        setOtp(newArr);

        if (value && index < numberOfDigits - 1) {
            otpBoxReference.current[index + 1].focus();
        }
    }

    function handleBackspaceAndEnter(e, index) {
        if (e.key === "Backspace" && !e.target.value && index > 0) {
            otpBoxReference.current[index - 1].focus();
        }
        if (e.key === "Enter" && e.target.value && index < numberOfDigits - 1) {
            otpBoxReference.current[index + 1].focus();
        }
    }

    function submitOTP() {
        console.log("Submission handled...");
    }

    useEffect(() => {
        if(otp.join("").length == 6 && otp.join("") === correctOTP) {
            submitOTP();
        }

        if (otp.join("") !== "" && otp.join("") !== correctOTP) {
            setOtpError("❌ Wrong OTP Please Check Again");
        } else {
            setOtpError(null);
        }
    }, [otp]);

    return (
        <div className="">
            <h1 className="txt-ctr margin-block-20 heading">OTP Input With Validation</h1>

            <div className="otp-input-box">
                {otp.map((digit, index) => (
                    <input
                        key={index}
                        value={digit}
                        maxLength={1}
                        onChange={(e) => handleChange(e.target.value, index)}
                        onKeyUp={(e) => handleBackspaceAndEnter(e, index)}
                        ref={(reference) => (otpBoxReference.current[index] = reference)}
                        className="otp-input"
                    />
                ))}

            </div>
            <p className={`txt-ctr ${otpError ? 'error-show' : ''}`}>{otpError}</p>
        </div>
    );
}

export default OtpInput;
