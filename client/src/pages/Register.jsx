import AuthForm from "../components/AuthForm";
import { registerUser } from "../api/authApi";

export default function Register() {
  return <AuthForm mode="register" onSubmit={registerUser} />;
}
