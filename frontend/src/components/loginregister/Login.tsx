import { useEffect } from "react";
import { FaKey, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/login-background.jpg";

const Login = () => {
  useEffect(() => {
    // Set the background image and size
    document.body.style.backgroundImage = `url(${logo})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";

    // Clean up when the component is unmounted
    return () => {
      document.body.style.backgroundImage = ""; // Reset to default
      document.body.style.backgroundSize = "";
      document.body.style.backgroundPosition = "";
    };
  }, []);

  return (
    <>
      <div className="container-fluid">
        <h1 className="text-center">Servi-Seek</h1>
        <h3 className="text-center">Marinduque's Marketplace of Services</h3>
        <div className="container p-4 bg-light rounded">
          <h2 className="text-center">
            <FaUser />
            Login
          </h2>
          <form action="">
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">
                <FaUser
                  style={{ verticalAlign: "middle", marginBottom: "5px" }}
                />
                Username or Email
              </label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label htmlFor="floatingPassword">
                <FaKey
                  style={{ verticalAlign: "middle", marginBottom: "5px" }}
                />
                Password
              </label>
            </div>
            <div className="d-grid m-3">
              <button type="button" className="btn btn-primary btn-block">
                Login
              </button>
            </div>
            <div className="container text-center">
              Don't have any account? <Link to="/">Sign Up</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
