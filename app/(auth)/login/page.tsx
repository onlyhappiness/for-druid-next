import { notFound } from "next/navigation";
import LoginPage from "./page.client";

const Login = async () => {
  try {
    return <LoginPage />;
  } catch (e) {
    notFound();
  }
};

export default Login;
