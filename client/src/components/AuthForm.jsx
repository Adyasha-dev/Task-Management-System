import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AuthForm = ({ mode, onSubmit }) => {
  const navigate = useNavigate();
  const isRegister = mode === "register";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const payload = isRegister
        ? formData
        : {
            email: formData.email,
            password: formData.password,
          };

      const response = await onSubmit(payload);
      console.log("Response:", response);
      localStorage.setItem("token", response.token);
      localStorage.setItem("user", JSON.stringify(response.user));

      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 mx-auto" style={{ maxWidth: "450px" }}>
        <h2 className="text-center mb-4">
          {isRegister ? "Register" : "Login"}
        </h2>

        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleSubmit}>
          {isRegister && (
            <div className="mb-3">
              <label>Name</label>

              <input
                className="form-control"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
          )}

          <div className="mb-3">
            <label>Email</label>

            <input
              type="email"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label>Password</label>

            <input
              type="password"
              className="form-control"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <button className="btn btn-primary w-100">
            {loading ? "Loading..." : isRegister ? "Register" : "Login"}
          </button>
        </form>

        <p className="text-center mt-3">
          {isRegister ? (
            <Link to="/login">Already have an account?</Link>
          ) : (
            <Link to="/register">Create Account</Link>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
