import React, { useEffect, useState } from "react";

function Page1() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [isHintVisible, setIsHintVisible] = useState(false);

    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
    document.body.classList.add("page1");
    const head = document.querySelector("head");
    head.classList.add("header1");
  }, []);

  const handleFocus = () => {
    setIsHintVisible(true); 
  }

  const handleBlur = () => {
    setIsHintVisible(false)
  }

  const validateForm = () => {
    const newErrors = {};
    if (!username) {
      newErrors.username = "Username is required."
    }
    if (!email) {
      newErrors.email = "Email is required."
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email address is invalid"
    }
    return newErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formErrors = validateForm()
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsLoading(true);
    setErrors({});

    console.log('Submitting with:', { username, email });

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log("Submission Successful!");
      alert(`Welcome, ${username}`);

    } catch (error) {
      console.error("Submission failed:", error);
      setErrors({
        submit: "Failed to submit the form. Please try again."
      })
    } finally {
      setIsLoading(false);
    }
  };

    return (
        <div className="wrapper">
      <div className="container-div">
        <div className="card-input">
          <h1>Welcome</h1>
          
          <input
            className="input-1"
            id="usernameInput"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {errors.username && <p className="error-text">{errors.username}</p>}
          <input
            className="input-2"
            type="email"
            id="emailInput"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          {isHintVisible && (
            <p className="hint-text">Remember to include the "@" symbol.</p>
          )}
          {errors.email && <p className="error-text">{errors.email}</p>}

          <button className="submit" type="submit" disabled={isLoading}>{isLoading ? 'Submitting...' : 'Submit'}</button>
          {errors.submit && <p className="error-text submit-error">{errors.submit}</p>}
        </div>
      </div>
    </div>
    );
    }

export default Page1;