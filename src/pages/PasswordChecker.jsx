// importing from react
import React, { useState } from 'react';
// importing from react-icons
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
// importing stylesheet
import "../style/passwordChecker.css";

export default function PasswordChecker() {
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({
        minValueValidation: false,
        numberValidation: false,
        capitalLetterValidation: false,
        specialCharacterValidation: false,
    });

    function handleChange(event) {
        const newPassword = event.target.value;
        setPassword(newPassword);
        validatePassword(newPassword);
    };

    function validatePassword(password) {
        setErrors({
            minValueValidation: password.length >= 8,
            numberValidation: /\d/.test(password),
            capitalLetterValidation: /[A-Z]/.test(password),
            specialCharacterValidation: /[^A-Za-z0-9]/.test(password),
        });
    };

    return (
        <div className="page">
            <h1 className="txt-ctr margin-block-20 heading">Password Validator</h1>
            
            <input
                type="password"
                value={password}
                onChange={handleChange}
                className="input"
                placeholder="Pass****"
            />

            {Object.entries(errors).map(([key, value]) => (
                <div key={key} className="error-readings">
                    {value ? (
                        <TiTick className={`${value ? "success" : "error"}`} />
                    ) : (
                        <RxCross2 className={`${value ? "success" : "error"}`} />
                    )}

                    <p className={`${value ? "success" : "error"}`}>
                        {key === 'minValueValidation' && 'Password must be at least 8 Characters'}
                        {key === 'numberValidation' && 'Password must have at least one Number'}
                        {key === 'capitalLetterValidation' && 'Password must have at least one Capital Letter'}
                        {key === 'specialCharacterValidation' && 'Password must have at least one Special Character'}
                    </p>
                </div>
            ))}
        </div>
    );
};