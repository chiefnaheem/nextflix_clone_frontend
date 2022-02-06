import "./register.scss";
import { useState, useRef } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState('')
  const [passConfirm, setPassConfirm] = useState('')

  const emailRef: any = useRef();
  const passRef: any = useRef();
  const passConfirmRef: any = useRef();


  const handleEmail = () => {
    setEmail(emailRef.current.value);
  };

  const handlePassword = () => {
    setPassword(passRef.current.value)
  }

  const handleFinish = () => {
    setPassConfirm(passConfirmRef.current.value);
  }

  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <button className="loginButton">Log In</button>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited endless movies, TV shows, series and more</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>Ready to watch? Enter your email to create or restart your membership</p>
        {!email ? (
          <div className="input">
            <input type="email" placeholder="Email Address" ref={emailRef} />
            <button className="registerButton" onClick={handleEmail}>
              Get Started
            </button>
          </div>
        ) : (
          <div className="input">
            <input type="password" placeholder="Email Password" ref={passRef} />
            <button className="registerButton" onClick={handlePassword}>
              Getting Started
            </button>
          </div>
        )}
        {password && (
          <form className="input">
          <input type="password" placeholder="Confirm Password" ref={passConfirmRef} />
          <button className="registerButton" onClick={handleFinish}>
            Start
          </button>
        </form>
        )}
      </div>
    </div>
  );
};

export default Register;
