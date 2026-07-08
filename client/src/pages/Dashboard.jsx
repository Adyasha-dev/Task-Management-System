import Navbar from "../components/Navbar";
export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <Navbar />

      <div className="container mt-5">
        <h2>Welcome {user?.name}</h2>
      </div>
    </>
  );
}
