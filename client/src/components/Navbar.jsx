import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-light bg-light px-4">
      <span className="navbar-brand">Your Task</span>

      <div className="d-flex align-items-center gap-3">
        <span>Hi, {user?.name}</span>

        <button className="btn btn-danger btn-sm" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
}
