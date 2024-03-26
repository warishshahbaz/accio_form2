import React, { useState } from "react";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(true);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailValid(validateEmail(e.target.value));
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordValid(e.target.value.length >= 8);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setConfirmPasswordValid(e.target.value === password);
  };

  const handleSubmit = () => {
    if (emailValid && passwordValid && confirmPasswordValid) {
      alert("Form submitted successfully");
    } else {
      alert("Can't submit the form");
    }
  };

  const validateEmail = (email) => {
    // Regular expression for validating email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2>Create an Account</h2>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            className={emailValid ? "valid" : "invalid"}
          />
          {!emailValid && (
            <span className="error">Please enter a valid email address</span>
          )}
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            className={passwordValid ? "valid" : "invalid"}
          />
          {!passwordValid && (
            <span className="error">
              Password must be at least 8 characters long
            </span>
          )}
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            className={confirmPasswordValid ? "valid" : "invalid"}
          />
          {!confirmPasswordValid && (
            <span className="error">Passwords do not match</span>
          )}
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default App;
