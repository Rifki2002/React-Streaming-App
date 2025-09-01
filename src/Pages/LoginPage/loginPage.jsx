import LoginCard from "../../components/loginCard/loginCard";
import { useEffect } from "react";

function LoginPage() {
  useEffect(() => {
    document.body.className = "bg-[url('/src/assets/background.png')] bg-cover bg-center bg-no-repeat min-h-screen flex justify-center items-center";
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <LoginCard title="Login" />
    </div>
  );
}

export default LoginPage;
