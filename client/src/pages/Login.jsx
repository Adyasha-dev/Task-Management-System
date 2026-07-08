import AuthForm from "../components/AuthForm";
import { loginUser } from "../api/authApi";

export default function Login() {
  return <AuthForm mode="login" onSubmit={loginUser} />;
}
