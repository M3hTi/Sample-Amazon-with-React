import Header from "../components/Header";

function Login() {
  return (
    <div>
      <Header />
      <div className="login-container">
        <div className="login-box">
          <h1>Sign in</h1>
          <form className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email or mobile phone number</label>
              <input type="text" id="email" name="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" />
            </div>
            <button type="submit" className="login-button">
              Sign in
            </button>
            <p className="terms">
              By continuing, you agree to Amazon's{" "}
              <a href="#">Conditions of Use</a> and{" "}
              <a href="#">Privacy Notice</a>.
            </p>
          </form>
          <div className="divider">
            <span>New to Amazon?</span>
          </div>
          <button className="create-account-button">
            Create your Amazon account
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
